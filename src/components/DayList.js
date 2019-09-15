import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import List from './List';
import Form from './Form';
import AddTask from './AddTask';

function DayList(props) {
    let { index } = props;
    const subsection = () => {
        if (props.index === 0) {
            return "Today"
        }
        else if (props.index === 1) {
            return "Tomorrow"
        }
        else {
            return moment().day(index - 1).format("dddd");
        }
    }

    const subsectionDate = () => {
        return moment().add(index, 'd').format('ddd DD MMM');
    }

    const dayList = () => {
        let { index } = props;
        let date = moment().add(index, 'days').date();
        let list = props.list.filter(task =>  date === task.date.getDate() );
        return list;
    }

    return (
        <React.Fragment>
            <div className="day">
                <span>{subsection()}</span>
                <span className="subsection-date">{subsectionDate()}</span>
            </div>
            <List
                taskList={dayList()}
                toggle={() => props.closeAdd()}
            />
            {props.add === props.index
                && <div className="padding-right-5">
                    <Form
                        toggle={() => props.closeAdd()}
                        weekDay={props.index}
                    />
                </div>
            }
            <AddTask
                toggle={() => props.openAdd(index)}
            />
        </ React.Fragment>
    );
};

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, null)(DayList);