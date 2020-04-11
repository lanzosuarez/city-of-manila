import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';

const MaxContainer = styled.div`
  background: #f7f7f7;
`;

const Container = styled.div`
  max-width: 1170px;
  display: grid;
  text-align: center;
  grid-gap: 20px;
  padding: 50px 0px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: var(--blue);
  line-height: 1.5;
  margin: 0;

  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;

const SubTitle = styled.h4`
  color: var(--blue);
  line-height: 1.5;
  margin: 0;
  font-family: 'Nunito';
  text-transform: uppercase;

  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;

const BlueLine = styled.img`
  width: 70px;
  margin: 0 auto;
`;

const Content = styled.p`
  width: 700px;
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

const Button = styled.button`
  margin: 0 auto;
  background: var(--blue);
  color: white;
  border-radius: 20px;
  border: none;
  padding: 10px 50px;
  font-size: 0.8rem;
`;

const ProgramsSection2 = () => {
  return (
    <MaxContainer>
      <Container>
        <SubTitle>Lorem Ipsum Dolor</SubTitle>
        <Title>Excepteur sint occaecat cupidatat non proident</Title>
        <BlueLine alt="line" src={line} />
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Content>
        <Button>LEARN MORE</Button>
      </Container>
    </MaxContainer>
  );
};

export default ProgramsSection2;
