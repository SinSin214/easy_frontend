import React from 'react';
import './App.scss';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Task from './feature/Task'
import { Router, Route, Switch } from 'react-router-dom';
import Register from './feature/User/Register';
import history from './helper/history';

function App() {
	return (
		<div className="App">
			<Router history={history}>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path='/task' component={Task} />
				</Switch>
			</Router>
			<Register />
		</div>
	);
}

export default App;
