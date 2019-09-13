import * as types from '../constants/actionTypes';
import Task from '../model/Task';
import Project from '../model/Project';
import inbox from '../model/GetData';

let initState = {
    taskList: new Project(),
    id: null,
}

let localList = JSON.parse(localStorage.getItem('taskList'));

if (!localList) {
    localStorage.setItem('taskList', JSON.stringify(inbox));
    localList = JSON.parse(localStorage.getItem('taskList'));
}

initState.taskList.setList(localList.list);

initState.taskList.setCompletedList(localList.completedList);

initState.taskList.list = initState.taskList.list.map(task => {
    let newDate = new Date(task.date);
    return {...task, date: newDate}
})

initState.taskList.completedList = initState.taskList.completedList.map(task => {
    let newDate = new Date(task.date);
    return {...task, date: newDate}
})


const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            let { task } = action;
            let newTask = new Task(task.name, task.date, task.priority);
            state.taskList.list = state.taskList.addTask(newTask);
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
            return { ...state };
        case types.COMPLETED_TASK:
            state.taskList.list = state.taskList.completedTask(action.id);
            state.taskList.addCompletedList();
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
            return { ...state };
        case types.EDIT_TASK:
            let editList = state.taskList.editTask(action.id, action.task);
            state.taskList.list = editList;
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
            return { ...state }
        case types.DELETE_TASK:
            state.taskList.list = state.taskList.deleteTask(action.id);
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
            return { ...state }
        case types.CHANGE_PRIORITY:
            state.taskList.list = state.taskList.changePriority(action.id, action.index);
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
            return { ...state }
        case types.FIND_TASK:
            state.id = action.id
            return { ...state }
        case types.CLEAR_ID:
            state.id = null;
            return { ...state }
        case types.SET_DATE:
            state.taskList.list = state.taskList.setDate(action.id, action.date);
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
            return { ...state }
        case types.SORT_BY_DATE:
            state.taskList.list = state.taskList.sortBy(action.value);
            return { ...state };
        case types.SORT_BY_PRIORITY:
            state.taskList.list = state.taskList.sortBy(action.value);
            return { ...state };
        case types.SORT_BY_NAME:
            state.taskList.list = state.taskList.sortBy(action.value);
            return { ...state };
        case types.UNDO_TASK:
            let undoTask = state.taskList.undoTask(action.id);
            state.taskList.addTask(undoTask);
            localStorage.setItem('taskList', JSON.stringify(state.taskList));
            return { ...state };
        default:
            return state;
    }
}

export default taskReducer;