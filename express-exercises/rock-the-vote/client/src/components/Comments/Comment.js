import React, { Component } from 'react'

import { connect } from 'react-redux'
import { deleteComment } from '../../redux/commentsReducer'

import { withRouter } from 'react-router-dom'

import './Comment.css'

class Comment extends Component {

    handleClick = (issue, id) => {
        this.props.deleteComment(issue, id)
    }

    render() {
        const { content, _id: id, issue } = this.props
        return (
            <div id={id} className="comment">
                <p>{content}</p>
                <button onClick={() => this.handleClick(issue, id)}>x</button>
            </div>
        )
    }
}

export default withRouter(connect(null, { deleteComment })(Comment))