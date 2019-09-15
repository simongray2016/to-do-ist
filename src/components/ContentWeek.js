import React, { useState } from 'react';
import { connect } from 'react-redux';

import DayList from './DayList';
import ProjectAction from './ProjectAction';
import Empty from './Empty';

function ContentWeek(props) {
    let { name } = props;
    const day = [0, 1, 2, 3, 4, 5, 6];

    const [add, setAdd] = useState(null);

    return (
        <div className="content">
            <div className="project-header">
                <span className="project-name">
                    {name}
                </span>
                {name === 'Inbox'
                    && <div className="project-action">
                        <ProjectAction />
                        <span className="action-tip">
                            Project action
                        </span>
                    </div>}
            </div>
            {day.map(index => (
                <DayList
                    list={props.list}
                    index={index}
                    key={index}
                    add={add}
                    closeAdd={() => setAdd(null)}
                    openAdd={index => setAdd(index)}
                />
            ))}
            {props.list.length === 0 && <Empty />}
        </div>
    );
};

const mapStateToProps = state => ({
    isAdd: state.addReducer.isAdd
})

export default connect(mapStateToProps, null)(ContentWeek);