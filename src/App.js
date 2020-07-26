import React from 'react';
import './App.scss';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Task from './pages/Task'
import Login from './pages/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route render={(history) =>
					<div>{history.location.pathname === '/login' ? null : <Header />}
						<Switch>
							<Route exact path='/' component={Homepage} />
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
