import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, createdAt, amount}) => {
        expenseData[id] = { description, note, createdAt, amount };
    });

    database.ref('expenses').set(expenseData).then(() => done());
});

test('should return removeExpense object', () => {
    const action = removeExpense({id: 'abc123'})

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })

})

test('should return editExpense object', () => {
    const action = editExpense('abc123', {
        description: 'update', 
        note: '', 
        amount: 10, 
        createdAt: 20
    })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'update', 
            note: '', 
            amount: 10, 
            createdAt: 20
        }
    })

})

test('should return an addExpenseObject', () => {
const action = addExpense(expenses[2])

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should return an addExpenseObject', () => {
    const action = addExpense(expenses[2]);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add an expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'mouse',
      amount: 3000,
      note: 'a better mouse',
      createdAt: 0
    };
  
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add a default expense to the database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    };
  
    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
})

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

//test case to fetch data from database
//0.5-remember that the beforeEach function transforms the expenses data from the fixtures file and sets it to the 
//firebase database
//1-create the mockstore (const Store = createMockStore({}))
//2-dispatch the action function which will fetch the data from the database and return an action

//3-assert that the action will include the expenses from the database and a type of SET_EXPENSE

test('should fetch expenses from firebase and set the store with them', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        console.log('actions', actions)
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    })
    
});



