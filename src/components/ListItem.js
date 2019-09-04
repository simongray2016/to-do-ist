import * as React from 'react';
export default function ListItem(props) {
    return (
        <React.Fragment>
            <tr>
                <td>
                    <div className="checkbox">
                        <i className="fa fa-check"></i>
                    </div>
                </td>
                <td>
                    <span className="task-name">{props.name}</span>
                </td>
                <td>
                    <span className="project-name">Inbox</span>
                    <span className="project-color"></span>
                </td>
                <td>
                    <span className="action-button">
                        ...
                    </span>
                </td>
            </tr>
        </React.Fragment>
    );
};