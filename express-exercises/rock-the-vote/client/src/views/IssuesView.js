import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getIssues } from '../redux/issuesReducer'

import Issue from '../components/Issue'

import './Issues.css'

class IssuesView extends Component {
    componentDidMount() {
        this.props.getIssues()
    }

    render() {
        const mappedIssues = this.props.issues
            .sort((a, b) => {
                return b.votes > a.votes
            })
            .map(issue => {
                return <Issue key={issue._id} {...issue} />
            })
        return (
            <div className="general-content-wrapper">
                <div className="issues__wrapper">
                    {mappedIssues}
                </div>
            </div>
        )
    }
}

export default withRouter(connect(state => ({ issues: state.issues }), { getIssues })(IssuesView))