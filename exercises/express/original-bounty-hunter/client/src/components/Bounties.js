import React, { Component } from 'react'

import Bounty from './Bounty'

class Bounties extends Component {
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
                    id={bounty.id}
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

export default Bounties