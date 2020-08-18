import React, { useState } from 'react';
import './Task.scss';
import Card from './Card/Card';
import { Link } from 'react-router-dom';
function Task() {
    return (
        <div className="container-task">
            <button type="button" className="btn btn-outline-dark pull-right">
                <Link className="nav-link" to="/task/write-memory">
                    ADD MEMORY
                </Link>
                </button>
            <Card />
            <Card />
        </div>
    )
}
export default Task;