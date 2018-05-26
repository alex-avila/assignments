import React from 'react'

import { connect } from 'react-redux'

import Lap from './Lap'

import './Laps.css'

const Laps = ({ laps }) => {
    const mappedLaps = laps.map((lap, i) => <Lap key={i} lap={lap}></Lap>)
    return (
        <div className="laps">
            <h3>Laps</h3>
            { mappedLaps }
        </div>
    );
}

export default connect(state => ({ laps: state.laps }), {})(Laps)