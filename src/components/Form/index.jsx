import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

Form.propTypes = {
    onSubmit: PropTypes.func,
};

Form.defaultProps = {
    onSubmit: null
}

const important = ['Not important', 'Little important', 'Important', 'Very important']

function Form(props) {
    const { onSubmit } = props;

    const [state, setState] = useState({
        name: "",
        describe: "",
        importance: "Important",
        datetime: new Date()
    })

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
            name: "",
            describe: "",
            importance: "Important",
            datetime: new Date()
        }
        setState(tempState);
    }

    function submitForm(e) {
        e.preventDefault();
        const formValue = {
            ...state
        }
        onSubmit(formValue);
    }

    return (
        <div className="form-ground">
            <div className="form-group">
                <label>Task name</label>
                <input type="text"
                    onChange={onHandleChange}
                    className="form-control" name="name" value={state.name} />
            </div>

            <div className="form-group">
                <label>Describe the task</label>
                <textarea
                    onChange={onHandleChange}
                    className="form-control" name="describe" rows="5" value={state.describe} />
            </div>

            <div className="form-group multiple-group">

                <div className="divided-group">
                    <label>Importance</label>
                    <select className="form-control" onChange={onHandleChange} name="importance" value={state.importance}>
                        {important.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
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
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div>
            </div>

            <div className="form-button">
                <button type="button" className="btn btn-primary my-button" onClick={submitForm}>ADD TASK</button>
                <button type="button" className="btn btn-primary my-button" onClick={clearInput} >CLEAR</button>
            </div>
        </div>


    );
}

export default Form;