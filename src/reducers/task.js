import * as types from '../constants/actionTypes';
import inbox from '../model/GetData';

const task = (state = inbox, action) => {
    switch (action.type) {
        case types.ADD_TASK: 
            console.log('state', state);
            return {...state};
        default:
            return state;
    }
}

export default task;