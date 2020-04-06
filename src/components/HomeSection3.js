import React from 'react';
import styled from '@emotion/styled';
import bg1 from '../images/home-section3-1.png';
import bg2 from '../images/home-section3-2.png';
import bg3 from '../images/home-section3-3.png';

const Container = styled.div`
  padding: 0px 70px 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
`;

const Item = styled.div`
  position: relative;
  height: 500px;
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px 30px 30px;
`;

const Text = styled.h3`
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;

const HomeSection3 = () => {
  return (
    <Container>
      <Item bg={bg3}>
        <Text>Lorem Ipsum</Text>
        <ion-icon
          style={{
            color: 'white',
            cursor: 'pointer'
          }}
          size="large"
          name="arrow-forward-circle-outline"
        ></ion-icon>
      </Item>
      <Item bg={bg2}>
        <Text>Lorem Ipsum</Text>
        <ion-icon
          style={{
            color: 'white',
            cursor: 'pointer'
          }}
          size="large"
          name="arrow-forward-circle-outline"
        ></ion-icon>
      </Item>
      <Item bg={bg1}>
        <Text>Lorem Ipsum</Text>
        <ion-icon
          style={{
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
