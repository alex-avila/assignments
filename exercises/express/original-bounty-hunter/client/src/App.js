import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getBounties, addBounty, editBounty, deleteBounty } from './redux'

import Bounties from './components/Bounties'
import FormContainer from './components/FormContainer'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                bountyAmount: '',
                living: '',
                type: '',
            },
            editing: false,
            currentId: null
        }
        this.baseInputs = this.state.inputs
    }

    componentDidMount = () => {
        this.props.getBounties()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.editing) {
            this.props.addBounty(this.state.inputs)
        } else {
            this.props.editBounty(this.state.currentId, this.state.inputs)
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
            <div>
                <FormContainer
                    inputs={this.state.inputs}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <Bounties handleEdit={this.handleEdit} handleDelete={this.handleDelete} bounties={this.props.bounts}/>
            </div>
        )
    }
}

export default connect(state => ({ bounts: state.bounties }), { getBounties, addBounty, editBounty, deleteBounty })(App)