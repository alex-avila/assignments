import React, { Component } from 'react'

import { connect } from 'react-redux'
import { postComment } from '../redux/commentsReducer'
import { withRouter } from 'react-router-dom'

import './Comment.css'

class NewCommentEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleClick = () => {
        this.props.postComment(this.props.id, this.state.content)
    }

    render() {
        return (
            <div className="comments__editor--new">
                <textarea name="content" value={this.state.content} onChange={this.handleChange} placeholder="Enter your opinion..."></textarea>
                <button onClick={() => this.handleClick()}>POST</button>
            </div>
        )
    }
}

export default withRouter(connect(null, { postComment })(NewCommentEditor))