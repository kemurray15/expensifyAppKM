import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses';
import selectExpensesAverage from '../selectors/expenses-average';


export const ExpenseAverage = ( {expenseCount, expenseAverage} ) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedAverage = numeral(expenseAverage / 100).format('$0,0.00')
    return (
        <div>
            <p>You have {expenseCount} {expenseWord} averaging {formattedAverage} per expense</p>
        </div>
    );
}
    

    
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expenseCount: visibleExpenses.length,
        expenseAverage: selectExpensesAverage(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseAverage);