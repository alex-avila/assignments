import React, { Component } from 'react'

import { connect } from 'react-redux'
import { updateCard, getDeck } from '../../redux/decksReducer'

import QualityGetter from './components/QualityGetter';
import Card from './components/Card';

import './index.css'

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
            currentIndex: 0,
            isCardFlipped: false,
            lastAvailableLen: 0
        }
    }

    componentDidMount() {
        if (!Object.keys(this.props.deck).length) {
            this.props.getDeck(this.props.location.state.deckId)
        } else {
            this.setState({ lastAvailableLen: this.props.deck.inQueue.len })
        }
    }

    handleQRes = (len, cardId, quality) => {
        const { deckId } = this.props.location.state
        this.props.updateCard(deckId, cardId, quality)
        // if quality is more than 4, availableCards decreases in length so
            // keep currentIndex the same
            // otherwise if currentIndex plus 1 is less than or equal to
                // len minus 1
                // add 1 to currentIndex
        if (quality > 3) {
            this.setState(prevState => ({ lastAvailableLen: prevState.lastAvailableLen - 1 }))
            if (this.state.currentIndex + 1 >= len - 1) {
                this.setState({ currentIndex: 0 })
            }
            this.setState({isCardFlipped: false})
        } else {
            if (this.state.currentIndex + 1 <= len - 1) {
                this.setState(prevState => ({
                    currentIndex: prevState.currentIndex + 1,
                    isCardFlipped: false
                }))
            } else {
                this.setState({ currentIndex: 0, isCardFlipped: false })
            }
        }
    }

    handleFlip = () => {
        this.setState(prevState => ({ isCardFlipped: !prevState.isCardFlipped }))
    }

    render() {
        const deck = this.props.deck
        let availableCards
        if (Object.keys(deck).length) {
            if (deck.inQueue.cards) {
                availableCards = deck.inQueue.cards
            }
        }
        const card = availableCards ? availableCards[this.state.currentIndex] : null
        console.log(`Cards in queue: ${Object.keys(deck).length ? deck.inQueue.len : null}`)
        console.log(`Current index: ${this.state.currentIndex}`)
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
                {
                    !card &&
                    <div className="utility-wrapper">
                        <h1>Finished review.</h1>
                    </div>
                }
            </div>
        );
    }
}

export default connect(state => ({ deck: state.deckData.deck }), { updateCard, getDeck })(ReviewSession)