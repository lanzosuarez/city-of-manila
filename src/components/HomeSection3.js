import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useFadeIn from '../hooks/useFadeIn';
import bg1 from '../images/home-section3-1.jpg';
import bg2 from '../images/home-section3-2.jpg';
import bg3 from '../images/home-section3-3.jpg';

import { Link } from 'gatsby';

const Container = styled.div`
  padding: 0px 70px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  position: relative;

  @media (max-width: 576px) {
    padding: 50px 15px 100px;
  }
  /*@media (max-width: 401px) {
    div:nth-child(2) .content {
      max-height: 26px;
    }
  }*/
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
  margin-bottom: 1vw;
  position: relative;
  max-height: 1.8vw;
  overflow: hidden;
  transition: max-height 500ms;
  z-index: 2;

  @media (max-width: 1024px) {
    max-height: 3vw;
    margin-bottom: 1vw;
  }

  @media (max-width: 739px) {
    margin-bottom: 5px;
    max-height: 1rem;
  }

  @media (max-width: 576px) {
    max-height: 1rem;
  }

  @media (max-width: 428px) {
    max-height: 1rem;
  }
  
`;

const Text = styled.h3`
  color: white;
  margin: 0;
  margin-bottom: 20px;
  font-size: 1.4vw;

  @media (max-width: 1024px) {
    font-size: 1.4vw;
  }

  @media (max-width: 739px) {
    font-size: 1.6vw;
  }

  @media (max-width: 576px) {
    font-size: 2vw;
  }
    
  @media (max-width: 428px) {
    font-size: 4vw;
  }
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
  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('home-section3', { delay: '600ms' });
  }, []);
  return (
    <Container data-usefadein="home-section3">
      <Item bg={bg1}>
        <Overlay className="overlay" />
        <Content className="content">
          <Text>COVID-19 Digital Health Survey</Text>
          <Paragraph>
            Take one of the world's first COVID-19 health surveys now and help
            us flatten the curve.
          </Paragraph>
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
          <Text>General Community Quarantine</Text>
          <Paragraph>
            Important information on the General Community Quarantine.
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
      <Item bg={bg3}>
        <Overlay className="overlay" />
        <Content className="content">
          <Text>Manila's Reponse to COVID-19</Text>
          <Paragraph>
            The City of Manila has committed to alleviating the plight of its
            constituents by providing them with the appropriate care and
            assistance during the Enhanced Community Quarantine.
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
