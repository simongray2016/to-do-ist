import * as types from '../constants/actionTypes';

export const addTask = name => ({ type: types.ADD_TASK, name });

export const querySearch = query => ({ type: types.QUERY_SEARCH, query });

export const quickAdd = () => ({type: types.QUICK_ADD});

export const cancelAdd = () => ({type: types.CANCEL_ADD});

export const openForm = () => ({ type: types.OPEN_FORM });