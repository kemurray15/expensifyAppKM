import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpenseSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={150}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={200}/>)
    expect(wrapper).toMatchSnapshot()
})