import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import Decks from './scenes/Home/index';
import DeckDetails from './scenes/DeckDetails/index';
import ReviewSession from './scenes/ReviewSession/index';
import Navbar from './components/Navbar';

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
