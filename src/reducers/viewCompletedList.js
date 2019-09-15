import * as types from '../constants/actionTypes';

let initState = {
    show: false
}

const viewCompletedList = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_COMPLETED_LIST:
            return { show: true };
        case types.HIDE_COMPLETED_LIST:
            return { show: false }
        default:
            return state;
    }
}

export default viewCompletedList;