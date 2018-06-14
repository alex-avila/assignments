import React, { Component } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getComments } from '../redux/commentsReducer'
import { getIssue } from '../redux/issueReducer'
import VotingSystem from '../components/VotingSystem';

import './Issue.css'

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
            <div className="issue-view__wrapper--outer">
                <div className="issue-view__wrapper--inner general-content-wrapper">
                    {
                        issue &&
                        <div>
                            <h1>{issue.title}</h1>
                            <p>{issue.updatedAt ? new Date(issue.updatedAt).toLocaleDateString() : new Date(issue.createdAt).toLocaleDateString()}</p>
                            <p>{issue.content}</p>
                            <VotingSystem votes={issue.votes} id={issue._id}/>
                        </div>
                    }
                    {
                        comments &&
                        comments.map(comment => {
                            return (
                                <div key={comment._id}>
                                    <p>{comment.updatedAt ? new Date(comment.updatedAt).toLocaleDateString() : new Date(comment.createdAt).toLocaleDateString()}</p>
                                    <p>{comment.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(connect(state => ({ issues: state.issues, comments: state.comments, issue: state.issue }), { getComments, getIssue })(IssueView))