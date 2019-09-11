import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function Priority(props) {
    const [index] = useState([4, 3, 2, 1]);

    const changePriority = (e, index) => {
        e.preventDefault();
        if (props.openAction) {
            props.changePriority(props.id, index)
        }
        else {
            props.setPriority(index)
        }
        props.toggle();

    }

    return (
        <div className="item priority">
            <span>Priority</span>
            <ul>
                {index.map(index => <li key={index}>
                    <a href="/"
                        className={index === props.priority ? 'current' : undefined}
                        onClick={e => changePriority(e, index)}>
                        <i className={`fa fa-flag${index === 4 ? '-o' : ''} priority-${index}`}></i>
                        <span className="tip">{`Priority ${index}`}</span>
                    </a>
                </li>)}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    changePriority: (id, index) => dispatch(actions.changePriority(id, index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Priority);