import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

function List(props) {
    useEffect(() => {
        console.log('props', props.taskList);
    })

    return (
        <div className="section-list">
            <div className="list-holder">
                <table>
                    <tbody>
                        {props.taskList.length !== 0 ? props.taskList.map((task, index) => (
                            <ListItem
                                name={task.name}
                                key={index}
                            />
                        )) :
                            <tr></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    taskList: state.taskReducer.inbox.list
})

export default connect(mapStateToProps, null)(List);