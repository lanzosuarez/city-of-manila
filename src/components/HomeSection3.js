import React from 'react';
import styled from '@emotion/styled';
import bg1 from '../images/home-section3-1.png';
import bg2 from '../images/home-section3-2.png';
import bg3 from '../images/home-section3-3.png';

const Container = styled.div`
  padding: 0px 70px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  position: relative;

  @media (max-width: 576px) {
    padding: 50px 30px 100px;
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
      max-height: 150px;
    }
  }
`;

const Content = styled.div`
  color: white;
  margin-bottom: 20px;
  position: relative;
  max-height: 25px;
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
  height: 90px;
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
          <Text>Lorem Ipsum</Text>
          <Paragraph>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Content>
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
      </Item>
      <Item bg={bg2}>
        <Overlay className="overlay" />
        <Content className="content">
          <Text>Lorem Ipsum</Text>
          <Paragraph>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Content>
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
      </Item>
      <Item bg={bg1}>
        <Overlay className="overlay" />
        <Content className="content">
          <Text>Lorem Ipsum</Text>
          <Paragraph>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Content>
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
      </Item>
    </Container>
  );
};

export default HomeSection3;
