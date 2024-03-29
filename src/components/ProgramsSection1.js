import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';
import useFadeIn from '../hooks/useFadeIn';

const Container = styled.div`
  background: white;
  display: grid;
  text-align: center;
  padding: 2rem 15px;
  grid-gap: 20px;
  max-width: 950px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
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
  text-align: justify;

  @media (max-width: 768px) {
    width: auto;
    padding: 0px 25px;
  }

  @media (max-width: 576px) {
    width: auto;
    padding: 0px 15px;
    text-align: center;
  }
`;

const ProgramsSection1 = ({ content }) => {
  return (
    <Container>
      <Title>{content.title}</Title>
      <BlueLine alt="line" src={line} />
      <Content>{content.content}</Content>
    </Container>
  );
};

export default ProgramsSection1;
