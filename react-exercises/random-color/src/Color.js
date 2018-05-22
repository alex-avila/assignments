import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

const Color = (props) => {
    return (
        <div className="color" style={{ background: `#${props.color}` }}>
            <h1>{props.color ? `#${props.color}` : 'OH, NO'}</h1>
        </div>
    )
}

Color.propTypes = {
    color: PropTypes.string
}

export default Color;
