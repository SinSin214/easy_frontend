import React from 'react';
import './ListTask.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

ListTask.propTypes = {
    tasklists: PropTypes.array,
}

ListTask.defaultProps = {
    tasklist: null
}

const des = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsa impedit, at eaque minima asperiores eveniet quibusdam sit deleniti? Aspernatur odit atque, cum veniam esse animi? Cum quos ullam quasi!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsa impedit, at eaque minima asperiores eveniet quibusdam sit deleniti? Aspernatur odit atque, cum veniam esse animi? Cum quos ullam quasi!'
]
function processData(param) {
    param.sort(function (a, b) {
        return new Date(a.datetime) - new Date(b.datetime);
    })

    param.map(item => {
        return item.datetime = moment(item.datetime).format("YYYY-MM-DD HH:mm")
    })
    return param;
}

function ListTask(props) {
    const { tasklists } = props;

    let data = processData(tasklists);

    let task = data.map(item => {
        return (
            <div key={item.id} className={"card importance" + item.importance}>
                <div className="card-body">
                    <div className="card-title">{item.name}</div>
                    <div className="tag"></div>
                    <div className="describe">
                        <p>{des}</p>
                    </div>
                    <div className="time">
                        {item.datetime}
                    </div>
                    <div className="list-button">
                        <button className="btn btn-primary my-button">Edit</button>
                        <button className="btn btn-primary my-button">Delete</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="list-task">
            {task}
        </div>
    );
}

export default ListTask;