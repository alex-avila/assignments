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
                const { _id, cards } = deck
                const availableCards = cards.filter(card => {
                    return new Date(card.availableDate) <= Date.now()
                })
                return (
                    <Deck key={_id} {...deck} availableCards={availableCards} />
                )
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

export default connect(state => ({ decks: state.deckData.decks }), { getDecks })(Decks);