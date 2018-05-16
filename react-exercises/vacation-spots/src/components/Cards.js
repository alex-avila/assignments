import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card'

import styled from 'styled-components';

const CardsContainer = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
    max-width: 800px;
    margin: auto;
    line-height: 2;
    padding: 1em 1em;
`;

const Cards = (props) => {
    const mappedSpots = props.vacationSpots.map((spot, i) => {
        return (
            <Card
                key={spot.place + ' ' + i}
                theme={spot.timeToGo}
                place={spot.place}
                price={spot.price}
                timeToGo={spot.timeToGo}
            />
        )
    })
    return (
        <CardsContainer>
            { mappedSpots }
        </CardsContainer>
    )
}

Cards.propTypes = {
    theme: PropTypes.string,
    place: PropTypes.string,
    price: PropTypes.number,
    timeToGo: PropTypes.string,
}

export default Cards;