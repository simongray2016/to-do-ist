import * as types from '../constants/actionTypes';

let initState = {
    isEdit: false,
    index: null
}

const editReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ONPEN_EDIT_FORM:
            return { isEdit: true, index: action.index}
        case types.CANCEL_EDIT:
            return { isEdit: false, index: null }
        default:
            return state
    }
}
export default editReducer;