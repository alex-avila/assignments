import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getDecks } from '../../redux/decksReducer'

import Deck from './components/Deck';

import './index.css'

class Decks extends Component {
    componentDidMount() {
        this.props.getDecks()
    }

    render() {
        const { decks } = this.props
        const mappedDecks = decks
            .map(deck => {
                const { _id, inQueue: { cards } } = deck
                const cardObject = cards.reduce((final, card) => {
                    if (card.hasBeenSeen) {
                        final.newCards.push(card)
                    } else {
                        final.reviews.push(card)
                    }
                    return final
                }, { newCards: [], reviews: [] })
                const newCards = cardObject.newCards.slice(0, deck.settings.newCards.perDay)
                const reviews = cardObject.reviews.slice(0, deck.settings.reviews.perDay)
                const availableCards = [...newCards, ...reviews]
                // Add condition to check if it was created today
                if (new Date(deck.today).getDate() !== new Date(Date.now()).getDate()) {
                    this.props.getCardsPerDeck(card._id, availableCards)
                }
                return <Deck key={_id} {...deck} availableCards={availableCards} />
            })
        return (
            <section className="decks-list">
                <h2 className="utility-wrapper">Decks</h2>
                <div className="decks-list__wrapper utility-wrapper">
                    {mappedDecks}
                </div>
            </section>
        )
    }
}

export default connect(state => ({ decks: state.deckData.decks }), { getDecks, getC })(Decks);