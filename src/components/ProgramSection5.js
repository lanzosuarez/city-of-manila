import React from 'react';
import styled from '@emotion/styled';
import FbVideo from './FbVideo';

const Container = styled.div`
  background: white;
  display: grid;
  text-align: center;
  grid-gap: 20px;
`;

const Title = styled.h2`
  color: var(--blue);
  line-height: 1.5;
  margin: 0;

  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;

const Content = styled.div`
  width: 700px;
  margin: 0 auto;
  text-align: justify;

  iframe {
    height: 500px;
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 0px 25px;
  }

  @media (max-width: 576px) {
    width: auto;
    padding: 0px 15px;
  }
`;

const ProgramsSection5 = () => {
  return (
    <Container>
      <Title>Excepteur sint occaecat cupidatat non proident</Title>
      <Content>
        <FbVideo />
      </Content>
    </Container>
  );
};

export default ProgramsSection5;
