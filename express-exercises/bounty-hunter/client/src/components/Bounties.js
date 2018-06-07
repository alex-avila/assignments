import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getBounties } from '../redux'

import Bounty from './Bounty'

class Bounties extends Component {
    componentDidMount = () => {
        this.props.getBounties()
    }

    render = () => {
        const mappedBounties = this.props.bounties.map((bounty, i) => {
            return (
                <Bounty
                    key={bounty.firstName + i}
                    fName={bounty.firstName}
                    lName={bounty.lastName}
                    amount={bounty.bountyAmount}
                    living={bounty.living}
                    type={bounty.type}
                    id={bounty._id}
                    bounty={bounty}
                    handleEdit={this.props.handleEdit}
                    handleDelete={this.props.handleDelete}
                />
            )
        })
        return (
            <div>
                {mappedBounties}
            </div>
        );
    }
}

export default connect(state => ({ bounties: state.bounties }), { getBounties })(Bounties)