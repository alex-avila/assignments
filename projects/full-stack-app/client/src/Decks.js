import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getDecks } from './redux/decksReducer'

import Deck from './Deck';

class Decks extends Component {
    componentDidMount() {
        this.props.getDecks()
    }

    render() {
        const { decks } = this.props
        const mappedDecks = decks
            .map(deck => {
                const { _id, cards } = deck
                const availableCards = cards.filter(card => {
                    return new Date(card.availableDate) <= Date.now()
                })
                return (
                    <Deck key={_id} {...deck} availableCards={availableCards}/>
                )
            })
        return (
            <div>
                {mappedDecks}
            </div>
        );
    }
}

export default connect(state => ({ decks: state.decks }), { getDecks })(Decks);