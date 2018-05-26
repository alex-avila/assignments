import React from 'react'

import './Button.css'

const Button = (props) => {
    const { handleClick, icon, important } = props
    return (
        <i className="timer__icons material-icons" style={important ? {fontSize: '3.5em'} : null} onClick={handleClick}>{icon}</i>
    );
}

export default Button
