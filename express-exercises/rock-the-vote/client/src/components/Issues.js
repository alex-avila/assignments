import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getIssues } from '../redux/issues'

import Issue from './Issue'

class Issues extends Component {
    componentDidMount() {
        this.props.getIssues()
    }

    render() {
        const mappedIssues = this.props.issues.map((issue, i) => {
            return (
                <Issue
                    key={issue._id}
                    id={issue._id}
                    title={issue.title}
                    content={issue.content}
                    votes={issue.votes}
                    // commentsCount={issue.comments.length}
                />
            )
        })
        return (
            <div>
                {mappedIssues}
            </div>
        )
    }
}

export default connect(state => ({ issues: state.issues }), { getIssues })(Issues)