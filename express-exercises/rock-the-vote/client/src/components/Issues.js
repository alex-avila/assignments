import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getIssues } from '../redux/issues'

import Issue from './Issue'

class Issues extends Component {
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

export default withRouter(connect(state => ({ issues: state.issues }), { getIssues })(Issues))