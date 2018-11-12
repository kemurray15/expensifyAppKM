import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ( {expenseCount, expenseTotal} ) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedAmount = numeral(expenseTotal / 100).format('$0,0.00')
    return (
        <div>
            <p>Viewing {expenseCount} {expenseWord} totalling {formattedAmount}</p>
        </div>
    );
}
    

    
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);