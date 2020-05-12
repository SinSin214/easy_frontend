import React from 'react';
import './ListTask.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

ListTask.propTypes = {
    tasklists: PropTypes.array,
    handleEdit: PropTypes.func,
}

ListTask.defaultProps = {
    tasklist: null,
    handleEdit: null,
    handleDelete: null
}

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

    function editTask(id) {
        let { handleEdit } = props;
        handleEdit(id);
    }

    function deleteTask(id) {
        let { handleDelete } = props;
        handleDelete(id);
    }

    let data = processData(tasklists);
    let importance = '';
    let task = data.map(item => {
        if (item.importance === '1') {
            importance = 'Not importance'
        } else if (item.importance === '2') {
            importance = 'Little importance'
        } else if (item.importance === '3') {
            importance = 'Importance'
        } else if (item.importance === '4') {
            importance = 'Very importance'
        }
        return (
            <div key={item.id} className={"card importance" + item.importance}>
                <div className="card-body">
                    <div className="card-title">{item.name}</div>
                    <div className="tag"></div>
                    <div className="describe">
                        <p>{item.describe}</p>
                    </div>
                    <div className="datetime-importance">
                        <div className={"line-importance importance" + item.importance}>
                            {importance}
                        </div>
                        <div className="time">
                            {item.datetime}
                        </div>
                    </div>

                    <div className="list-button">
                        <button className="btn btn-primary my-button" onClick={() => editTask(item.id)}>Edit</button>
                        <button className="btn btn-primary my-button" onClick={() => deleteTask(item.id)}>Delete</button>
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