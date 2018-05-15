import React from 'react';

import './ColoredBox.css';

const ColoredBox = (props) => {
    return (
        <div className='colored-box' style={props.background}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.information}</p>
        </div>
    );
}

export default ColoredBox;