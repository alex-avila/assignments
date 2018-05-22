import React, { Component } from 'react';
import Box from './Box';
import styled from 'styled-components';

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const App = () => {
  return (
    <BoxContainer>
      <Box />
    </BoxContainer>
  );
};

export default App;
