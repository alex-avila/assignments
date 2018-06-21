import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getDeck } from '../../redux/decksReducer'

import { Link } from 'react-router-dom'

import Button from '../../components/Button'

import './DeckDetails.css'

class DeckDetails extends Component {
    componentDidMount() {
        this.props.getDeck(this.props.match.params.id)
    }

    render() {
        const deck = this.props.deck
        const availableCards = Object.keys(deck).length ? deck.cards.filter(card => {
            return new Date(card.availableDate) <= Date.now()
        }) : null
        return (
            <div className="utility-wrapper">
                {
                    !!Object.keys(deck).length &&
                    <div className="deck-details">
                        <h2>{deck.name}</h2>
                        <p>{deck.description}</p>
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

export default connect(state => ({ deck: state.deckData.deck }), { getDeck })(DeckDetails)