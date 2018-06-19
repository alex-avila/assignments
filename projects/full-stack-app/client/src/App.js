import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getDecks } from './redux/decksReducer'

class App extends Component {
    componentDidMount() {
        this.props.getDecks()
    }

    render() {
        const { decks } = this.props
        const mappedDecks = decks
            // Before the mapping, this should be filtered to not include cards
            // that are not available. Or do it when mapping.
            .map(deck => {
                const { _id, name, cards } = deck
                const availableCards = cards.filter(card => {
                    return new Date(card.availableDate) <= Date.now()
                })
                return (
                    <div key={_id}>
                        <h3>{name}</h3>
                        <p>Cards in deck: {cards.length}</p>
                        <p>Cards available: {availableCards.length}</p>
                    </div>
                )
            })
        return (
            <div>
                {mappedDecks}
            </div>
        )
    }
}

export default connect(state => ({decks: state.decks}), { getDecks })(App)
