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
  padding: 4rem 15px;
  grid-gap: 20px;
  margin: 0 auto;
  width: 800px;
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
  border-radius: 20px;
  border: none;
  padding: 10px 50px;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: white;
  }
`;

const ProgramsSection2 = ({ content }) => {
  return (
    <MaxContainer>
      <Container>
        <SubTitle>{content.subtitle}</SubTitle>
        <Title>{content.title}</Title>
        <BlueLine alt="line" src={line} />
        <Content>{content.content}</Content>
        {!!content.hasCTA && (
          <Button>
            <a href={content.btnLink}>{content.btnText}</a>
          </Button>
        )}
      </Container>
    </MaxContainer>
  );
};

export default ProgramsSection2;
