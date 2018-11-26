import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'

test('default inputs', () => {
    const state = expensesReducer(undefined, {type: '@@init'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

// should add an expense

test('should add an expense', () => {
    
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: "10",
            description: 'CC',
            note: 'November',
            amount: 45000,
            createdAt: 0
        }
    }
    
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

// should edit an expense

test('should edit an expense', () => {
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description: 'CCUpdate',
            note: 'December'
        }       
    }
    
    const state = expensesReducer(expenses, action)
    expect(state[2].description).toEqual('CCUpdate')
    expect(state[2].note).toEqual('December')
})

// should not edit an expense

test('should not edit an expense', () => {
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: {
            description: 'CCUpdate',
            note: 'December'
        }       
    }
    
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const initialExpenses = [{
        id: "1",
        description: 'rent',
        note: 'November',
        amount: 120000,
        createdAt: 0
    }, {
        id: "2",
        description: 'car',
        note: 'November',
        amount: 45000,
        createdAt: 0
    }]
    
    let action = {
        type: 'SET_EXPENSES',
        expenses: initialExpenses
    }

    let state = expensesReducer([], action)
    console.log('state 1', state)
    expect(state).toEqual(initialExpenses)

    action = {
        type: 'SET_EXPENSES',
        expenses: expenses
    }
    
     state = expensesReducer(initialExpenses, action)
    console.log('state 2', state)
    expect(state).toEqual(expenses)

})