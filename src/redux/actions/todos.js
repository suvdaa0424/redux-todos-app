export const CREATE_TODO = 'CREATE_TODO'

// create todo
export function actionCreateTodo(text) {
    return {
        type: CREATE_TODO,
        text
    }
}

// remove todo

// complete todo