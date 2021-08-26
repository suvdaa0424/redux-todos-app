import { combineReducers, createStore } from 'redux'
import { search } from './reducers/search'
import { todos } from './reducers/todos'

const rootReducer = combineReducers({
    todos: todos,
    search: search
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store