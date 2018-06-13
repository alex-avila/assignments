import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getIssues } from '../redux/issuesReducer'

import Issue from '../components/Issue'

class IssuesView extends Component {
    componentDidMount() {
        this.props.getIssues()
    }

    render() {
        const mappedIssues = this.props.issues.map((issue, i) => {
            return <Issue key={issue._id} {...issue} />
        })
        return (
            <div>
                {mappedIssues}
            </div>
        )
    }
}

export default connect(state => ({ issues: state.issues }), { getIssues })(IssuesView)