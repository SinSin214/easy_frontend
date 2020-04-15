import React, { useState } from 'react';
import './App.scss';
// import ColorBox from './components/ColorBox';
import Form from './components/Form';
import ListTask from './components/ListTask';

function App() {
	const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('task')) || []);

	function handleFormSubmit(param) {
		const temp = [...tasklist, param];
		setTasklist(temp);
		localStorage.setItem('task', JSON.stringify(temp));
	}

	return (
		<div className="App">
			{/* <ColorBox /> */}
			<Form onSubmit={handleFormSubmit} />
			<ListTask tasklists={tasklist} />
		</div>
	);
}

export default App;
