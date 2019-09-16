import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function ShowCompleted(props) {
    return (
        <div onClick={() => props.showCompleted()} className="quick-add">
            <span className="add-button">
                <i className="fa fa-check-circle"></i>
            </span>
            <span className="add-tip">
                Show completed tasks
            </span>
            <span className="count-completed">
                {props.count}
            </span>
        </div>
    );
};

const mapState = state => ({
    count: state.taskReducer.taskList.completedList.length
})

const mapDispatch = dispatch => ({
    showCompleted: () => dispatch(actions.showCompletedList())
})

export default connect(mapState, mapDispatch)(ShowCompleted);