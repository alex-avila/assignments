import React from 'react';
import PropTypes from 'prop-types';

import './ListItem.css';

const ListItem = (props) => {
    const backgroundStyles = {
        background: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }
    return (
        <div className="list-item">
            <div className="list-item__image" style={backgroundStyles}></div>
            <p className="list-item__name">{props.name}</p>
        </div>
    )
}

ListItem.defaultProps = {
    image: 'http://static.dnaindia.com/sites/default/files/2015/07/27/359539-clip-art-bugs-bunny-397350.jpg',
    name: 'Who?'
}

ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
}

export default ListItem;