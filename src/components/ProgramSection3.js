import React from 'react';
import styled from '@emotion/styled';

import placeholder from '../images/team-placeholder.png';

const Container = styled.div`
  background: white;
  display: grid;
  text-align: center;
  grid-gap: 20px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const Title = styled.h2`
  color: var(--blue);
  line-height: 1.5;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;

const Content = styled.p`
  width: 800px;
  margin: 0 auto;
  text-align: justify;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 25px;
  }

  @media (max-width: 576px) {
    width: 100;
    padding: 0px 15px;
  }
`;

const Card = styled.div`
  transition: box-shadow 300ms;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 200px;
`;

const TextContent = styled.p`
  padding: 20px 20px 20px;
  font-size: 0.8rem;
  margin: 0;
`;

const ContentTitle = styled.h4`
  color: var(--blue);
  line-height: 1.5;
  margin-bottom: 10px !important;
`;

const Button = styled.div`
  background: #c72728;
  color: white;
  padding: 10px 0px;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProgramsSection3 = () => {
  return (
    <Container>
      <Title>Excepteur sint occaecat cupidatat non proident</Title>
      <Content>
        <Card>
          <Avatar alt="card-image" src={placeholder}></Avatar>
          <TextContent>
            <ContentTitle>Lorem ipsum dolor sit amet</ContentTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim Ut enim ad minim
          </TextContent>
          <Button>
            LEARN MORE
            <ion-icon
              style={{ marginLeft: 10 }}
              name="arrow-forward"
            ></ion-icon>
          </Button>
        </Card>
        <Card>
          <Avatar alt="card-image" src={placeholder}></Avatar>
          <TextContent>
            <ContentTitle>Lorem ipsum dolor sit amet</ContentTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim Ut enim ad minim
          </TextContent>
          <Button>
            LEARN MORE
            <ion-icon
              style={{ marginLeft: 10 }}
              name="arrow-forward"
            ></ion-icon>
          </Button>
        </Card>
        <Card>
          <Avatar alt="card-image" src={placeholder}></Avatar>
          <TextContent>
            <ContentTitle>Lorem ipsum dolor sit amet</ContentTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim Ut enim ad minim
          </TextContent>
          <Button>
            LEARN MORE
            <ion-icon
              style={{ marginLeft: 10 }}
              name="arrow-forward"
            ></ion-icon>
          </Button>
        </Card>
      </Content>
    </Container>
  );
};

export default ProgramsSection3;
