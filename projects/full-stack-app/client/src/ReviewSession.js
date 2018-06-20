import React, { Component } from 'react'

import { connect } from 'react-redux'
import { updateCard } from './redux/decksReducer'

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
           currentInQueue: 0
        }
    }

    handleQRes = (len, cardId, quality) => {
        const { deckId } = this.props.location.state
        this.props.updateCard(deckId, cardId, quality)
        if (this.state.currentInQueue + 1 <= len - 1) {
            this.setState(prevState => ({currentInQueue: prevState.currentInQueue + 1}))
        } else {
            this.setState({currentInQueue: 0})
        }
    }


    render() {
        const deck = this.props.decks.find(deck => deck._id === this.props.match.params.id)
        const availableCards = deck ? deck.cards.filter(card => {
            return new Date(card.availableDate) <= Date.now()
        }) : null
        if (availableCards) {console.log(availableCards.length, this.state.currentInQueue)}
        const card = availableCards ? availableCards[this.state.currentInQueue] : null
        return (
            <div>
                {/* Special Navbar */}
                <h1>学习</h1>
                {
                    deck && card &&
                    <div>
                        <p>{card.question}</p>
                    </div>
                }
                {
                    card &&
                    <div>
                        <button onClick={() => this.handleQRes(availableCards.length, card._id, 1)}>1</button>
                        <button onClick={() => this.handleQRes(availableCards.length, card._id, 2)}>2</button>
                        <button onClick={() => this.handleQRes(availableCards.length, card._id, 3)}>3</button>
                        <button onClick={() => this.handleQRes(availableCards.length, card._id, 4)}>4</button>
                        <button onClick={() => this.handleQRes(availableCards.length, card._id, 5)}>5</button>
                    </div>
                }
            </div>
        );
    }
}

export default connect(state => ({ decks: state.deckData.decks }), { updateCard })(ReviewSession)