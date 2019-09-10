import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    })
    return ref.current;
}

function List(props) {
    const [added, setAdded] = useState(false);

    const {length} = props.taskList;

    const prevLength = usePrevious(length);

    useEffect(() => {
        if (prevLength < length) {
            setAdded(true)
        }
        else setAdded(false)
    }, [prevLength, length])

    return (
        <div className="section-list">
            <div className="list-holder">
                <table>
                    <tbody>
                        {props.taskList.length !== 0 ? props.taskList.map((task, index) => (
                            <ListItem
                                name={task.name}
                                id={task.id}
                                key={index}
                                index={index}
                                priority={task.priority}
                                length={props.taskList.length}
                                added={added}
                            />
                        )) : <tr></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    taskList: state.taskReducer.inbox.list,
})

export default connect(mapStateToProps, null)(List);