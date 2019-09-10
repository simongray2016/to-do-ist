import * as types from '../constants/actionTypes';

let initState = {
    isQuickAdd: false,
    isAdd: false
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
        default:
            return state;
    }
}

export default addReducer;