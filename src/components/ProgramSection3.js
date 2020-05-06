import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';

const Container = styled.div`
  background: white;
  display: grid;
  text-align: center;
  grid-gap: 20px;
  margin: 0 auto;
  padding: 4rem 15px;
  padding-bottom: 50px;
  max-width: ${props => (props.noImage ? '950px' : '100%')};
`;

const Content = styled.p`
  text-align: justify;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: ${props => (props.noImage ? '1fr' : '350px 1fr')};
  align-items: center;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 40px;
  }
`;

const Avatar = styled.img`
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: grid;
  text-align: center;
  grid-gap: 20px;
  grid-template-rows: auto auto auto 1fr;

  @media (max-width: 576px) {
    grid-row: 2;
  }
`;

const TextTitle = styled.h2`
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

const TextContent = styled.p`
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

const ProgramsSection3 = ({ content: { content } }) => {
  return (
    <Container noImage={!content.imageUrl}>
      <Content noImage={!content.imageUrl}>
        {content.imageUrl && (
          <Avatar alt="card-image" src={content.imageUrl}></Avatar>
        )}
        <TextContainer>
          <SubTitle>{content.subtitle}</SubTitle>
          <TextTitle>{content.title}</TextTitle>
          <BlueLine alt="line" src={line} />
          <TextContent>{content.content}</TextContent>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default ProgramsSection3;
