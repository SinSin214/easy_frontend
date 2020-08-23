import React, { useState } from 'react';
import './Task.scss';
import Card from './Card/Card';
import { Link } from 'react-router-dom';
function Task() {
    return (
        <div className="container-task">
            <div className="section-button">
                <button type="button" className="btn btn-outline-dark">
                    <Link className="nav-link" to="/task/write-memory">
                        ADD MEMORY
                </Link>
                </button>
            </div>
            <div className="section-content">
                <Card />
                <Card />
            </div>
        </div>
    )
}
export default Task;