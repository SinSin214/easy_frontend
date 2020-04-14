import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Form.scss'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// Form.propTypes = {

// };
const important = [
    { id: 1, value: 'Not important' },
    { id: 2, value: 'Little important' },
    { id: 3, value: 'Important' },
    { id: 4, value: 'Very important' }
]

const color = [
    { id: 1, value: 'red' },
    { id: 2, value: 'black' },
    { id: 3, value: 'green' },
    { id: 4, value: 'blue' }
]

function Form() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="form-ground">
            <div className="form-group">
                <label>Task name</label>
                <input type="text"
                    className="form-control" name="task-name" />
            </div>

            <div className="form-group">
                <label>Describe the task</label>
                <textarea
                    className="form-control" name="describe" rows="5" />
            </div>

            <div className="form-group">
                <label>Select color</label>
                <select className="form-control">
                    <div style={{ background: color }}>dgfdg</div>
                </select>
            </div>

            <div className="form-group multiple-group">
                <div className="divided-group">
                    <label>Importance</label>
                    <select className="form-control">
                        {important.map(item => (
                            <option key={item.id} value={item.id}> {item.value}</option>
                        ))}
                    </select>
                </div>
                <div className="divided-group">
                    <label>Date</label>
                    <DatePicker className="form-control"
                        name="date-time"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div>
            </div>

            <div className="form-button">
                <button type="button" class="btn btn-primary my-button">ADD TASK</button>
                <button type="button" class="btn btn-primary my-button" >CLEAR</button>
            </div>
        </div>


    );
}

export default Form;