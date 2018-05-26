import React from 'react'

import Timer from './Timer/Timer'
import Laps from './Timer/Laps'

import './Container.css'

const Container = () => {
    return (
        <div className="timer-container">
            <Timer />
            <Laps />
        </div>
    )
}

export default Container
