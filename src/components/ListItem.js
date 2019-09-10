import React, { useState, useRef, useEffect } from 'react';
import Form from './Form';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import TaskAction from './TaskAction';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function ListItem(props) {
    const [openAction, setOpenAction] = useState(false);

    const scrollRef = useRef(null);

    useEffect(() => {
        props.findId === props.id && window.scrollTo({ top: scrollRef.current.offsetTop, behavior: "smooth",  });
    }, [props.findId, props.id])

    const onpenEditForm = () => {
        props.onpenEditForm(props.index);
        props.cancelAdd();
    }

    return (
        props.indexEdit === props.index ?
            <tr>
                <td colSpan="4">
                    <Form
                        name={props.name}
                        id={props.id}
                        callCancelEdit={() => props.cancelEdit()}
                    />
                </td>
            </tr>
            :
            <tr ref={scrollRef} className={ (openAction && "highlight") || (props.findId === props.id && "found")}>
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
                        openAction={ () => setOpenAction(!openAction)}
                    />
                </td>
            </tr >
    );
};

const mapStateToProps = state => ({
    indexEdit: state.editReducer.index,
    indexAction: state.actionReducer.index,
    findId: state.taskReducer.id
})

const mapDispatchToProps = dispatch => ({
    completedTask: id => dispatch(actions.completedTask(id)),
    onpenEditForm: (index) => dispatch(actions.openEditForm(index)),
    cancelEdit: () => dispatch(actions.cancelEdit()),
    cancelAdd: () => dispatch(actions.cancelAdd()),
    openTaskAction: index => dispatch(actions.openTaskAction(index)),
    closeTaskAction: () => dispatch(actions.closeTaskAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);