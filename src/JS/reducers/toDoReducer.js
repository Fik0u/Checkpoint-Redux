import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from "../actionTypes/actionTypes";

const initialState = {
    tasks: [
        { 
            id: Math.random(),
            description: 'Task 1',
            isDone: false 
        },
        { 
            id: Math.random(),
            description: 'Task 2',
            isDone: false 
        },
    ]
}


const toDoReducer = (state = initialState, {type, payload}) => {
        switch (type) {
            case ADD_TASK:
                return { ...state, tasks: [...state.tasks, payload] }

            case DELETE_TASK: 
                return {...state, tasks: state.tasks.filter(task => task.id !== payload)}

            case EDIT_TASK: 
                return {...state, tasks: state.tasks.map(task => task.id === payload.id ? { ...task, description: payload.newDescription } : task)}

            case TOGGLE_TASK: 
                return {...state, tasks: state.tasks.map(task => task.id === payload ? { ...task, isDone: !task.isDone } : task)}
        
            default: return state
        }
}

export default toDoReducer;