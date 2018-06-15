import React, { Component } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateIssue } from '../../redux/issuesReducer'

import upvote from '../../icons/arrow_up.svg'
import downvote from '../../icons/arrow_down.svg'

import './VotingSystem.css'

class VotingSystem extends Component {
    handleClick = (e, id, increment) => {
        e.preventDefault()
        const val = increment ? 1 : -1
        this.props.updateIssue(id, { $inc: { votes: val } })
    }

    render() {
        return (
            <div className="voting-system__wrapper">
                <button className="vote-btn upvote" onClick={e => this.handleClick(e, this.props.id, true)}>
                    <img src={upvote} alt="Upvote icon."/>
                </button>
                <span>{this.props.votes}</span>
                <button className="vote-btn downvote" onClick={e => this.handleClick(e, this.props.id, false)}>
                    <img src={downvote} alt="Downvote icon."/>
                </button>
            </div>
        )
    }
}

export default withRouter(connect(null, { updateIssue })(VotingSystem))