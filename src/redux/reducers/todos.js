import { CREATE_TODO } from '../actions/todos'

let id = 0

export function todos(state = [], action) {
    switch (action.type) {
        case CREATE_TODO:
            return [
                ...state,
                {
                    id: id++,
                    text: action.text,
                    completed: false,
                    date: new Date()
                }
            ]
        default:
            return state
    }
}