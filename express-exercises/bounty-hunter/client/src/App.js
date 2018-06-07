import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addBounty, editBounty, deleteBounty } from './redux/bounties'

import Bounties from './components/Bounties'
import FormContainer from './components/FormContainer'

import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                bountyAmount: '',
                living: false,
                type: '',
            },
            editing: false,
            currentId: null
        }
        this.baseInputs = this.state.inputs
    }

    handleChange = e => {
        const { target } = e
        const { name } = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { inputs, currentId } = this.state
        if (!this.state.editing) {
            const filteredInputs = Object.keys(inputs).reduce((a, b) => {
                return inputs[b] ? {...a, [b]: inputs[b]} : a
            }, {})
            this.props.addBounty(filteredInputs)
        } else {
            this.props.editBounty(currentId, inputs)
        }
        this.setState({ inputs: this.baseInputs, editing: false, currentId: null })
    }

    handleEdit = (body, id) => {
        this.setState({ inputs: body, editing: true, currentId: id })
    }

    handleDelete = id => {
        this.props.deleteBounty(id)
    }

    render() {
        return (
            <div className="wrapper">
                <FormContainer
                    inputs={this.state.inputs}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    editing={this.state.editing}
                />
                <Bounties 
                    handleEdit={this.handleEdit} 
                    handleDelete={this.handleDelete} 
                />
                <div className="add-btn">
                    <i class="material-icons add-icon">add</i>
                </div>
            </div>
        )
    }
}

export default connect(null, { addBounty, editBounty, deleteBounty })(App)