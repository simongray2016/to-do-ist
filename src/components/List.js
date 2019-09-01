import * as React from 'react';

export default function List(props) {
    return (
        <div className="section-list">
            <div className="list-holder">
                <table>
                    <tr>
                        <td>
                            <div className="checkbox">
                                <i class="fa fa-check"></i>
                            </div>
                        </td>
                        <td>
                            <span className="task-name">asd</span>
                        </td>
                        <td>
                            <span className="action-button">
                                ...
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};