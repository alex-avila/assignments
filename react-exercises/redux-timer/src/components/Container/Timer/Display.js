import React from 'react'

import { connect } from 'react-redux'

const Display = (props) => {
    return (
        <h3>{props.time}</h3>
    )
}

export default connect(state => ({time: state.time}), {})(Display)