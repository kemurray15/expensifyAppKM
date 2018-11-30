import uuid from 'uuid';
import database from '../firebase/firebase'

/* current flow before integrating firebase */
// component calls action generator
// action generator returns an object
// component dispatches an object
// the redux store changes

/* future flow before integrating firebase */
// component calls action generator
// action generator returns a function
// component dispatches a function
// the function runs

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    };
};

//REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => { 
            dispatch(removeExpense({id}));
        });
    };
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_EXPENSE (get the array back from firebase and update the store and done)

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            
            console.log(expenses);
            dispatch(setExpenses(expenses));
        });
    };
};


//fetch all expense data once
//parse the data into an array (check firebase.js file)
//dispatch set expenses so that the store actually gets updated