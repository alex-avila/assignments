import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Deck extends Component {
    render() {
        const { _id, name } = this.props
        const { availableCards } = this.props
        return (
            <Link to={_id}>
                <div id={_id}>
                    <h3>{name}</h3>
                    <p>Cards available: {availableCards.length}</p>
                </div>
            </Link>
        );
    }
}

export default Deck