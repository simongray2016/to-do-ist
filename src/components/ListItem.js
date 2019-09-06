import React from 'react';
import Form from './Form';
import TaskAction from './TaskAction';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function ListItem(props) {
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
            <tr className={props.indexAction === props.index ? "highlight" : undefined}>
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
                    <span className="project-name">Inbox</span>
                    <span className="project-color"></span>
                </td>
                <td>
                    <span onClick={() => props.openTaskAction(props.index)} className="action-button">
                        ...
                    </span>
                </td>
                <td>
                    {(props.indexAction === props.index) &&
                        <TaskAction
                            id={props.id}
                            priority={props.priority}
                            index={props.index}
                        />}
                </td>
            </tr>
    );
};

const mapStateToProps = state => ({
    indexEdit: state.editReducer.index,
    indexAction: state.actionReducer.index
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