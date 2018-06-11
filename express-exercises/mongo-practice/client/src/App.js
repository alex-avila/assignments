import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodo, createTodo } from './redux/todoReducer'

import Todo from './Todo'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                title: '',
                description: ''
            }
        }
        this.initialState = {...this.state}
    }

    componentDidMount() {
        this.props.getTodos()
    }

    handleDelete = id => {
        this.props.deleteTodo(id)
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
             inputs: { ...prevState.inputs, [name]: value } 
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createTodo(this.state.inputs)
        this.setState(this.initialState)
    }

    render() {
        const mappedTodos = this.props.todos.map((todo, i) => {
            return (
                <Todo key={todo._id} {...todo} handleDelete={this.handleDelete}/>
            )
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.inputs.title} placeholder="title"/>
                    <input type="text" name="description" onChange={this.handleChange} value={this.state.inputs.description} placeholder="description"/>
                    <button>SUBMIT</button>
                </form>
                {mappedTodos}
            </div>
        )
    }
}

export default connect(state => ({ todos: state.todos }), { getTodos, deleteTodo, createTodo })(App)