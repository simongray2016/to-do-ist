import * as React from 'react';

export default function List(props) {
    return (
        <div className="section-list">
            <div className="list-holder">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="checkbox">
                                    <i className="fa fa-check"></i>
                                </div>
                            </td>
                            <td>
                                <span className="task-name">asd</span>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
};