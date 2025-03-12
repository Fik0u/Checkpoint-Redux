import { ADD_TASK, DELETE_TASK, EDIT_TASK, TASK_FILTER, TOGGLE_TASK } from "../actionTypes/actionTypes";

const initialState = {
    tasks: [
        { 
            id: Math.random(),
            description: 'Go to Gym',
            isDone: false 
        },
        { 
            id: Math.random(),
            description: 'Do Homework',
            isDone: false 
        },
    ],
    filter: "All"
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

            case TASK_FILTER:
                return {...state, filter: payload}
        
            default: return state
        }
}

export default toDoReducer;