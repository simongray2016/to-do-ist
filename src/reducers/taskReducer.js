import * as types from '../constants/actionTypes';
import Task from '../model/Task';
import inbox from '../model/GetData';

let initState = {
    inbox,
    id: null
}

const taskReducer = (state = initState, action) => {
    let { inbox, id } = state;
    switch (action.type) {
        case types.ADD_TASK:
            let { name } = action;
            let newTask = new Task(name);
            inbox.list = inbox.addTask(newTask);
            return { ...state, inbox };
        case types.COMPLETED_TASK:
            let newList = inbox.completedTask(action.id);
            inbox.list = newList;
            return { ...state };
        case types.EDIT_TASK:
            let editList = inbox.editTask(action.name, action.id);
            inbox.list = editList;
            return { ...state }
        case types.DELETE_TASK:
            inbox.list = inbox.deleteTask(action.id);
            return { ...state }
        case types.CHANGE_PRIORITY:
            console.log('action.index :', action.index);
            inbox.list = inbox.changePriority(action.id, action.index);
            return { ...state }
        case types.FIND_TASK:
            id = action.id
            return { ...state, id }
        default:
            return state;
    }
}

export default taskReducer;