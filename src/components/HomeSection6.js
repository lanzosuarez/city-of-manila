import React from 'react';
import styled from '@emotion/styled';

import bg from '../images/home-section6-bg.png';
import av from '../images/lotty.png';

const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  background-image: url(${bg});
  background-size: contain;
  margin: 0px 70px 80px;
  padding: 40px;

  @media (max-width: 576px) {
    margin: 0px 30px 80px;
    padding: 30px;
  }
`;

const CarouselContainer = styled.div`
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  display: grid;
  grid-gap: 30px;
  overflow: scroll;
  grid-template-columns: repeat(4, calc(100% / 3 - 20px));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(300px, 1fr));
  }
`;

const Dots = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 20px;
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

const Dot = styled.div`
  background: white;
  height: 4px;
  width: 4px;
  border-radius: 50%;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-gap: 20px;
`;

const ItemHeader = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-gap: 20px;
`;

const ItemAvatar = styled.div`
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.img})`};
`;

const ItemNameContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const Title = styled.h3`
  margin: 0;
  display: flex;
  align-items: flex-end;
`;

const SubTitle = styled.h5`
  margin: 0;
  display: flex;
  align-items: flex-start;
  font-weight: 300;
`;

const Content = styled.div`
  font-size: 0.8rem;
`;

const Item = ({ img, title, sub, content }) => {
  return (
    <ItemContainer>
      <ItemHeader>
        <ItemAvatar img={img} />
        <ItemNameContainer>
          <Title>{title}</Title>
          <SubTitle>{sub}</SubTitle>
        </ItemNameContainer>
      </ItemHeader>
      <Content>
        &quot;
        {content}
        &quot;
      </Content>
    </ItemContainer>
  );
};

const items = [
  {
    title: 'Lotty De La Ritta',
    sub: 'Citizen',
    img: av,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    title: 'Lotty De La Ritta',
    sub: 'Citizen',
    img: av,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    title: 'Lotty De La Ritta',
    sub: 'Citizen',
    img: av,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    title: 'Lotty De La Ritta',
    sub: 'Citizen',
    img: av,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  }
];

const HomeSection6 = () => {
  return (
    <Container>
      <CarouselContainer>
        {items.map(i => (
          <Item {...i} />
        ))}
      </CarouselContainer>
      <Dots>
        <Circle className="home-active-dot">
          <Dot />
        </Circle>
        <Circle>
          <Dot />
        </Circle>
        <Circle>
          <Dot />
        </Circle>
      </Dots>
    </Container>
  );
};

export default HomeSection6;
