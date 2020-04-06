import React from 'react';
import styled from '@emotion/styled';

import bg from '../images/home-section-4-bg.png';

const Container = styled.div`
  height: 100px;
  background-image: url(${bg});
  margin: 0px 70px 0px 70px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0px 100px;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 70px;
    height: 50%;
    bottom: 0;
    left: 0;
    background: white;
    margin-left: -70px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 70px;
    height: 50%;
    bottom: 0;
    right: 0;
    background: white;
    margin-right: -70px;
  }
`;

const Items = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  color: white;
  padding: 0px 20px;
`;

const Figure = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  letter-spacing: 5px;
`;

const Desc = styled.h5`
  margin: 0;
  display: flex;
  align-items: center;
`;

const HomeSection4 = () => {
  return (
    <Container>
      <Items>
        <Figure>99</Figure>
        <Desc>YEARS OR FOUNDATION</Desc>
      </Items>
      <Items>
        <Figure>5K</Figure>
        <Desc>KEY ACHIEVEMENTS</Desc>
      </Items>
      <Items>
        <Figure>1K</Figure>
        <Desc>SUCCESFUL PROGRAMS</Desc>
      </Items>
      <Items>
        <Figure>1.8 M</Figure>
        <Desc>PEOPLE IN THE CITY</Desc>
      </Items>
    </Container>
  );
};

export default HomeSection4;
