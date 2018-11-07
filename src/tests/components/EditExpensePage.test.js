import { EditExpensePage } from '../../components/EditExpensePage'
import { shallow } from 'enzyme'
import React from 'react'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper

beforeEach( () => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
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
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id})
})





