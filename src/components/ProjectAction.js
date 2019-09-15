import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function ProjectAction(props) {
    const [open, setOpen] = useState(false);

    const sortBy = value => {
        props.sortBy(value);
        setOpen(false);
    }

    const showCompletedList = () => {
        props.showCompletedList();
        setOpen(false);
    }

    return (
        <Dropdown isOpen={open} toggle={() => setOpen(!open)}>
            <DropdownToggle
                tag="span"
                data-toggle="dropdown"
                aria-expanded={open}
            >
                <span className="action-button">
                    <i className="fa fa-ellipsis-h"></i>
                </span>
            </DropdownToggle>
            <DropdownMenu className="p-0 rounded-0 m-0 project-action">
                <div className="task-action" >
                    <div 
                        onClick={() => sortBy('date')}
                        className="item"
                    >
                        <span><i className="fa fa-calendar icon-label"></i></span>
                        <span className="name-label">Sort by date</span>
                    </div>
                    <div 
                        onClick={() => sortBy('priority')}
                        className="item">
                        <span><i className="fa fa-flag-o icon-label"></i></span>
                        <span className="name-label">Sort by priority</span>
                    </div>
                    <div 
                        onClick={() => sortBy('name')}
                        className="item">
                        <span><i className="fa fa-sort-alpha-asc icon-label"></i></span>
                        <span className="name-label">Sort by name</span>
                    </div>
                    <div 
                        onClick={() => showCompletedList()}
                        className="item"
                    >
                        <span><i className="fa fa-check-circle-o icon-label"></i></span>
                        <span className="name-label">Show completed tasks</span>
                    </div>
                </div>
            </DropdownMenu>
        </Dropdown>
    );
};

const mapDispatchToProps = dispatch => ({
    sortBy: value => dispatch(actions.sortBy(value)),
    showCompletedList: () => dispatch(actions.showCompletedList())
})

export default connect(null, mapDispatchToProps)(ProjectAction);