import * as React from 'react';
import { connect } from 'react-redux';
import List from './List';
import AddTask from './AddTask';
import Form from './Form';

function Content(props) {
    return (
        <div className="content">
            <div className="project-header">
                <span className="project-name">
                    {props.name}
                </span>
                <div className="project-action">
                    <span className="action-button">
                        <i className="fa fa-ellipsis-h"></i>
                    </span>
                    <span className="action-tip">
                        Project action
                    </span>
                </div>
            </div>
            <List />
            { props.isAdd && <Form /> }
            <AddTask />
        </div>
    );
};

const mapStateToProps = state => ({
    isAdd: state.taskReducer.isAdd
})

export default connect(mapStateToProps, null)(Content);