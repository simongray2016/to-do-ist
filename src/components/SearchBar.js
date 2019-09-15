import * as React from 'react';
import Downshift from 'downshift';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function SearchBar(props) {
    const list = () => {
        if(props.tab === 1) {
            return props.taskList.list
        }
        else if(props.tab === 2) {
            return props.taskList.listToday
        }
        else return props.taskList.listWeek
    }

    const listFilter = value => {
        let inputValue = value.trim().toLowerCase();
        return list().filter(task => inputValue && task.name.toLowerCase().includes(inputValue))
    }

    return (
        <Downshift
            onChange={selection => selection && props.findTask(selection.id)}
            itemToString={task => task ? '' : ''}
        >
            {({
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
            }) => (
                    <div className="search-bar">
                        <label className="search-icon" {...getLabelProps()}>
                            <i className="fa fa-search"></i>
                        </label>
                        <input {...getInputProps()}
                            className="search"
                            placeholder="Quick search"
                        />
                        {isOpen
                            ? (listFilter(inputValue).length ? <div className="list-result" {...getMenuProps()}>
                                {listFilter(inputValue).map((task, index) => (
                                    <div className="item"
                                        {...getItemProps({
                                            key: index,
                                            index,
                                            item: task,
                                            style: {
                                                background:
                                                    highlightedIndex === index ? '#363636' : '#282828',
                                            },
                                        })}
                                    >
                                        {task.name}
                                    </div>
                                ))}
                                </div>
                                : null)
                            : null
                        }
                    </div>
                )}
        </Downshift>
    );
}

const mapStateToProps = state => ({
    taskList: state.taskReducer.taskList,
    tab: state.tabView.tab
})

const mapDispatchToProps = dispatch => ({
    findTask: id => dispatch(actions.findTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);