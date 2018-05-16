import React from 'react';
import Friend from './Friend'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(333px, 1fr));
    line-height: 2;
    font-family: 'Avenir';
    max-width: 1000px;
    margin: auto;
`;

const FriendList = (props) => {
    const mappedFriends = props.friends.map((friend, i) => {
        return (
            <Friend key={friend.name + String(i)} friend={friend} />
        )
    });
    return (
        <Wrapper>
            { mappedFriends }
        </Wrapper>
    )
};

export default FriendList;