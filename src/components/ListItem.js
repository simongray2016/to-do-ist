import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';
import moment from 'moment';

import Form from './Form';
import TaskAction from './TaskAction';

function ListItem(props) {
    const [openAction, setOpenAction] = useState(false);

    const scrollRef = useRef(null);

    useEffect(() => {
        if (props.findId === props.id) {
            window.scrollTo({ top: scrollRef.current.offsetTop, behavior: "smooth", });
            setTimeout(() => props.clearId(), 2000)
        }
        console.log('props.date :', props.date);
        props.added && props.length -1 === props.index && window.scrollTo({ top: scrollRef.current.offsetTop, behavior: "smooth", });
    }, [props])

    const onpenEditForm = () => {
        props.onpenEditForm(props.index);
        props.cancelAdd();
    }

    const highligt = () => {
        if (openAction) {
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
        let style = {}
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
                    <span 
                        className={textLine()}
                    >
                        {viewDate()}
                    </span>
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