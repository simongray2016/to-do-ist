import React, { useEffect, useRef } from 'react';
import ListItem from './ListItem';

function List(props) {
    const scrollRef = useRef(null);

    useEffect(() => {
        let offsetTop = scrollRef.current.getBoundingClientRect().top -200;
        props.showCompletedList && window.scrollTo({top: offsetTop, behavior: 'smooth'});
    })

    return (
        <div ref={scrollRef} className="section-list">
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
                                showCompletedList={props.showCompletedList}
                                toggle={() => props.toggle && props.toggle()}
                                length={props.taskList.length - 1}
                            />
                        )) : <tr className="empty-list">
                                {props.showCompletedList && 'No completed tasks'}
                            </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;