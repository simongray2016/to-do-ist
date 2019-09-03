import * as React from 'react';
import List from './List';
import AddTask from './AddTask';
import Form from './Form';
<<<<<<< HEAD
=======
import AddModal from './AddModal';
>>>>>>> 21a6486be9769b38dd74b7f4d2da28d9f6b03d90

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
<<<<<<< HEAD
=======
            <AddModal />
>>>>>>> 21a6486be9769b38dd74b7f4d2da28d9f6b03d90
        </div>
    );
};