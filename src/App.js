import React, { useState } from 'react';
import './App.scss';
import uniqid from 'uniqid';
import Form from './components/Form';
import ListTask from './components/ListTask';

function App() {
	const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('task')) || []);
	const [task, setTask] = useState();

	function handleFormSubmit(param, type) {
		let temp;
		if (type === 'ADD') {
			param.id = uniqid();
			temp = [...tasklist, param];
		}
		else if (type === 'EDIT') {
			tasklist[tasklist.findIndex(item => item.id === param.id)] = param;
			temp = [...tasklist];
		}
		setTasklist(temp);
		localStorage.setItem('task', JSON.stringify(temp));
	}

	function receivedTaskId(id) {
		let data = tasklist.find(item => {
			return item.id === id
		});
		let temp = { ...data, datetime: new Date(data.datetime) }
		setTask(temp);
	}

	function receivedDeletedTask(id) {
		let data = tasklist.filter(item => {
			return item.id !== id
		});
		setTasklist(data);
		localStorage.setItem('task', JSON.stringify(data));
	}

	return (
		<div className="App">
			<Form onSubmit={handleFormSubmit} task={task} />
			<ListTask tasklists={tasklist} handleEdit={receivedTaskId} handleDelete={receivedDeletedTask} />
		</div>
	);
}

export default App;
