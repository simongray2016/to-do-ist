import * as React from 'react';
import Downshift from 'downshift';
import { connect } from 'react-redux';
import * as actions from '../actions/taskActions';

function SearchBar(props) {
    let { list } = props;

    const listFilter = value => {
        console.log('value :', value);
        let inputValue = value.trim().toLowerCase();
        return list.filter(task => inputValue && task.name.toLowerCase().includes(inputValue))
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
    list: state.taskReducer.inbox.list
})

const mapDispatchToProps = dispatch => ({
    findTask: id => dispatch(actions.findTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);