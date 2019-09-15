import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function Filter(props) {
    const redirect = e => {
        if (props.nextTab === props.tab) {
            e.preventDefault()
        }
        else {
            props.hideCompletedList();
            props.cancelAdd();
        }

    }

    return (
        <Route
            path={props.path}
            exact={props.isExact}
            children={({ match }) => {
                match && props.tabView(props.tab);
                return (
                    <Link
                        onClick={e => redirect(e)}
                        to={props.path}
                        className={match ? "filter filter-active" : "filter"}
                    >
                        <span className="filter-icon">
                            <i className={props.icon}></i>
                        </span>
                        <div className="item-content">
                            <span className="filter-name">
                                {props.name}
                            </span>
                            <span className="number-of-task">
                                {props.numberOfTask}
                            </span>
                        </div>
                    </Link>
                )
            }}
        >
        </Route>
    );
};

const mapStateToProps = state => ({
    nextTab: state.tabView.tab
})

const mapDispatchToProps = dispatch => ({
    hideCompletedList: () => dispatch(actions.hideCompletedList()),
    cancelAdd: () => dispatch(actions.cancelAdd()),
    tabView: number => dispatch(actions.tabView(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);