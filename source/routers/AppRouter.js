import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpDashboardPage from '../components/HelpDashboardPage';
import NotFoundPage from '../components/NotFoundPage'; 
import Header from '../components/Header'; 

const AppRouter = () => (
		<BrowserRouter>
			<div> 
				<Header /> 
				<Switch>
					<Route path="/" component={ExpenseDashboardPage}exact={true}/>
					<Route path="/create" component={AddExpensePage }/>
					<Route path="/edit/:id" component={EditExpensePage}/>
					<Route path="/help" component={HelpDashboardPage}/>
					<Route component={NotFoundPage}/>
				</Switch>
		 	</div>
	</BrowserRouter>
);


export default AppRouter;