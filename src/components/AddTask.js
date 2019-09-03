import * as React from 'react';
export default function AddTask(props) {
    return (
        <div className="add-task">
            <span className="add-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" data-svgs-path="sm1/plus.svg"><path fill="currentColor" fill-rule="evenodd" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path></svg>
            </span>
            <span className="add-action">Add task</span>
        </div>
    );
};