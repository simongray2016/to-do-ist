import React from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';


function ScheduleAction(props) {

    const callSetDate = value => {
        if (props.openSchedule) {
            props.setDate(props.id, value);
            props.toggle();
        }
        else {
            props.setDateForm(value);
            props.toggle();
        }
    }

    const setDaysWeek = (days) => {
        let now = new Date();
        let newDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + days);
        if (props.openSchedule) {
            props.setDate(props.id, newDate);
            props.toggle();
        }
        else {
            props.setDateForm(newDate);
            props.toggle();
        }
    }

    return (
        <div className="task-action">
            <div
                onClick={() => callSetDate(new Date())}
                className="item"
            >
                <span className="icon-label">
                    <i className="fa fa-calendar-check-o"></i>
                </span>
                <span className="name-label">Today</span>
            </div>
            <div
                onClick={() => setDaysWeek(1)}
                className="item"
            >
                <span className="icon-label">
                    <i className="fa fa-sun-o"></i>
                </span>
                <span className="name-label">Tomorrow</span>
            </div>
            <div
                onClick={() => setDaysWeek(7)}
                className="item"
            >
                <span className="icon-label">
                    <i className="fa fa-calendar-plus-o"></i>
                </span>
                <span className="name-label">Next week</span>
            </div>
            <div className="calendar">
                <Calendar
                    value={props.date}
                    locale="en-US"
                    showNeighboringMonth={false}
                    calendarType="ISO 8601"
                    minDate={new Date()}
                    onChange={value => callSetDate(value)}
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setDate: (id, date) => dispatch(actions.setDate(id, date))
})

export default connect(null, mapDispatchToProps)(ScheduleAction);