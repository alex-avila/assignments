import React from 'react'

import Display from './Display'
import StartBtn from './StartBtn'

import ResetBtn from './ResetBtn';
import LapBtn from './LapBtn';

const Timer = () => {
    return (
        <div>
            <ResetBtn />
            <LapBtn />
            <Display />
            <StartBtn />
        </div>
    )
}

export default Timer