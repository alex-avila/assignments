import React from 'react';
import styled from 'styled-components';

const PetCard = styled.li`
    list-style: none;
    box-shadow: inset 0 0 5px -2.5px #333;
    padding: 0.618em 1em;
    border-radius: 9px;
`;

const Pet = (props) => {
    return (
        <PetCard>
            <li>Name: {props.pet.name}</li>
            <li>Breed: {props.pet.breed}</li>
        </PetCard>
    );
};



export default Pet;