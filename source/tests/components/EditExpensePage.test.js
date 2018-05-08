import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense , startRemoveExpense , history , wrapper;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage 
		startEditExpense={startEditExpense} 
		startRemoveExpense={startRemoveExpense} 
		history={history}
		expense={expenses[2]}
		/>
	);
});

test('Should render EditExpensePage',() => {
	expect(wrapper).tomatchSnapshot();
});

test('Should handle EditExpensePage',() => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(history.push).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);	
});

test('Should handle removeExpensePage',() => {
	wrapper.find('button').simulate('click');
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({
		id: expenses[2].id
	});
});