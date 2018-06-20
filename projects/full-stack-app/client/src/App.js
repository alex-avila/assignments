import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import Decks from './Decks';
import DeckDetails from './DeckDetails';
import ReviewSession from './ReviewSession';
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Decks}/>
                    <Route exact path="/:id" component={DeckDetails}/>
                    <Route exact path="/:id/review-session" component={ReviewSession}/>
                </Switch>
                {/* Footer */}
            </div>
        )
    }
}

export default App
