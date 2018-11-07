import {createStore} from 'redux';

//Action generators return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ({count } = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

let result;
const add = (a, b) => {
    result = a + b;
};

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };  
        case 'RESET':
            return {
                count: 0
            };  
        case 'SET':
            return {
                count: action.count
            }; 
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 100 }));

store.dispatch(decrementCount({ decrementBy: 10}));
    
store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(set({ count: 103}));


