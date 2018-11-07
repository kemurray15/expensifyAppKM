import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

// text filter

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])  
})

// start date filter

test('should filter by start date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)
    console.log(result)
    expect(result).toEqual([expenses[2], expenses[0]])  
})


// endDate filter

test('should filter by endDate date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }

    const result = selectExpenses(expenses, filters)
    console.log(result)
    expect(result).toEqual([expenses[0], expenses[1]])  
})

// should sort by date

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)
    console.log(result)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])  
})

// should sort by amount

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)
    console.log(result)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])  
})