import React from 'react';

import './ListItem.css';

const ListItem = ({ name, image }) => {
    const backgroundStyles = {
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }
    return (
        <div className="list-item">
            <div className="list-item__image" style={backgroundStyles}></div>
            <p className="list-item__name">{name}</p>
        </div>
    )
}

export default ListItem;