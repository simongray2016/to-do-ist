import * as React from 'react';

export default function Filter(props) {
    return (
        <div className="filter">
            <span className="filter-icon">
                <i className={props.icon}></i>
            </span>
            <span className="filter-name">
                {props.name}
            </span>
        </div>
    );
};