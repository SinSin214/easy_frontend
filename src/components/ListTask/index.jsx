import React from 'react';
import './ListTask.scss';
import PropTypes from 'prop-types';

ListTask.propTypes = {
    tasklists: PropTypes.array,
}

ListTask.defaultProps = {
    tasklist: null
}


function ListTask(props) {
    const { tasklists } = props;

    // const componentTask = tasklists.map(item => {
    //     return (

    //     )
    // })

    return (
        <div className="list-task">

        </div>
    );
}

export default ListTask;