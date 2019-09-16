import React, { useEffect, useRef } from 'react';
import ListItem from './ListItem';

function List(props) {
    const scrollRef = useRef(null);

    useEffect(() => {
        let offsetTop = scrollRef.current.offsetTop -200;
        props.showCompletedList && window.scrollTo({top: offsetTop, behavior: 'smooth'});
    }, [props.showCompletedList])

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
                        )) : <tr key={"empty"} className="empty-list">
                                {props.showCompletedList && <td>No completed tasks</td>}
                            </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;