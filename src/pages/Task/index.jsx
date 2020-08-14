import React, { useState } from 'react';
import './Task.scss';
function Task() {
    return (
        <div className="container-fluid">
            <div className="container-button">
                <button className="btn btn-primary pull-right">Add task</button>
            </div>
            <div className="container-background">
                <div className="card">
                    <div className="card-title-custom">
                        ABCD
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task;