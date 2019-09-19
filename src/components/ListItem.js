import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';
import moment from 'moment';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

import Form from './Form';
import TaskAction from './TaskAction';
import ScheduleAction from './ScheduleAction'

function ListItem(props) {
    const [openAction, setOpenAction] = useState(false);

    const [openSchedule, setOpenSchedule] = useState(false);

    const { findId, id, clearId, added, clearAdded, index, length } = props;

    const scrollRef = useRef();

    useEffect(() => {
        let offsetTop = scrollRef.current.offsetTop;
        if (findId === id) {
            console.log('offsetTop :', offsetTop);
            window.scrollTo({ top: offsetTop, behavior: "smooth", });
            setTimeout(() => clearId(), 1000)
        }
        if (added && index === length) {
            console.log('offsetTop :', offsetTop);
            window.scrollTo({ top: offsetTop, behavior: "smooth", });
            setTimeout(() => clearAdded(), 1000)
        }
    }, [findId, id, clearId, added, clearAdded, index, length])

    const onpenEditForm = () => {
        if (!props.showCompletedList) {
            props.onpenEditForm(props.id);
            props.cancelAdd();
            props.toggle();
        }
    }

    const highligt = () => {
        if (openAction || openSchedule) {
            return `highlight `
        }
        else if (props.findId === props.id) {
            return `found `
        }
        else return undefined
    }

    const viewDate = () => {
        let date = moment(props.date);
        let differentDays = getDifferentDays();
        if (differentDays === 0) {
            return 'Today'
        }
        else if (differentDays === 1) {
            return 'Tomorow'
        }
        else if (differentDays > 7) {
            return moment(date).format("DD MMM")
        }
        else {
            return moment(date).format("dddd")
        }
    }

    const classNameCheckbox = () => {
        return props.showCompletedList ? `checkbox completed-checkbox` : `checkbox color-priority-${props.priority}`
    }

    const classNameTaskName = () => {
        return props.showCompletedList ? 'task-name completed-task-name' : 'task-name'
    }

    const getDifferentDays = () => {
        let today = new Date().getDate();
        let thisMonth = new Date().getMonth();
        let date = props.date.getDate();
        let monthDate = props.date.getMonth();
        let differentDays;
        if (monthDate === thisMonth) {
            differentDays = date - today;
            return differentDays;
        }
        else return differentDays = 8;
    }

    const textLine = () => {
        let differentDays = getDifferentDays();
        if (differentDays === 0) {
            return "schedule today"
        }
        else if (differentDays === 1) {
            return "schedule tomorrow"
        }
        else if (differentDays > 7) {
            return "schedule"
        }
        else {
            return "schedule weekdays"
        }
    }

    const completedTask = () => {
        props.showCompletedList ? props.undoTask(props.id) : props.completedTask(props.id)
    }

    return (
        props.idEdit === props.id ?
            <tr >
                <td colSpan="3">
                    <Form
                        id={props.id}
                        name={props.name}
                        priority={props.priority}
                        date={props.date}
                    />
                </td>
            </tr>
            :
            <tr ref={scrollRef} className={highligt()}
            >
                <td>
                    <label className={classNameCheckbox()}>
                        <input onClick={() => completedTask()} type="checkbox" />
                        <i className="fa fa-check"></i>
                    </label>
                </td>
                <td>
                    <span onClick={() => onpenEditForm()} className={classNameTaskName()}>{props.name}</span>
                </td>
                <td
                    style={props.showCompletedList && { cursor: 'text' }}
                >
                    {!props.showCompletedList
                        ? <Dropdown isOpen={openSchedule} toggle={() => setOpenSchedule(!openSchedule)}>
                            <DropdownToggle
                                tag="span"
                                data-toggle="dropdown"
                                aria-expanded={openSchedule}
                            >
                                <span
                                    className={textLine()}
                                >
                                    {viewDate()}
                                </span>
                            </DropdownToggle>
                            <DropdownMenu
                                className="p-0 rounded-0 m-0"
                            >
                                <ScheduleAction
                                    id={props.id}
                                    toggle={() => setOpenSchedule(false)}
                                    openSchedule={openSchedule}
                                    date={props.date}
                                />
                            </DropdownMenu>
                        </Dropdown>
                        : ''
                    }
                </td>
                <td>
                    {!props.showCompletedList
                        ? <TaskAction
                            id={props.id}
                            priority={props.priority}
                            index={props.index}
                            openAction={() => setOpenAction(!openAction)}
                        />
                        : ''
                    }
                </td>
            </tr >
    );
};

const mapStateToProps = state => ({
    idEdit: state.editReducer.id,
    indexAction: state.actionReducer.index,
    findId: state.taskReducer.id,
    added: state.addReducer.added
})

const mapDispatchToProps = dispatch => ({
    completedTask: id => dispatch(actions.completedTask(id)),
    undoTask: id => dispatch(actions.undoTask(id)),
    onpenEditForm: (index) => dispatch(actions.openEditForm(index)),
    cancelAdd: () => dispatch(actions.cancelAdd()),
    openTaskAction: index => dispatch(actions.openTaskAction(index)),
    closeTaskAction: () => dispatch(actions.closeTaskAction()),
    clearId: () => dispatch(actions.clearId()),
    clearAdded: () => dispatch(actions.clearAdded())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);