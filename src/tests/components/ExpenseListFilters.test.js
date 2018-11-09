import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, onFocusChange, wrapper;

beforeEach( () => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();  
    setStartDate = jest.fn();  
    setEndDate = jest.fn();
    onFocusChange = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            setTextFilter={setTextFilter} 
            sortByDate={sortByDate} 
            sortByAmount={sortByAmount}
            setStartDate={setStartDate} 
            setEndDate={setEndDate}
            onFocusChange={onFocusChange}
            filters={filters}
        />
    )
})

//should render ExpenseListFilters w/ snapshot
test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot()
})

// //should render ExpenseListFilters w/ snapshot
test('should render ExpenseListFilters with alt filters', () => {
    wrapper.setProps({filters: altFilters})
    expect(wrapper).toMatchSnapshot()
})

// //should handle text change
test('should handle text change', () => {
    const value = 'test'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

//should handle sort by amount
test('should handle sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: {value}
    })

    expect(sortByAmount).toHaveBeenCalled()
})

//should handle sort by date
test('should handle sort by date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: {value}
    })

    expect(sortByDate).toHaveBeenCalled()
})

//should handle date changes
test('should handle date changes', () => {
    const startDate = moment(1);
    const endDate = moment(2);

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
}) 

//should handle date focus changes
test('should handle date focus changes', () => {
    const calendarFocused = 'startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
}) 

