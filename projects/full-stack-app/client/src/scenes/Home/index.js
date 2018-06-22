import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getDecks } from '../../redux/decksReducer'

import Deck from './components/Deck';
// import Dashboard from '../../components/Dashboard'

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
                {/* <Dashboard
                /> */}
                <div className="decks-list__wrapper utility-wrapper">
                    <h2>Decks</h2>
                    {mappedDecks}
                </div>
            </section>
        );
    }
}

export default connect(state => ({ decks: state.deckData.decks }), { getDecks })(Decks);