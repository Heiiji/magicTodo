import { ADD_TASK, DELETE_TASK, CHANGE_TASK_STATUS } from './actionsType';

export const addTask = title => ({
    type: ADD_TASK,
    payload: {
        id: new Date().getTime(),
        title,
        completed: false
    }
})

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload: id
})

export const changeTaskStatus = id => ({
    type: CHANGE_TASK_STATUS,
    payload: id
})