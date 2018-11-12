import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import ExpenseAverage from './ExpenseAverage'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseAverage />
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;