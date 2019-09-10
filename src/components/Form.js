import React, { useState, useEffect, useRef } from 'react';
import Priority from './Priority';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

function Form(props) {
    const [task, setTask] = useState({
        name: props.isEdit ? props.name : '',
        priority: props.isEdit ? props.priority : 4
    });

    const [error, setError] = useState(props.isEdit ? false : true)

    const [togglePriority, setTogglePriority] = useState(false);

    const scrollForm = useRef(null);

    useEffect(() => {
        props.clear && setTask({priority: 4, name:''});
    }, [props.clear])

    const toggle = () => setTogglePriority(!togglePriority);

    const onChangeTaskName = value => {
        if(!value.trim()){
            setTask({...task, name: value});
            setError(true) ;
        }   
        else {
            setTask({...task, name: value});
            setError(false);
        }
    }

    const checkAddTask = () => {
        if (!error) {
            if (props.isEdit) {
                props.editTask(props.id, task);
                props.cancelEdit();
            }
            else {
                props.addTask(task);
                props.closeQuickAdd()

            }
            setTask({ name: '', priority: 4});
            setError(true);
        }
        props.isEdit && props.cancelEdit();
    }

    const onSubmitTask = e => {
        e.key === "Enter" && checkAddTask();
    }

    return (
        <div ref={scrollForm} className="form">
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
                <div>
                    <button onClick={() => checkAddTask()} className="form-submit">
                        {props.isEdit ? 'Save' : 'Add Task'}
                    </button>
                    <button onClick={() => props.isEdit ? props.cancelEdit() : props.cancelAdd()} className="form-cancel">
                        Cancel
                    </button>
                </div>
                <div>
                    <Dropdown isOpen={togglePriority} toggle={() => toggle()}>
                        <DropdownToggle
                            tag="span"
                            className="action-button-priority px-1 mr-4"
                            data-toggle="dropdown"
                            aria-expanded={togglePriority}
                        >
                            <i className={`fa fa-flag${task.priority === 4 ? '-o' : ''} priority-${task.priority}`}></i>
                        </DropdownToggle>
                        <DropdownMenu className="p-0 rounded-0 m-0 relative">
                            <Priority 
                                toggle={() => toggle()}
                                priority= {task.priority}
                                setPriority = {number => setTask({...task, priority: number})}
                                id={props.id}
                            />
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isEdit: state.editReducer.isEdit,
})

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(actions.addTask(task)),
    cancelAdd: () => dispatch(actions.cancelAdd()),
    closeQuickAdd: () => dispatch(actions.closeQuickAdd()),
    editTask: (id, task) => dispatch(actions.editTask(id, task)),
    cancelEdit: () => dispatch(actions.cancelEdit()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);