import React from 'react'

import { connect } from 'react-redux'
import { reset, addLap, playPause } from '../../../redux'

import Display from './Display'
import Button from './Button'

import './Timer.css'

const Timer = (props) => {
    const { reset, addLap, playPause, play, time } = props
    return (
        <div className="timer">
            <div className="timer__top-icons">
                <Button handleClick={reset} icon="refresh" />
                <Button handleClick={addLap} icon="add" />
            </div>
            <Display time={time}/>
            <Button important handleClick={playPause} icon={play ? "pause_circle_outline" : "play_circle_outline"} />
        </div>
    )
}

export default connect(state => ({play: state.play, time: state.time}), { reset, addLap, playPause })(Timer)
