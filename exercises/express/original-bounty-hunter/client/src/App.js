import React, { Component } from 'react' 

import { connect } from 'react-redux'
import { getBounties } from './redux'

class App extends Component {
    componentDidMount = () => {
        this.props.getBounties()
    }

    render = () => {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(null, { getBounties })(App)