import { EditExpensePage } from '../../components/EditExpensePage'
import { shallow } from 'enzyme'
import React from 'react'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper

beforeEach( () => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            startRemoveExpense={startRemoveExpense} 
            history={history}
            expense={expenses[0]} 
        />
    )
})

//should render EditExpensePage w/ snapshot
test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

//should handle editExpense action with spies
test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/');
    
})

// //should handle removeExpense action with spies
test('should handle onClick', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id})
})





