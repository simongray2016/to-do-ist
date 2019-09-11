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
            let { task } = action;
            let newTask = new Task(task.name, task.date ,task.priority);
            inbox.list = inbox.addTask(newTask);
            return { ...state, inbox };
        case types.COMPLETED_TASK:
            inbox.list = inbox.completedTask(action.id);
            inbox.completedList = inbox.addCompletedList();
            return { ...state };
        case types.EDIT_TASK:
            let editList = inbox.editTask(action.id, action.task);
            inbox.list = editList;
            return { ...state }
        case types.DELETE_TASK:
            inbox.list = inbox.deleteTask(action.id);
            return { ...state }
        case types.CHANGE_PRIORITY:
            inbox.list = inbox.changePriority(action.id, action.index);
            return { ...state }
        case types.FIND_TASK:
            id = action.id
            return { ...state, id }
        case types.CLEAR_ID:
            id = null;
            return { ...state, id }
        default:
            return state;
    }
}

export default taskReducer;