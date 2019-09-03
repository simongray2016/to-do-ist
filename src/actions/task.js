import * as types from '../constants/actionTypes';

export const addTask = name => ({ type: types.ADD_TASK, name });

export const querySearch = query => ({ type: types.QUERY_SEARCH, query })