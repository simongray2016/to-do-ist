import React from 'react';
import Calendar from 'react-calendar';

function ScheduleAction(props) {

    const callSetDay = value => {
        props.setDay(value);
        props.toggle();
    }
    
    return (
        <div className="task-action">
            <div className="item">
                <span className="icon-label">
                    <i className="fa fa-calendar-check-o"></i>
                </span>
                <span className="name-label">To day</span>
            </div>
            <div className="item">
                <span className="icon-label">
                    <i className="fa fa-sun-o"></i>
                </span>
                <span className="name-label">Tomorrow</span>
            </div>
            <div className="item">
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
                    onChange={value => callSetDay(value)}
                />
            </div>
        </div>
    );
};

export default ScheduleAction;