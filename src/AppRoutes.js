import React from 'react';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Login from './pages/Login'
import Task from './pages/Task'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { utilities } from './helper/utilities';
function AppRoutes() {
	const isLoggedIn = utilities.checkIsLogged();
	return (
			<BrowserRouter>
				<Route render={(history) =>
					<div>{history.location.pathname === '/login' ? null : <Header />}
						{isLoggedIn ? <Redirect exact from='/login' to='/' /> : <Redirect to='/login' />}
						<Switch>
							{/* <Redirect exact from='/' to='/home' /> */}
							<Route exact path='/' component={Homepage} />
							<Route path='/login' component={Login} />
							<Route path='/task' component={Task} />
						</Switch>
					</div>
				}>
				</Route>
			</BrowserRouter>
	);
}
export default AppRoutes;