import * as React from 'react';
import List from './List';
import AddTask from './AddTask';
import Form from './Form';
import AddModal from './AddModal';

export default function Content(props) {
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
            <Form />
            <AddTask />
            <AddModal />
        </div>
    );
};