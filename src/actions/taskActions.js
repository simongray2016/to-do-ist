import * as types from '../constants/actionTypes';

export const addTask = name => ({ type: types.ADD_TASK, name });

export const querySearch = query => ({ type: types.QUERY_SEARCH, query });

export const quickAdd = () => ({ type: types.QUICK_ADD });

export const cancelAdd = () => ({ type: types.CANCEL_ADD });

export const openForm = () => ({ type: types.OPEN_FORM });

export const completedTask = id => ({ type: types.COMPLETED_TASK, id });

export const openEditForm = (index) => ({ type: types.ONPEN_EDIT_FORM, index });

export const cancelEdit = () => ({ type: types.CANCEL_EDIT});

export const editTask = (id, name) => ({ type: types.EDIT_TASK, id, name })

export const openTaskAction = index => ({ type: types.ONPEN_TASK_ACTION, index })

export const closeTaskAction = () => ({type: types.CLOSE_TASK_ACTION})

export const deleteTask = id => ({type: types.DELETE_TASK, id})

export const changePriority = (id, index) => ({type: types.CHANGE_PRIORITY, id, index})

export const findTask = id => ({type: types.FIND_TASK, id})