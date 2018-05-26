import React, { Component } from 'react'

import { connect } from 'react-redux'
import { startTimer } from '../../../redux'

class StartBtn extends Component {
    render() {
        return (
            <button onClick={this.props.startTimer}>play/pause</button>
        )
    }
}

export default connect(null, { startTimer })(StartBtn)