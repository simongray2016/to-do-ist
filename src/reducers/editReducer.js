import * as types from '../constants/actionTypes';

let initState = {
    isEdit: false,
    id: null
}

const editReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ONPEN_EDIT_FORM:
            return { isEdit: true, id: action.id}
        case types.CANCEL_EDIT:
            return { isEdit: false, id: null }
        default:
            return state
    }
}
export default editReducer;