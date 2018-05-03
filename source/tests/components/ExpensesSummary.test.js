import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpenseSummary with 1 expense',() => {
	const wrapper =shallow(<ExpenseSummary expenseCount={1} expenseTotal={235} />);
	expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses',() => {
	const wrapper =shallow(<ExpenseSummary expenseCount={25} expenseTotal={23456765635} />);
	expect(wrapper).toMatchSnapshot();
});