import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function Form(props) {
    const [task, setTask] = useState({ name: '', error: true });

    const onChangeTaskName = value => {
        !value.trim() ? setTask({ name: value, error: true }) :
            setTask({ name: value, error: false });
    }

    const checkAddTask = () => {
        if(!task.error) {
            props.addTask(task.name);
            props.cancelAdd();
            setTask({ name: '', error: true });
        }
    }

    const onSubmitTask = e => {
        e.key === "Enter" && checkAddTask();
    }

    return (
        <div className="form">
            <div className="form-input">
                <input onChange={(e) => onChangeTaskName(e.target.value)}
                    onKeyDown={(e) => onSubmitTask(e)}
                    value={task.name}
                    name="name-input"
                    placeholder="Eg: wellplayed"
                />
            </div>
            <div className="form-action">
                <button onClick={() => checkAddTask()} className="form-submit">
                    Add Task
                </button>
                <button onClick={() => props.cancelAdd()} className="form-cancel">
                    Cancel
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addTask: (name) => dispatch(actions.addTask(name)),
    cancelAdd: () => dispatch(actions.cancelAdd())
})

export default connect(null, mapDispatchToProps)(Form);