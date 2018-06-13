import React, { Component } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateIssue } from '../redux/issuesReducer'

class VotingSystem extends Component {
    handleClick = (e, id, increment) => {
        e.preventDefault()
        const val = increment ? 1 : -1
        this.props.updateIssue(id, { $inc: { votes: val } })
    }

    render() {
        return (
            <div>
                <button onClick={e => this.handleClick(e, this.props.id, true)}>↑</button>
                <span>{this.props.votes}</span>
                <button onClick={e => this.handleClick(e, this.props.id, false)}>↓</button>
            </div>
        )
    }
}

export default withRouter(connect(null, { updateIssue })(VotingSystem))