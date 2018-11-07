import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
  
export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    //even though the invocation of this method below passes no input, it sounds like
    //this function automatically takes in an object made available by React and we can
    //destructure it to reference the startDate and endDate even though we haven't had
    //to write any code that is making them available

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    //same thing as above - this founction automatically gets passed in the calendarFocused
    // input.  We could call it whatever we want here, its just easiest to use the exact name
    // of our state variable
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}
                    onChange={this.onTextChange} 
                />
                <select 
                value={this.props.filters.sortBy} 
                onChange={this.onSortChange}        
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                    showClearDates={true}
                />
            </div>
        );
    }
};


const mapStateToProps = (state) => ({
    filters: state.filters
});

//allows us to setup property functions that call dispatch.  If we were calling dispatch directly it would be hard or impossible to 
//use jest spies.
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
