import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { filters, altFilters} from '../Fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach( () =>{
	setTextFilter = jest.fn();
	sortByDate = jest.fn(); 
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>
	);
}); 

test('Should render ExpenseListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with all data correctly', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});


test('should handle text change',() => {
	const value ='rent';
	wrapper.find('input').simulate('change', {
		target: { value }
	});
	expect(setTextFilter).toHaveBeenlastcalledWith(value);
});

test('should sort by date',() => {
	const value ='date';
	wrapper.setProps({
		filters: altFilters
	});
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByDate).toHaveBeenlastcalledWith(value);
});

test('should sort by amount',() => {
	const value ='amount';
	wrapper.setProps({
		filters: altFilters
	});
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByAmount).toHaveBeenlastcalledWith(value);
});

test('should handle date changes',() => {
	const startDate = moment(0).add(4,'years');
	const endDate = moment(0).add(8,'years');
	wrapper.find('DateRangePicker').prop('onDatesChange'), ({ startDate, endDate});
	expect(setStartDate).toHaveBeenlastcalledWith(StartDate);
	expect(setEndDate).toHaveBeenlastcalledWith(EndDate);
});

test('should handle date focus changes',() => {
	const calendarFocused = 'endDate';
	wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
	expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});