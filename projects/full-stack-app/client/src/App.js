import React, { Component } from 'react'

import { Switch, Route, withRouter } from 'react-router-dom'

import Navbar from './components/Navbar';
import Decks from './scenes/Home';
import DeckDetails from './scenes/DeckDetails';
import ReviewSession from './scenes/ReviewSession';
import AddDeckModal from './components/AddDeckModal';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOn: false,
            isHome: true
        }
    }

    // Component DidMount and WillReceiveProps will work with 
    // withRouter props to check if we are home currently
    componentDidMount() {
        const { pathname } = this.props.location
        if (pathname !== '/') {
            this.setState({ isHome: false })
        } else {
            this.setState({ isHome: true })
        }
    }

    componentWillReceiveProps(nextProps) {
        const { pathname } = this.props.location
        const { pathname: newPathname } = nextProps.location
        if (pathname !== newPathname) {
            if (newPathname !== '/') {
                this.setState({ isHome: false })
            } else {
                this.setState({ isHome: true })
            }
        }
    }

    handleShowModal = () => {
        this.setState({ isModalOn: true })
    }

    handleHideModal = e => {
        if (!e) {
            // I have this first check to make modal hide when the
            // ADD btn is clicked on the the AddDeckModal component
            this.setState({ isModalOn: false })
        } else if (e.target.id === 'background') {
            this.setState({ isModalOn: false })
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Navbar handleShowModal={this.handleShowModal} />
                <AddDeckModal
                    isModalOn={this.state.isModalOn}
                    handleHideModal={this.handleHideModal}
                    newDeck={this.state.isHome}
                    deckId={this.props.location.pathname}
                />
                <Switch>
                    <Route exact path="/" component={Decks} />
                    <Route exact path="/:id" component={DeckDetails} />
                    <Route exact path="/:id/review-session" component={ReviewSession} />
                </Switch>
                {/* Footer */}
            </div>
        )
    }
}

export default withRouter(App)
