import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';
import Form from '../components/Form'

function AddModal(props) {
    let [clear, setClear] = useState(false);

    useEffect(() => {
        setClear(!props.isQuickAdd)
    }, [props.isQuickAdd])

    const closeQuickAdd = () => {
        props.closeQuickAdd();
        setClear(true);
    }

    return (
        <div className={props.isQuickAdd ? "add-modal visible opacity" : "add-modal"}>
            <div onClick={() => props.closeQuickAdd()}
                className="add-modal-background">
            </div>
            <div className="add-modal-form">
                <div className="add-modal-header">
                    <span>Quick Add Task</span>
                    <span onClick={() => closeQuickAdd()} className="close">
                        <svg viewBox="0 0 24 24" className="icon_close" width="18" height="18"><path fill="currentColor" d="M11.3 12L5 5.9A.5.5 0 1 1 6 5l6.1 6.2L18.1 5a.5.5 0 0 1 .8.8L12.7 12l6.2 6.1a.5.5 0 0 1-.8.8L12 12.7 5.9 19A.5.5 0 0 1 5 18l6.2-6.1z"></path></svg>
                    </span>
                </div>
                <Form
                    clear={clear}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isQuickAdd: state.addReducer.isQuickAdd
})

const mapDispatchToProps = dispatch => ({
    closeQuickAdd: () => dispatch(actions.closeQuickAdd())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);