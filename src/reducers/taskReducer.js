import * as types from '../constants/actionTypes';
import Task from '../model/Task';
import inbox from '../model/GetData';

let initState = {
    inbox,
    listResult: [],
    isQuickAdd: false,
    isAdd: false
}

const taskReducer = (state = initState, action) => {
    let { inbox, listResult } = state;
    switch (action.type) {
        case types.ADD_TASK:
            let {name} = action;
            let newTask = new Task(name);
            inbox.list = [...inbox.list, newTask];
            console.log('newTask', inbox)
            return { ...state, inbox };
        case types.QUERY_SEARCH:
            let { query } = action;
            query ? listResult = inbox.list.filter(task => task.name.includes(query)) : listResult = [];
            return { ...state, listResult };
        case types.QUICK_ADD:
            return {...state, isQuickAdd: true};
        case types.CANCEL_ADD: 
            return {...state, isQuickAdd: false, isAdd: false};
        case types.OPEN_FORM:
            return {...state, isAdd: true};
        default:
            return state;
    }
}

export default taskReducer;