import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Form from './Form';
import ListTask from './ListTask';
import * as action from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

function Task() {
    const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('task')) || []);
    const [task, setTask] = useState();
    const dispatch = useDispatch();

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

    function submit() {
        dispatch(action.createTask());
    }

    return (
        <div className="Task">
            <Form onSubmit={handleFormSubmit} task={task} />
            <ListTask tasklists={tasklist} handleEdit={receivedTaskId} handleDelete={receivedDeletedTask} />
            <button type="button" className="btn btn-primary my-button" onClick={submit} >Submit</button>
        </div>
    );
}

export default Task;
