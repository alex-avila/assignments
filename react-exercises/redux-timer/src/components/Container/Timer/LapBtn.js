import React from 'react'

import { connect } from 'react-redux'

import { addLap } from '../../../redux'

const ResetBtn = ({addLap}) => {
    return (
        <button onClick={addLap}>add lap</button>
    );
}

export default connect(null, { addLap })(ResetBtn)