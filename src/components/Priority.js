import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function Priority(props) {
    const [index] = useState([4, 3, 2, 1]);

    let { isAdd, isQuickAdd, isEdit } = props;

    const changePriority = (e, index) => {
        e.preventDefault();
        if (!isAdd && !isQuickAdd && !isEdit) {
            props.changePriority(props.id, index)
        }
        else {
            props.setPriority(index)
        }
        props.toggle();

    }

    return (
        <div className="priority">
            <span>Priority</span>
            <ul>
                {index.map(index => <li key={index}>
                    <a href="/"
                        className={index === props.priority ? 'current' : undefined}
                        onClick={e => changePriority(e, index)}>
                        <i className={`fa fa-flag${index === 4 ? '-o' : ''} priority-${index}`}></i>
                    </a>
                </li>)}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    isAdd: state.addReducer.isAdd,
    isQuickAdd: state.addReducer.isQuickAdd,
    isEdit: state.editReducer.isEdit
})

const mapDispatchToProps = dispatch => ({
    changePriority: (id, index) => dispatch(actions.changePriority(id, index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Priority);