import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

import Priority from './Priority';
import ScheduleAction from './ScheduleAction';
import moment from 'moment';

function Form(props) {

    let now = new Date();

    const [task, setTask] = useState({
        name: props.isEdit ? props.name : '',
        date: props.isEdit ? new Date(props.date) 
            : (props.weekDay ? new Date(now.getFullYear(), now.getMonth(), now.getDate() + props.weekDay) : null),
        priority: props.isEdit ? props.priority : 4
    });

    const [error, setError] = useState(props.isEdit ? false : true)

    const [toggleSchedule, setToggleSchedule] = useState(false);

    const [togglePriority, setTogglePriority] = useState(false);

    const {clear} = props;

    useEffect(() => {
        clear && setTask({ priority: 4, name: '' });
    }, [clear])

    const toggle = () => setTogglePriority(!togglePriority);

    const onChangeTaskName = value => {
        if (!value.trim()) {
            setTask({ ...task, name: value });
            setError(true);
        }
        else {
            setTask({ ...task, name: value });
            setError(false);
        }
    }

    const checkAddTask = () => {
        if (!error) {
            if (props.isEdit) {
                props.editTask(props.id, task);
                props.cancelEdit();
                props.toggle && props.toggle();
            }
            else {
                let newTask = task;
                if (!task.date) {
                    setTask({ ...task, date: new Date() });
                    newTask = ({ ...task, date: new Date() });
                }
                props.addTask(newTask);
                props.isQuickAdd && props.added();
                props.closeQuickAdd();
            }
            setTask({ name: '', date: null, priority: 4 });
            setError(true);
        }
        props.isEdit && props.cancelEdit();
    }

    const onSubmitTask = e => {
        e.key === "Enter" && checkAddTask();
    }

    const viewDate = () => task.date === null ? 'Schedule' : moment(task.date).format("DD MMM");

    const cancelAdd = () => {
        props.isEdit ? props.cancelEdit() : props.cancelAdd();
        props.toggle && props.toggle();
    }

    return (
        <div className="form">
            <div className="form-input">
                <input onChange={(e) => onChangeTaskName(e.target.value)}
                    type="text"
                    onKeyDown={(e) => onSubmitTask(e)}
                    value={task.name}
                    name="name-input"
                    placeholder="Eg: do something"
                    autoFocus
                />
                <Dropdown isOpen={toggleSchedule} toggle={() => setToggleSchedule(!toggleSchedule)}>
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={togglePriority}
                    >
                        <input
                            className="schedule-input"
                            value={viewDate()}
                            disabled
                        />
                    </DropdownToggle>
                    <DropdownMenu className="p-0 rounded-0 m-0">
                        <ScheduleAction
                            date={task.date === null ? new Date() : task.date}
                            toggle={() => setToggleSchedule(false)}
                            setDateForm={newDate => setTask({ ...task, date: newDate })}
                        />
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="form-action">
                <div>
                    <button onClick={() => checkAddTask()} className="form-submit">
                        {props.isEdit ? 'Save' : 'Add Task'}
                    </button>
                    <button onClick={() => cancelAdd()} className="form-cancel">
                        Cancel
                    </button>
                </div>
                <div>
                    <Dropdown isOpen={togglePriority} toggle={() => setTogglePriority(!togglePriority)}>
                        <DropdownToggle
                            tag="span"
                            className="action-button-priority px-1 mr-4"
                            data-toggle="dropdown"
                            aria-expanded={togglePriority}
                        >
                            <i className={`fa fa-flag${task.priority === 4 ? '-o' : ''} priority-${task.priority}`}></i>
                            <span className="tip">Priority</span>
                        </DropdownToggle>
                        <DropdownMenu
                            modifiers={{
                                setPosition: {
                                    enabled: true,
                                    order: 890,
                                    fn: (data) => {
                                        return {
                                            ...data,
                                            styles: {
                                                ...data.styles,
                                                top: 4,
                                                left: -70,
                                            },
                                        };
                                    }
                                }
                            }}
                            className="p-0 rounded-0 m-0" >
                            <Priority
                                toggle={() => toggle()}
                                priority={task.priority}
                                setPriority={number => setTask({ ...task, priority: number })}
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
    isQuickAdd: state.addReducer.isQuickAdd
})

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(actions.addTask(task)),
    cancelAdd: () => dispatch(actions.cancelAdd()),
    closeQuickAdd: () => dispatch(actions.closeQuickAdd()),
    editTask: (id, task) => dispatch(actions.editTask(id, task)),
    cancelEdit: () => dispatch(actions.cancelEdit()),
    findTask: id => dispatch(actions.findTask(id)),
    added: () => dispatch(actions.added())
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);