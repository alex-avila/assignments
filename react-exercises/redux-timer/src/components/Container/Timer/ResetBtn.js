import React from 'react'

import { connect } from 'react-redux'

import { reset } from '../../../redux'

const ResetBtn = ({reset}) => {
    return (
        <button onClick={reset}>reset</button>
    );
}

export default connect(null, { reset })(ResetBtn)