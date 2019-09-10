import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function Form(props) {
    const [task, setTask] = useState({ 
        name: props.isEdit ? props.name : '', 
        error: true 
    });

    const onChangeTaskName = value => {
        !value.trim() ? setTask({ name: value, error: true }) :
            setTask({ name: value, error: false });
    }

    const checkAddTask = () => {
        if (!task.error) {
            if (props.isEdit) {
                props.editTask(props.id, task.name);
                props.callCancelEdit();
            }
            else {
                props.addTask(task.name);
            }
            setTask({ name: '', error: true });
        }
        props.isEdit && props.callCancelEdit();
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
                    placeholder="Eg: do something"
                    autoFocus
                />
            </div>
            <div className="form-action">
                <button onClick={() => checkAddTask()} className="form-submit">
                    {props.isEdit ? 'Save' : 'Add Task'}
                </button>
                <button onClick={() =>props.isEdit ? props.callCancelEdit() : props.cancelAdd()} className="form-cancel">
                    Cancel
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isEdit: state.editReducer.isEdit
})

const mapDispatchToProps = dispatch => ({
    addTask: (name) => dispatch(actions.addTask(name)),
    cancelAdd: () => dispatch(actions.cancelAdd()),
    editTask: (id, name) => dispatch(actions.editTask(id, name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);