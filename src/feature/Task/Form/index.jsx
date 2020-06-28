import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Form.scss'
import DatePicker from 'react-datepicker';
import { important } from '../../../constant'
import "react-datepicker/dist/react-datepicker.css";

Form.propTypes = {
    onSubmit: PropTypes.func,
    task: PropTypes.object
};

Form.defaultProps = {
    onSubmit: null,
    task: null
}


function Form(props) {
    const { onSubmit, task } = props;

    const [state, setState] = useState({
        id: "",
        name: "",
        describe: "",
        importance: '2',
        datetime: new Date()
    })

    const [type, setType] = useState('ADD');

    useEffect(() => {
        if (task) {
            setState(task);
            setType('EDIT');
        }
    }, [task])

    function onHandleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let tempState = {
            ...state,
            [name]: value
        }
        setState(tempState);
    };

    function clearInput() {
        let tempState = {
            id: "",
            name: "",
            describe: "",
            importance: '2',
            datetime: new Date()
        }
        setState(tempState);
        setType('ADD');
    }

    function submitForm(e) {
        e.preventDefault();
        const formValue = {
            ...state,
            id: state.id || '',
        }
        onSubmit(formValue, type);
        clearInput();
    }

    return (
        <div className="form-ground">
            <div className="form-group">
                <label>Task name</label>
                <input type="text"
                    onChange={onHandleChange}
                    className="form-control" name="name" value={state.name} maxLength="25" />
            </div>

            <div className="form-group">
                <label>Describe the task</label>
                <textarea maxLength="200"
                    onChange={onHandleChange}
                    className="form-control" name="describe" rows="5" value={state.describe} />
            </div>

            <div className="form-group multiple-group">

                <div className="divided-group">
                    <label>Importance</label>
                    <select className="form-control" onChange={onHandleChange} name="importance" value={state.importance}>
                        {important.map((item, index) => (
                            <option key={index} value={index + 1}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="divided-group">
                    <label>Date</label>
                    <DatePicker className="form-control"
                        name="datetime"
                        selected={state.datetime}
                        onChange={date => setState({
                            ...state, datetime: date
                        })}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM dd yyyy, HH:mm"
                    />
                </div>
            </div>

            <div className="form-button">
                <button type="button" className="btn btn-primary my-button" onClick={submitForm}>{type} TASK</button>
                <button type="button" className="btn btn-primary my-button" onClick={clearInput} >CLEAR</button>
            </div>
        </div>


    );
}

export default Form;