import * as React from 'react';
import List from '../components/List';

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
        </div>
    );
};