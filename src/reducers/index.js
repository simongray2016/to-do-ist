import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import editReducer from './editReducer';
import actionReducer from './actionReducer';
import addReducer from './addReducer';
import viewCompletedList from './viewCompletedList';
import tabView from './tabView';

const reducer = combineReducers({
    taskReducer,
    editReducer,
    actionReducer,
    addReducer,
    viewCompletedList,
    tabView
});

export default reducer;