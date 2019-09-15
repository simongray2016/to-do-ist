import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';  
import empty from '../empty.svg';

function Empty(props) {
    return (
        <div className="empty">
            <div className="empty-image">
                <img src={empty} alt="empty" />
            </div>
            <div className="empty-header">
                All clear
            </div>
            <div className="empty-body">
                Looks like everything's organized in the right place.
            </div>
            <button onClick={() => props.openForm()} className="add-button btn btn-danger">
                Add a task
            </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    openForm: () => dispatch(actions.openForm())
})

export default connect(null, mapDispatchToProps)(Empty);