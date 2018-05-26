import React from 'react'

import { connect } from 'react-redux'

const Laps = ({ laps }) => {
    const mappedLaps = laps.map((lap, i) => <li key={i}>{lap}</li>)
    return (
        <ul>
            {mappedLaps}
        </ul>
    );
}

export default connect(state => ({ laps: state.laps }), {})(Laps)