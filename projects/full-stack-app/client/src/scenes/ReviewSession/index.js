import React, { Component } from 'react'

import { connect } from 'react-redux'
import { updateCard, getDeck } from '../../redux/decksReducer'

import { Redirect } from 'react-router-dom'

import QualityGetter from './components/QualityGetter';
import Card from './components/Card';

import './index.css'
import ProgressBar from '../../components/ProgressBar';

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
            wasAnswerRevealed: false,
            lastAvailableLen: 0,
            initialCardsNum: 0,       // This will be used to get percentage
            currentCardsNum: 0        // This will be used to get percentage
        }
    }

    componentDidMount() {
        // If user's first page is this page then go get deck
        // it does not really work right now if I want to also set state
        // but in the future I will either make this work somehow
        // or redirect them to the home page or the deckdetails page
        if (!Object.keys(this.props.deck).length) {
            return
        } else {
            this.setState({
                lastAvailableLen: this.props.deck.inQueue.len,
                initialCardsNum: this.props.deck.inQueue.len,
            })
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
            this.setState(prevState => ({
                lastAvailableLen: prevState.lastAvailableLen - 1,
                currentCardsNum: prevState.currentCardsNum + 1,
            }))
            if (this.state.currentIndex + 1 >= len - 1) {
                this.setState({ currentIndex: 0 })
            }
            this.setState({ isCardFlipped: false, wasAnswerRevealed: false })
        } else {
            if (this.state.currentIndex + 1 <= len - 1) {
                this.setState(prevState => ({
                    currentIndex: prevState.currentIndex + 1,
                    isCardFlipped: false,
                    wasAnswerRevealed: false
                }))
            } else {
                this.setState({ currentIndex: 0, isCardFlipped: false, wasAnswerRevealed: false })
            }
        }
    }

    handleFlip = () => {
        this.setState(prevState => ({ isCardFlipped: !prevState.isCardFlipped, wasAnswerRevealed: true }))
    }

    render() {
        if (!Object.keys(this.props.deck).length) {
            return <Redirect exact to={`/${this.props.location.state.deckId}`} />
        }
        const deck = this.props.deck
        const { 
            initialCardsNum, 
            currentCardsNum, 
            isCardFlipped, 
            wasAnswerRevealed 
        } = this.state
        let availableCards
        if (Object.keys(deck).length) {
            if (deck.inQueue.cards) {
                availableCards = deck.inQueue.cards
            }
        }
        const card = availableCards ? availableCards[this.state.currentIndex] : null
        return (
            <div className="review-session__wrapper">
                {
                    deck && card &&
                    <Card {...card} handleFlip={this.handleFlip} isCardFlipped={isCardFlipped} />
                }
                {
                    card &&
                    <div className="review__status-and-controls">
                        <ProgressBar
                            className="progresss"
                            percentage={ (currentCardsNum / initialCardsNum) * 100 }
                        />
                        <QualityGetter
                            handleQRes={this.handleQRes}
                            len={availableCards.length}
                            id={card._id}
                            wasAnswerRevealed={wasAnswerRevealed}
                            handleFlip={this.handleFlip}
                        />
                    </div>
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