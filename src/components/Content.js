import * as React from 'react';
import { connect } from 'react-redux';
import List from './List';
import AddTask from './AddTask';
import Form from './Form';
import ProjectAction from './ProjectAction';

function Content(props) {
    return (
        <div className="content">
            <div className="project-header">
                <span className="project-name">
                    {props.name}
                </span>
                <div className="project-action">
                    <ProjectAction />
                    <span className="action-tip">
                        Project action
                    </span>
                </div>
            </div>
            <List />
            { props.isAdd 
                && <div className="padding-right-5">
                    <Form />
                </div> }
            <AddTask />
        </div>
    );
};

const mapStateToProps = state => ({
    isAdd: state.addReducer.isAdd
})

export default connect(mapStateToProps, null)(Content);