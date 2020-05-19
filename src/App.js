import React from 'react';
import './App.scss';
import Header from './components/Header'
import Task from './feature/Task'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './feature/User/Register'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path='/task' component={Task} />
				</Switch>
			</BrowserRouter>
			<Register />
		</div>
	);
}

export default App;
