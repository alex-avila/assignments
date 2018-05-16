import React from 'react';
// import PropTypes from 'prop-types';

import spring from '../images/spring.jpg';
import summer from '../images/summer.jpg';
import fall from '../images/fall.jpg';
import winter from '../images/winter.jpg';

import styled from 'styled-components';

const PlaceCard = styled.div`
    font-size: 16px;
    font-family: 'Helvetica';
    background: #fff;
    color: #000;
    padding: 0.618em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 3px;
    box-shadow: 0 3px 10px -2.5px #ccc;
`;

const Place = styled.div`
    font-family: 'Avenir';
    font-size: 1.333em;
    font-weight: 500;
    margin-top: 0;
    line-height: calc(1.333em / 1.333);
`;

const DollarSign = styled.span`
    font-size: calc(1em / 1.333);
    letter-spacing: 2px;
`;

const themes = {
    base: {
        backgroundSize: 'cover',
        backgroundPosition: 'top 30% center'
    },
    'Default': {
        background: '#fff',
        color: '#777'
    },
    'Spring': {
        background: 
            `linear-gradient(rgba(85, 239, 196, 0.75),rgba(85, 239, 196, 0.75)),
            url(${spring})`,
    },
    'Summer': {
        background: 
            `linear-gradient(rgba(255, 234, 167,0.75),rgba(255, 234, 167,0.75)),
            url(${summer})`,
    },
    'Fall': {
        background: 
            `linear-gradient(rgba(250, 197, 160,0.75),rgba(250, 197, 160,0.75)),
            url(${fall})`,
    },
    'Winter': {
        background: 
            `linear-gradient(rgba(129, 236, 236,0.75),rgba(129, 236, 236,0.75)),
            url(${winter})`,
    }
};

const Card = (props) => {
    return (
        // This creates a single object from multiple objects to pass to 'style'
        <PlaceCard style={ { ...themes[props.theme], ...themes.base } }>
            <Place>{props.place}</Place>
            <div>
                <DollarSign>
                    {props.price < 500 ? '$' : props.price < 1000 ? '$$' : '$$$'}
                </DollarSign>
                <span>
                    {props.price}
                </span>
            </div>
            <div>{props.timeToGo}</div>
        </PlaceCard>
    )
}

Card.defaultProps = {
    theme: 'Default',
    place: 'Cancun',
    price: 100,
    timeToGo: 'Spring'
}

export default Card;