import React from 'react';
import './App.scss';
// import ColorBox from './components/ColorBox';
import Form from './components/Form';
import ListTask from './components/ListTask';

function App() {
	function handleFormSubmit(param) {
		console.log(param)
	}

	return (
		<div className="App">
			{/* <ColorBox /> */}
			<Form onSubmit={handleFormSubmit} />
			<ListTask />
		</div>
	);
}

export default App;
