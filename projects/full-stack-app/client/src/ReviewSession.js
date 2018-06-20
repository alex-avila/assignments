import React, { Component } from 'react'

import { connect } from 'react-redux'
import { updateCard } from './redux/decksReducer'
import QualityGetter from './QualityGetter';
import Card from './Card';

import './ReviewSession.css'

class ReviewSession extends Component {
    /*
    Get available cards to current queue
    Record response to each card
    After each response determine whether card should stay in queue
    based on date or if it should get out
    loop through the card array until all cards are confirmed to move
    on to a later date
    */

    constructor(props) {
        super(props)
        this.state = {
            currentInQueue: 0,
            isCardFlipped: false
        }
    }

    handleQRes = (len, cardId, quality) => {
        const { deckId } = this.props.location.state
        this.props.updateCard(deckId, cardId, quality)
        if (this.state.currentInQueue + 1 <= len - 1) {
            this.setState(prevState => ({
                currentInQueue: prevState.currentInQueue + 1,
                isCardFlipped: false
            }))
        } else {
            this.setState({ currentInQueue: 0, isCardFlipped: false })
        }
    }

    handleFlip = () => {
        this.setState(prevState => ({ isCardFlipped: !prevState.isCardFlipped }))
    }


    render() {
        const deck = this.props.decks.find(deck => deck._id === this.props.match.params.id)
        const availableCards = deck ? deck.cards.filter(card => {
            return new Date(card.availableDate) <= Date.now()
        }) : null
        if (availableCards) {console.log(availableCards.length)}
        const card = availableCards ? availableCards[this.state.currentInQueue] : null
        return (
            <div className="review-session__wrapper">
                {/* Special Navbar */}
                {
                    deck && card &&
                    <Card {...card} handleFlip={this.handleFlip} isCardFlipped={this.state.isCardFlipped} />
                }
                {
                    card &&
                    <QualityGetter
                        handleQRes={this.handleQRes}
                        len={availableCards.length}
                        id={card._id}
                    />
                }
            </div>
        );
    }
}

export default connect(state => ({ decks: state.deckData.decks }), { updateCard })(ReviewSession)