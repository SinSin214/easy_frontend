import React, { useState } from 'react';
import uniqid from 'uniqid';
import Form from './Form';
import ListTask from './ListTask';
// import axios from 'axios';


function Task() {
    const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('task')) || []);
    const [task, setTask] = useState();
    // useEffect(() => {
    //     async function getAPI() {
    //         const response = await axios('http://localhost:5000/homepage');
    //     }
    //     getAPI();
    // }, []);

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
        <div className="Task">
            <Form onSubmit={handleFormSubmit} task={task} />
            <ListTask tasklists={tasklist} handleEdit={receivedTaskId} handleDelete={receivedDeletedTask} />
        </div>
    );
}

export default Task;
