import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddexpense,addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses;

const createMockStore = configureMockStore([thunk])

test('Should setup remove expense action object', ()=>{
	const action = removeExpense({ id:'123abc' });
	expect (action).toEqual({
		type:'REMOVE_EXPENSE',
		id:'123abc'
	});
});


test('Should setup edit expense action object', () => {
	const action = editExpense ('456def',{note:'poo_rocks'});
	expect (action).toEqual({
		type:'EDIT_EXPENSE',
		id:'456def',
		updates:{
			note:'poo_rocks'
		}
	});
});


test('Should setup add expense action object with provided values', () =>{
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type:'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test ('should add expense to database and store', (done) => {
	const store =createMockStore({});

	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'This is awful',
		createdAt: 1000
	};

	store.dispatch(startAddexpense(expenseData)).then(()=>{
		const actions =store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		})
		done();
	});
});


test ('should add expense with defaults to database and store',() => {

});
// test('should setup add expense action object with default values',() => {
// 	const action = addExpense();
// 	expect(action).toEqual({ 
// 		type:'ADD_EXPENSE',
// 		expense:{
// 			description: '',
// 			note: '',
// 			amount: 0,
// 			createdAt:0,
// 			id:expect.any(String)
// 		}	
// 	 });
// });