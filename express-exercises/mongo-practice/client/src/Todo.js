import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo } from './redux/todoReducer'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggled: false,
            title: '',
            description: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            [name]: value
        }))
    }

    handleSubmit = (id, e) => {
        e.preventDefault()
        this.props.editTodo(id, {title: this.state.title, description: this.state.description})
        this.setState(this.initialState)
    }

    toggle = (title, description) => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled,
            title,
            description
        }))
    }
    
    render() {
        const { title, description, handleDelete, _id } = this.props
        return (
            <div id={_id}>
                <h3>{ title }</h3>
                <p>{ description }</p>
                <button onClick={() => handleDelete(_id)}>DELETE</button>
                <button onClick={() => this.toggle(title, description)}>EDIT</button>
                {
                    this.state.isToggled &&
                    <form onSubmit={(e) => this.handleSubmit(_id, e)}>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                        <button>Submit</button>
                    </form>
                }
            </div>
        )
    }
}

export default connect(null, {editTodo})(Todo)