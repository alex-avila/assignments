import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getDeck, deleteDeck } from '../../redux/decksReducer'

import { Link, Redirect } from 'react-router-dom'

import TitleBar from './components/TitleBar';
import Button from '../../components/Button'
import Dashboard from '../../components/Dashboard'

import './index.css'

class DeckDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDropdownOn: false,
            deleted: false
        }
    }

    componentDidMount() {
        this.props.getDeck(this.props.match.params.id)
    }

    handleToggleDropdown = e => {
        if (this.state.isDropdownOn && e.target.id !== 'settings__icon') {
            this.setState(prevState => ({
                isDropdownOn: false
            }))
        } else if (e.target.id === 'settings__icon') {
            this.setState(prevState => ({
                isDropdownOn: !prevState.isDropdownOn
            }))
        }
    }

    handleDelete = () => {
        this.setState({ deleted: true })
        this.props.deleteDeck(this.props.match.params.id)
    }

    importantFunk = (deck) => {
        const { cards } = deck
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
        console.log(deck.inQueue.reviews)
        if (new Date(deck.today).getDate() !== new Date(Date.now()).getDate()) {
            this.props.getCardsPerDeck(deck._id, availableCards)
        }
    }

    render() {
        if (this.state.deleted) {
            return <Redirect to="/" />
        }
        const { deck } = this.props
        return (
            <div className="deck-details utility-wrapper" onClick={this.handleToggleDropdown}>
                {
                    !!Object.keys(deck).length &&
                    <div className="deck-details__wrapper">
                        <TitleBar deckName={deck.name} isDropdownOn={this.state.isDropdownOn} handleDelete={this.handleDelete}/>
                        <p>{deck.description}</p>
                        <p>{deck.cards.length} cards in total.</p>
                        <Dashboard {...deck} />
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

export default connect(state => ({ deck: state.deckData.deck }), { getDeck, deleteDeck })(DeckDetails)