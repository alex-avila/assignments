import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addContact } from './redux'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: {
                name: '',
                email: '',
                phone: ''
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState(prevState => ({
            contact: {
                ...prevState.contact,
                [name]: value
            }
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addContact(this.state.contact)
    }

    render() {
        const { contact: { name, email, phone } } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" value={name} type="text" onChange={this.handleChange} placeholder="name" />
                <input name="email" value={email} type="text" onChange={this.handleChange} placeholder="email" />
                <input name="phone" value={phone} type="text" onChange={this.handleChange} placeholder="phone" />
                <button>Add contact</button>
            </form>
        );
    }
}

export default connect(null, { addContact })(Form)