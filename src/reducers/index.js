import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import editReducer from './editReducer';
import actionReducer from './actionReducer';
import addReducer from './addReducer';

const reducer = combineReducers({
    taskReducer,
    editReducer,
    actionReducer,
    addReducer,
});

export default reducer;