import React, { Component } from 'react'

class BountyForm extends Component {
    render() {
        const { handleChange, handleSubmit, inputs } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    name="firstName"
                    value={inputs.firstName}
                    type="text"
                    placeholder="First Name"
                />
                <input
                    onChange={handleChange}
                    name="lastName"
                    value={inputs.lastName}
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    onChange={handleChange}
                    name="bountyAmount"
                    value={inputs.bountyAmount}
                    type="text"
                    placeholder="Bounty Amount"
                />
                <input
                    onChange={handleChange}
                    name="living"
                    value={inputs.living}
                    type="text"
                    placeholder="Alive or Dead"
                />
                <input
                    onChange={handleChange}
                    name="type"
                    value={inputs.type}
                    type="text"
                    placeholder="Affiliation"
                />
                <button>ADD BOUNTY</button>
            </form>
        );
    }
}

export default BountyForm