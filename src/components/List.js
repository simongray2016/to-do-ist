import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

function List(props) {
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
                                date={task.date}
                                priority={task.priority}
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