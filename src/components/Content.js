import * as React from 'react';
import { connect } from 'react-redux';

import List from './List';
import AddTask from './AddTask';
import Form from './Form';
import ProjectAction from './ProjectAction';
import Empty from './Empty';

function Content(props) {
    let { name } = props;
    return (
        <div className="content">
            <div className="project-header">
                <span className="project-name">
                    {name}
                </span>
                {name === 'Inbox'
                    && <div className="project-action">
                        <ProjectAction />
                        <span className="action-tip">
                            Project action
                        </span>
                    </div>}
            </div>
            <List
                taskList={props.list}
            />
            {props.isAdd
                && <div className="padding-right-5">
                    <Form />
                </div>}
            <AddTask />
            {props.showCompletedList
                && <List
                    taskList={props.completedList}
                    showCompletedList={props.showCompletedList}
                />
            }
            {props.list.length === 0 && <Empty />}
        </div>
    );
};

const mapStateToProps = state => ({
    isAdd: state.addReducer.isAdd,
    showCompletedList: state.viewCompletedList.show,
    completedList: state.taskReducer.taskList.completedList,
})

export default connect(mapStateToProps, null)(Content);