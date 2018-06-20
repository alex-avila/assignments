import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './Deck.css'

class Deck extends Component {
    render() {
        const { _id, name } = this.props
        // const { availableCards } = this.props
        return (
            <Link to={_id} className="deck-item">
                <div className="deck-item__wrapper">
                    <div id={_id}>
                        <h3>{name}</h3>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Deck