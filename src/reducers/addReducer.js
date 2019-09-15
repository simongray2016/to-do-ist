import * as types from '../constants/actionTypes';

let initState = {
    isQuickAdd: false,
    isAdd: false,
    added: false,
}

const addReducer = (state = initState, action) => {
    switch (action.type) {
        case types.QUICK_ADD:
            state.isQuickAdd = true
            return { ...state }
        case types.CLOSE_QUICK_ADD:
            state.isQuickAdd = false
            return { ...state }
        case types.CANCEL_ADD:
            state.isAdd = false
            return { ...state }
        case types.OPEN_FORM:
            state.isAdd = true
            return { ...state }
        case types.ADDED: {
            if(state.isQuickAdd) {
                state.added = true;
            }
            return { ...state }
        }
        case types.CLEAR_ADDED:
            state.added = false;
            return { ...state };
        default:
            return state;
    }
}

export default addReducer;