import { createStore } from 'redux';

//Action Generators

const incrementcount = ( {incrementBy = 1 } = {} ) => ({
 	type: 'INCREMENT',
 	incrementBy
});

const decrementcount = ( {decrementBy = 1 } = {} ) => ({
	type: 'DECREMENT',
	decrementBy
});

const setcount = ( {count = 1993} = {} ) => ({
	type:'SET',
	count
});

const resetcount = () => ({
	type: 'RESET'
});

//Reducers
// 1. Reducers are pure functions.
// 2.Pure functions don't take value outside the function.
// Never change state or count.

const countReducer = (state = {count :0}, action ) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count:state.count + action.incrementBy
			};
		case 'DECREMENT':
			return{
				count:state.count - action.decrementBy
			};
		case 'SET':
			return{
				count: action.count
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}	
};

const store = createStore(countReducer);
	
const unsubscribe = store.subscribe(()=> {
	console.log( store.getState() )
	});

//Typos are not easy to catch and hence we switched over to Action genenrators.
// It's difficult for typos to identify spell checks and errors won't be generated.


// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 20
// });

store.dispatch(incrementcount({incrementBy: 5}));

store.dispatch(incrementcount());

store.dispatch(decrementcount());

store.dispatch(decrementcount({decrementBy: 10}));

store.dispatch(setcount({count: 2018}));

store.dispatch(resetcount());

// store.dispatch({
// 	type: 'SET',
// 	count: 101
// });

