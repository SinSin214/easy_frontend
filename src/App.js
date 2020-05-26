import React from 'react';
import './App.scss';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Task from './feature/Task'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './feature/User/Register'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path='/task' component={Task} />
				</Switch>
			</BrowserRouter>
			<Register />
		</div>
	);
}

export default App;
