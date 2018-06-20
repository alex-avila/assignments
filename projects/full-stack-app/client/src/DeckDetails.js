import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getDecks } from './redux/decksReducer'

import { Link } from 'react-router-dom'

import Button from './Button'

class DeckDetails extends Component {
    componentDidMount() {
        if (!this.props.decks.length) {
            this.props.getDecks()
        }
    }

    render() {
        const deck = this.props.decks.find(deck => deck._id === this.props.match.params.id)
        const availableCards = deck ? deck.cards.filter(card => {
            return new Date(card.availableDate) <= Date.now()
        }) : null
        return (
            <div className="utility-wrapper">
                {
                    deck &&
                    <div>
                        <h2>{deck.name}</h2>
                        <p>Cards in deck: {deck.cards.length}</p>
                        <p>Available cards: {availableCards.length}</p>
                        <Link to={{
                            pathname: `${this.props.match.url}/review-session`,
                            state: {
                                deckId: this.props.match.params.id
                            }
                        }}>
                            <Button rounded>STUDY NOW</Button>
                        </Link>
                    </div>
                }
            </div>
        );
    }
}

export default connect(state => ({ decks: state.deckData.decks }), { getDecks })(DeckDetails)