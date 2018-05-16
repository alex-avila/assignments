import React from 'react';
import Pet from './Pet';
import styled from 'styled-components';

const Card = styled.ul`
    font-size: 16px;
    color: #333;
    background: #fafafa;
    padding: 0.618em 1em 1.618em;
    list-style: none;
    border-radius: 9px;
    box-shadow: 0 5px 15px -5px #aaa;
    margin: 0;
`;

const CardPerson = styled.li`
    font-weight: bold;
    font-size: 1.333em;
    display: flex;
    align-items: center;
`;

const Age = styled.span`
    font-weight: normal;
`;

const Separator = styled.span`
    height: 5px;
    width: 5px;
    background: pink;
    display: block;
    margin: 0 0.5em;
`;

const PetContainer = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
`;

const Title = styled.li`
    font-weight: bold;
`;

const Friend = (props) => {

    const mappedPets = props.friend.pets.map((pet, i) => {
        return (
            <Pet key={pet.name + String(i)} pet={pet}/>
        )
    })
    return (
        <Card>
            <CardPerson>{props.friend.name}<Separator/><Age>{props.friend.age}</Age></CardPerson>
            <li># of Pets: {props.friend.pets.length}</li>
            <Title>Pets</Title>
            <PetContainer>
                { mappedPets }
            </PetContainer>
        </Card>
    );
};

export default Friend;