import React, { useState, useRef, useEffect } from 'react';
import Form from './Form';
import TaskAction from './TaskAction';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function ListItem(props) {
    const [openAction, setOpenAction] = useState(false);

    const scrollRef = useRef(null);

    useEffect(() => {
        if (props.findId === props.id) {
            window.scrollTo({ top: scrollRef.current.offsetTop, behavior: "smooth", });
            setTimeout(() => props.clearId(), 2000)
        }
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

    return (
        props.indexEdit === props.index ?
            <tr>
                <td colSpan="4">
                    <Form
                        id={props.id}
                        name={props.name}
                        priority={props.priority}
                    />
                </td>
            </tr>
            :
            <tr ref={scrollRef} className={highligt()}
            >
                <td>
                    <label className={`checkbox color-priority-${props.priority}`}>
                        <input onClick={() => props.completedTask(props.id)} type="checkbox" />
                        <i className="fa fa-check align-top"></i>
                    </label>
                </td>
                <td>
                    <span onClick={() => onpenEditForm()} className="task-name">{props.name}</span>
                </td>
                <td>
                    <span className="project-name">Inbox</span>
                    <span className="project-color"></span>
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