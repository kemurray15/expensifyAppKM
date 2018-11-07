import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//This component has no connection to the state.  It requires
//another component to render it and pass in any necessary state as props
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem 
                        key={expense.id}
                        {...expense} 
                    />        
                ))
            )
        }    
    </div>
);


//This is basically saying create a HOC called ConnectedExpenseList.  Connect it
// to the store (though I don't think that's happened yet), and also
//define some other properties that will be passed in to the final rendered
//component, in this case ExpenseList.  Then ExpenseList above can
//reference it's props. sounds like we could also have it return some
//state variables which would then render ExpenseList with some state values

//This function sets up the mapping of state variables to the prop variables
//that will be passed to the rendered child component.  It's just saying
//there is a state.expenses object that I want to just call expenses when
//I pass it in as component props.
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//#1This effectively says render ExpenseList with the props mapped from state
//assigned in the above mapStateToProps
//#2When you connect a component to a redux store (I'm still not sure how it
//is connecting to my store) it subscribes in realtime.  So any changes to the
//state will cause the connected components to rerender.
//#2a We also don't need any store.subscribe declarations b/c connect
//is essentially subscribing for us, i.e. saying hey state changed so let me
//remap the new state to props and rerender the component
//#3Interesting that what's exported from this file is not the ExpenseList 
//JSX function alone defined here.  It's the ExpenseList component
//bound to some portion of state renamed for props via the mapStateToProps function
//4The last missing point is {Provider}.  B/c that is the parent component,
//it makes store accessible to all subcomponents.  That is why the
//mapStateToProps function has access to state and I couldn't understand
//how it was getting it.  When this component is a child of Provider
//it will have implicit access to state.  That is also why the mapStateToProps
//is so important - b/c w/o that we would just be giving ExpenseList all of
//the store and that is wasteful.  This way we need only give ExpenseList
//those parts of store that it needs
export default connect(mapStateToProps)(ExpenseList);