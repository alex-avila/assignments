import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getComments } from '../redux/commentsReducer'
import { getIssue } from '../redux/issueReducer'

class IssueView extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.match.params.id
    }

    componentDidMount() {
        // if there are issues present go get comments
        // else go get a single issue, which comes with its comments
        if (!this.props.issues.length) {
            this.props.getIssue(this.props.match.params.id)
        } else {
            this.props.getComments(this.props.match.params.id)
        }
    }

    render() {
        let issue
        let comments
        if (this.props.issues.find(issue => issue._id === this.id)) {
            issue = this.props.issues.find(issue => issue._id === this.id)
            comments = this.props.comments
        } else {
            issue = this.props.issue.foundIssue
            comments = this.props.issue.comments
        }
        return (
            <div>
                {
                    issue &&
                    <div>
                        <h1>{issue.title}</h1>
                        <p>{issue.updatedAt ? issue.updatedAt : issue.createdAt}</p>
                        <p>{issue.content}</p>
                        <p>Upvotes: {issue.votes}</p>
                        <p>Comments: {issue.commentsCount}</p>
                    </div>
                }
                {
                    comments &&
                    comments.map(comment => {
                        return (
                            <div key={comment._id}>
                                <p>{comment.updatedAt ? comment.updatedAt : comment.createdAt}</p>
                                <p>{comment.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(state => ({ issues: state.issues, comments: state.comments, issue: state.issue }), { getComments, getIssue })(IssueView)