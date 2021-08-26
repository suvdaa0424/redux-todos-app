import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetSearch } from '../redux/actions/search'

function SearchPage() {
    const search = useSelector((state) => state.search)
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const filteredTodos = todos.filter((todo) => {
        return todo.text.includes(search)
    })

    return (
        <div>
            <form>
                <label for="todoText">Search</label>
                <input
                    id="todoText"
                    value={search}
                    onChange={(e) => dispatch(actionSetSearch(e.target.value))}
                />
                <button type="reset">Clear</button>
            </form>
            {filteredTodos.map((todo) => {
                return <div key={todo.id}>{todo.text}</div>
            })}
        </div>
    )
}

export default SearchPage