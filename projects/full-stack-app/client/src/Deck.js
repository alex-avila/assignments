import React, { Component } from 'react'

class Deck extends Component {
    render() {
        const { _id, name, cards } = this.props
        const { availableCards } = this.props
        return (
            <div id={_id}>
                <h3>{name}</h3>
                <p>Cards in deck: {cards.length}</p>
                <p>Cards available: {availableCards.length}</p>
            </div>
        );
    }
}

export default Deck