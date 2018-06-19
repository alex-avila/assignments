import React, { Component } from 'react'

import Decks from './Decks';

class App extends Component {
    render() {
        return (
            <div>
                {/* Navbar */}
                <Decks />
                {/* Footer */}
            </div>
        )
    }
}

export default App
