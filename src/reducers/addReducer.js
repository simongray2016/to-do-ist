import * as types from '../constants/actionTypes';

let initState = {
    isQuickAdd: false,
    isAdd: false
}

const addReducer = (state = initState, action) => {
    switch (action.type) {
        case types.QUICK_ADD:
            return { isQuickAdd: true };
        case types.CANCEL_ADD:
            return { isQuickAdd: false, isAdd: false };
        case types.OPEN_FORM:
            return { isAdd: true };
        default:
            return state;
    }
}

export default addReducer;