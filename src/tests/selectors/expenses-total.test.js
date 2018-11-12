import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('test for empty array', () => {
    const result = selectExpensesTotal([])
    expect(result).toBe(0)  
})
// start date filter

test('test for array with a single element', () => {
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(expenses[0].amount)  
})

test('test for array with multiple elements', () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)  
})

