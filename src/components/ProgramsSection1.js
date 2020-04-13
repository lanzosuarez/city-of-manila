import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';

const Container = styled.div`
  background: white;
  display: grid;
  text-align: center;
  grid-gap: 20px;
  padding: 50px 0px 0px;
`;

const Title = styled.h2`
  color: var(--blue);
  line-height: 1.5;
  margin: 0;

  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;

const BlueLine = styled.img`
  width: 70px;
  margin: 0 auto;
`;

const Content = styled.p`
  width: 800px;
  margin: 0 auto;
  text-align: justify;

  @media (max-width: 768px) {
    width: auto;
    padding: 0px 25px;
  }

  @media (max-width: 576px) {
    width: auto;
    padding: 0px 15px;
  }
`;

const ProgramsSection1 = () => {
  return (
    <Container>
      <Title>Excepteur sint occaecat cupidatat non proident</Title>
      <BlueLine alt="line" src={line} />
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Content>
    </Container>
  );
};

export default ProgramsSection1;
