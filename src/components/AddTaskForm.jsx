import React from 'react';

const AddTaskForm = (props) => {
    return (
        <form onSubmit={props.addItem} className="input-field inline">
            <input
                placeholder="Task"
                onChange={props.handleInput}
                value={props.handleContent}
            />
        </form>
    );
}

export default AddTaskForm;