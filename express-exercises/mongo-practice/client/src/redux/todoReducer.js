import axios from 'axios'

export const getTodos = () => {
    return dispatch => {
        axios.get('/todos').then(response => {
            dispatch({
                type: 'GET_TODOS',
                todos: response.data
            })
        }).catch(err => console.log(err))
    }
}

export const deleteTodo = id => {
    return dispatch => {
        axios.delete('/todos/' + id).then(response => {
            dispatch(getTodos())
        }).catch(err => console.log(err))
    }
}

export const createTodo = body => {
    return dispatch => {
        axios.post('/todos', body).then(response => {
            dispatch(getTodos())
        }).catch(err => console.log(err))
    }
}

export const editTodo = (id, todo) => {
    return dispatch => {
        axios.put('/todos/' + id, todo).then(response => {
            dispatch(getTodos())
        }).catch(err => console.log(err))
    }
}

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return action.todos
        default:
            return state
    }
}

export default todoReducer