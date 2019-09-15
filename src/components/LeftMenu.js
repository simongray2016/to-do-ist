import React from 'react';
import { connect } from 'react-redux';

import Filter from './Filter';

function LeftMenu(props) {
    return (
        <div className="left-menu">
            <Filter
                tab={1}
                icon={"fa fa-inbox"}
                name={"Inbox"}
                path={"/"}
                isExact={true}
                numberOfTask={props.list === 0 ? '' : props.list}
            />
            <Filter
                tab={2}
                icon={"fa fa-calendar-check-o"}
                name={"Today"}
                path={"/today"}
                numberOfTask={props.listToday === 0 ? '' : props.listToday}
            />
            <Filter
                tab={3}
                icon={"fa fa-calendar"}
                name={"Next 7 days"}
                path={"/next-7-days"}
                numberOfTask={props.listWeek === 0 ? '' : props.listWeek}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    list: state.taskReducer.taskList.list.length,
    listToday: state.taskReducer.taskList.listToday.length,
    listWeek: state.taskReducer.taskList.listWeek.length
})

export default connect(mapStateToProps, null)(LeftMenu);