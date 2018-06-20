import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Decks from './scenes/Home';
import DeckDetails from './scenes/DeckDetails';
import ReviewSession from './scenes/ReviewSession';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
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
