import * as types from '../constants/actionTypes';
import inbox from '../model/GetData';

let initState = {
    inbox,
    listResult: []
}

const task = (state = initState, action) => {
    let { inbox, listResult } = state;
    switch (action.type) {
        case types.ADD_TASK:
            return { ...state };
        case types.QUERY_SEARCH:
            let { query } = action;
            query ? listResult = inbox.list.filter(task => task.name.includes(query)) : listResult = [];
            return { ...state, listResult };
        default:
            return state;
    }
}

export default task;