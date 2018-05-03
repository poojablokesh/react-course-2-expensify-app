import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object' , ()=> {
	const action = setStartDate(moment(0));
	expect (action).toEqual({
		type:'SET_START_DATE',
		startDate: moment(0)
	});
});

test ('Should generate end date action object', ()=> {
	const action =setEndDate(moment(0));
	expect(action).toEqual({
		type:'SET_END_DATE',
		endDate:moment(0)
	});
});

test('Should generate action to sort by Date',() => {
	const action = sortByDate();
	expect(action).toEqual({
		type:'SORT_BY_DATE'
	});
});

test('Should generate action to sort by Amount',() => {
	const action = sortByAmount();
	expect(action).toEqual({
		type:'SORT_BY_AMOUNT'
	});
});


test ('Should generate action to Set Text',() => {
	const text = 'Good job'
	const action = setTextFilter(text);
	expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		text
	});
});


test ('Should generate Set Text Filter with default',() => {
	const action = setTextFilter();
	expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		text:''
	});
});