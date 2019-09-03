import * as React from 'react';
export default function Form(props) {
    return (
        <div className="form">
            <div className="form-input">
                <input name="name-input" placeholder="Eg: wellplayed" />
            </div>
            <div className="form-action">
                <button className="form-submit">
                    Add Task
                </button>
                <button className="form-cancel">
                    Cancel
                </button>
            </div>
        </div>
    );
};