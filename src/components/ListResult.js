import * as React from 'react';
export default function ListResult(props) {
    return (
        <React.Fragment>
            <tr>
                <td>
                    <span className="type"></span>
                </td>
                <td>
                    <span className="name">{props.name}</span>
                </td>
            </tr>
        </React.Fragment>
    );
};