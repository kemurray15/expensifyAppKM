import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

//Part 1, then test in dev
//Refactor EditExpensePage to be a class based component
//setup mapDispatchToProps for editExpense and removeExpense

export class EditExpensePage extends React.Component {
    
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onClick = () => {
        console.log('in remove expense')
        console.log(this.props.expense.id)
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button 
                    onClick={this.onClick}          
                >
                Remove
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}; 

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense)),
    removeExpense: (expense) => dispatch(removeExpense(expense)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);