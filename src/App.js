import React from 'react';
import './App.scss';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Task from './pages/Task'
import Login from './pages/Login'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { utilities } from './helper/utilities';

function App() {
	const isLoggedIn = utilities.checkIsLogged();

	return (
		<div className="App">
			<BrowserRouter>
				<Route render={(history) =>
					<div>{history.location.pathname === '/login' ? null : <Header />}
						{isLoggedIn ? <Redirect exact from='/login' to='/home' /> : <Redirect to='/login' />}
						{/* có bug nếu enter url /task thì move về home */}
						<Switch>
							<Redirect exact from='/' to='/home' />
							<Route exact path='/home' component={Homepage} />
							<Route path='/login' component={Login} />
							<Route path='/task' component={Task} />
						</Switch>
					</div>
				}>
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
