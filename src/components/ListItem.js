import React, { useState, useRef, useEffect } from 'react';
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

    const scrollRef = useRef(null);

    const {findId, id, clearId} = props;

    useEffect(() => {
        if (findId === id) {
            window.scrollTo({ top: scrollRef.current.offsetTop, behavior: "smooth", });
            setTimeout(() => clearId(), 2000)
        }
    }, [findId, id, clearId])

    const onpenEditForm = () => {
        props.onpenEditForm(props.index);
        props.cancelAdd();
    }

    const highligt = () => {
        if (openAction || openSchedule) {
            return 'highlight'
        }
        else if (props.findId === props.id) {
            return 'found'
        }
        else return undefined
    }

    const viewDate = () => {
        let today = moment().format("DD MMM YYYY");
        let date = moment(props.date).format("DD MMM YYYY");
        let differentDays = moment(date).diff(today, 'days');
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

    const textLine = () => {
        let today = moment().format("DD MMM YYYY");
        let date = moment(props.date).format("DD MMM YYYY");
        let differentDays = moment(date).diff(today, 'days');
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

    return (
        props.indexEdit === props.index ?
            <tr ref={scrollRef}>
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
                    <label className={`checkbox color-priority-${props.priority}`}>
                        <input onClick={() => props.completedTask(props.id)} type="checkbox" />
                        <i className="fa fa-check"></i>
                    </label>
                </td>
                <td>
                    <span onClick={() => onpenEditForm()} className="task-name">{props.name}</span>
                </td>
                <td>
                    <Dropdown isOpen={openSchedule} toggle={() => setOpenSchedule(!openSchedule)}>
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
                </td>
                <td>
                    <TaskAction
                        id={props.id}
                        priority={props.priority}
                        index={props.index}
                        openAction={() => setOpenAction(!openAction)}
                    />
                </td>
            </tr >
    );
};

const mapStateToProps = state => ({
    indexEdit: state.editReducer.index,
    indexAction: state.actionReducer.index,
    findId: state.taskReducer.id,
})

const mapDispatchToProps = dispatch => ({
    completedTask: id => dispatch(actions.completedTask(id)),
    onpenEditForm: (index) => dispatch(actions.openEditForm(index)),
    cancelAdd: () => dispatch(actions.cancelAdd()),
    openTaskAction: index => dispatch(actions.openTaskAction(index)),
    closeTaskAction: () => dispatch(actions.closeTaskAction()),
    clearId: () => dispatch(actions.clearId())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);