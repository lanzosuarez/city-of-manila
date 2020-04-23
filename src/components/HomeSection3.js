import React from 'react';
import styled from '@emotion/styled';
import bg1 from '../images/home-section3-1.png';
import bg2 from '../images/home-section3-2.jpg';
import bg3 from '../images/home-section3-3.png';

import { Link } from 'gatsby';

const Container = styled.div`
  padding: 0px 70px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  position: relative;

  @media (max-width: 576px) {
    padding: 50px 15px 100px;
  }
`;

const Item = styled.div`
  background-position: center;
  position: relative;
  height: 500px;
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px 30px 30px;
  transition: filter 500ms;

  &:hover {
    div.overlay {
      opacity: 1;
    }
    div.content {
      max-height: 100%;
    }
  }
`;

const Content = styled.div`
  color: white;
  margin-bottom: 20px;
  position: relative;
  max-height: 27px;
  overflow: hidden;
  transition: max-height 500ms;
  z-index: 2;
`;

const Text = styled.h3`
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  margin: 0;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 700ms;
  z-index: 1;
`;

const HomeSection3 = () => {
  return (
    <Container>
      <Item bg={bg3}>
        <Overlay className="overlay" />
        <Content className="content">
          <Text>Covid-19 Digital Health Survey</Text>
          <Paragraph>Take one of the world's first Covid-19 health surveys now and help us flatten the curve.</Paragraph>
        </Content>
        <Link to="/covid#digital-survey">
        <ion-icon
          style={{
            position: 'relative',
            zIndex: 2,
            color: 'white',
            cursor: 'pointer'
          }}
          size="large"
          name="arrow-forward-circle-outline"
        ></ion-icon>
        </Link>
      </Item>
      <Item bg={bg2}>
        <Overlay className="overlay" />
        <Content className="content">
          <Text>Enhanced Community Quarantine</Text>
          <Paragraph>
            Important information on the Enhanced Community Quarantine.
          </Paragraph>
        </Content>
        <Link to="/covid#ecq">
        <ion-icon
          style={{
            position: 'relative',
            zIndex: 2,
            color: 'white',
            cursor: 'pointer'
          }}
          size="large"
          name="arrow-forward-circle-outline"
        ></ion-icon>
        </Link>
      </Item>
      <Item bg={bg1}>
        <Overlay className="overlay" />
        <Content className="content">
          <Text>Manila's Reponse to COVID-19</Text>
          <Paragraph>
            We understand the difficulties our constituents are facing during
            this public health emergency. The City of Manila has committed to
            alleviating this hardship by providing them with the appropriate
            care and assistance during the Enhanced Community Quarantine.
          </Paragraph>
        </Content>
        <Link to="/covid#manila's-response">
        <ion-icon
          style={{
            position: 'relative',
            zIndex: 2,
            color: 'white',
            cursor: 'pointer'
          }}
          size="large"
          name="arrow-forward-circle-outline"
        ></ion-icon>
        </Link>
      </Item>
    </Container>
  );
};

export default HomeSection3;
