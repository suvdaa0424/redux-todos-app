import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreateTodo } from '../redux/actions/todos'

function IndexPage() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
    const [todoText, setTodoText] = useState()

    function submitHandler(e) {
        e.preventDefault()
        dispatch(actionCreateTodo(todoText))
        setTodoText('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label for="todoText">Add Todo</label>
                <input
                    id="todoText"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <button>Add</button>
            </form>
            {todos.map((todo) => {
                return <div key={todo.id}>{todo.text}</div>
            })}
        </div>
    )
}

export default IndexPage
