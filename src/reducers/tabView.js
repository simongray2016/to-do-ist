import * as types from '../constants/actionTypes';

let initState = {
    tab: 1
}

const tabView = (state = initState, action) => {
    switch (action.type) {
        case types.TAB:
            return { tab: action.number }
        default:
            return { ...state }
    }
}

export default tabView;