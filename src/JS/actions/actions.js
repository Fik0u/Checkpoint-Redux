import { ADD_TASK, DELETE_TASK, EDIT_TASK, TASK_FILTER, TOGGLE_TASK } from "../actionTypes/actionTypes"


//! Action creators
// Action to add a task
export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

// Action to edit a task
export const editTask = (id, newDescription) => {
    return {
        type: EDIT_TASK,
        payload: {id, newDescription}
    }
}

// Action to delete a task
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

// Action to toggle task's status
export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}

export const taskFilter = (filter) => {
    return {
        type: TASK_FILTER,
        payload : filter
    }
}