import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addBounty } from '../redux'

class BountyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                bountyAmount: '',
                living: '',
                type: '',
            }
        }
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

    handleSubmit = e => {
        e.preventDefault()
        this.props.addBounty(this.state.inputs)
        this.setState({
            inputs: {
                firstName: '',
                lastName: '',
                bountyAmount: '',
                living: '',
                type: ''
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    name="firstName"
                    value={this.state.inputs.firstName}
                    type="text"
                    placeholder="First Name"
                />
                <input
                    onChange={this.handleChange}
                    name="lastName"
                    value={this.state.inputs.lastName}
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    onChange={this.handleChange}
                    name="bountyAmount"
                    value={this.state.inputs.bountyAmount}
                    type="text"
                    placeholder="Bounty Amount"
                />
                <input
                    onChange={this.handleChange}
                    name="living"
                    value={this.state.inputs.living}
                    type="text"
                    placeholder="Alive or Dead"
                />
                <input
                    onChange={this.handleChange}
                    name="type"
                    value={this.state.inputs.type}
                    type="text"
                    placeholder="Affiliation"
                />
                <button>ADD BOUNTY</button>
            </form>
        );
    }
}

export default connect(null, { addBounty })(BountyForm)