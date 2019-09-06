import * as types from '../constants/actionTypes';

let initState = {
    index: null
}

const actionReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ONPEN_TASK_ACTION:
            return { index: action.index }
        case types.CLOSE_TASK_ACTION:
            return { index: null };
        default:
            return {...state}
    }
}

export default actionReducer;