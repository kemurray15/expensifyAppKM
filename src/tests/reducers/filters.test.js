import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('testing filters reducer with default input', () => {
    const state = filtersReducer(undefined, { type: '@@init' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('testing SORT BY AMOUNT', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('testing SORT BY DATE', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('testing SET TEXT FILTER', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducer(currentState, { type: 'SET_TEXT_FILTER', text: 'e' })
    expect(state.text).toBe('e')
})

//should set startDate

test('testing SET START DATE filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducer(currentState, { type: 'SET_START_DATE', startDate: moment(0).startOf('month') })
    expect(state.startDate).toEqual(moment(0).startOf('month'))
})

//should set endDate

test('testing SET END DATE filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducer(currentState, { type: 'SET_END_DATE', endDate: moment(0).startOf('month') })
    expect(state.endDate).toEqual(moment(0).startOf('month'))
})


