import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getDeck, deleteDeck } from '../../redux/decksReducer'

import { Link, Redirect } from 'react-router-dom'

import Button from '../../components/Button'
import Dashboard from '../../components/Dashboard'
import settingsIcon from '../../icons/settings.svg'

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
            console.log('hey')
            this.setState(prevState => ({
                isDropdownOn: !prevState.isDropdownOn
            }), () => console.log(this.state.isDropdownOn))
        }
    }

    handleDelete = () => {
        this.setState({ deleted: true })
        this.props.deleteDeck(this.props.match.params.id)
    }

    render() {
        if (this.state.deleted) {
            return <Redirect to="/" />
        }
        const deck = this.props.deck
        return (
            <div className="deck-details utility-wrapper" onClick={this.handleToggleDropdown}>
                {
                    !!Object.keys(deck).length &&
                    <div className="deck-details__wrapper">
                        <div className="name-wrapper">
                            <div className="name-wrapper--inner">
                                <h2>{deck.name}</h2>
                                <div className="deck__settings">
                                    <div
                                        className={
                                            this.state.isDropdownOn ?
                                                'settings__dropdown dropdown-show' :
                                                'settings__dropdown'
                                        }
                                    >
                                        <span onClick={this.handleDelete}>Delete</span>
                                    </div>
                                    <img
                                        className="settings__icon"
                                        id="settings__icon"
                                        src={settingsIcon}
                                        alt="Settings icon"
                                    />
                                    
                                </div>
                            </div>
                        </div>
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