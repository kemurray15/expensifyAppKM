import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('setTextFilter default input', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('setTextFilter with input', () => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('sortByAmount', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
})

test('sortByDate', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
})

test('setStartDate', () => {
    const action = setStartDate(moment(10))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(10)
    })
})

test('setEndDate', () => {
    const action = setEndDate(moment(5))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(5)
    })
})
