import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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

test('should return an addExpenseObject', ()=> {
    const expenseData = {
        description: 'HOA', 
        note: 'November', 
        amount: 353, 
        createdAt: 1000
    }
    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should return an addExpenseObject in the case that no data is passed in', () => {
    const expenseData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    }
    
    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })



})