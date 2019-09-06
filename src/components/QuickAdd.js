import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function QuickAdd(props) {
    return (
        <div onClick={() => (!props.isAdd && !props.isEdit) && props.quickAdd()} className="quick-add">
            <span className="add-button">
                <i className="fa fa-plus"></i>
            </span>
            <span className="add-tip">
                Quick Add Task
            </span>
        </div>
    );
};

const mapStateToProps = state => ({
    isAdd: state.addReducer.isAdd,
    isEdit: state.editReducer.isEdit
})

const mapDispatchToProps = dispatch => ({
    quickAdd: () => dispatch(actions.quickAdd())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuickAdd);