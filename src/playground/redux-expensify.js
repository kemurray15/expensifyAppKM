import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        notes = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined    
};


const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return  [
                ...state, 
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return  state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return  state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            });
        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return  {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return  {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return  {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return  {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return  {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

// Store creation
// this is very important b/c here we're wiring up a reducer to an object, thus when i work
//with the expensesReducer and reference 'state', state is not the demoState below.
//expensesReducer only has access to the expenses object so state is that object.
//Where is the structure of expenses defined?  In the declaration of expensesReducerDefaultState
//There we just say it's an empty array.  Then it continues to be defined in our 
//AddExpense action - that gives the structure of expense as we know it when we
//call the removeExpense action, which again goes to the expensesReducer b/c
//expensesReducer handles REMOVE_EXPENSE actions and that reducer has a state that
//is the expenses array b/c it is set right here.

// timestamps - positive/negative integer values in milliseconds
// time 0 = January 1 1970 (Unix Epoch).  negative values are prior, positive values are since
// 33400, 10, -203

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 300, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 100, createdAt: -1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {description: 'update', amount: 200}));

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));

// const demoState = {
//     expenses: [{
//         id: '1',
//         description: 'Jan Rent',
//         note: 'First month\'s rent',
//         amount: 1000,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };


const me = {
    name: 'Kevin',
    age: 32
};

console.log({
    ...me,
    city: 'Verona',
    age: 10,
    work: 'Parsippany'
});