import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useFadeIn from '../hooks/useFadeIn';

import bg from '../images/home-section6-bg.png';
import logo1 from '../images/testimonial-logo-bg-1.jpg';
import logo2 from '../images/testimonial-logo-bg-2.jpg';
import logo3 from '../images/testimonial-logo-bg-3.jpg';

const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  background-image: url(${bg});
  background-size: cover;
  margin: 0px 70px 80px;
  padding: 40px;

  @media (max-width: 576px) {
    margin: 0px 15px 80px;
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
    grid-template-columns: repeat(4, minmax(calc(100% - 20px), 1fr));
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
  font-size: 1rem;
  line-height: 1.6;
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
        {content}
      </Content>
    </ItemContainer>
  );
};

const items = [
  {
    title: 'Rappler',
    sub: 'Jul 8, 2019',
    img: logo1,
    content:'"Manila has become one of the first cities to pass a curfew ordinance, and the only city in Metro Manila which has built an infectious disease center."'
  },
  {
    title: 'Manila Bulletin',
    sub: 'Mar 10, 2020',
    img: logo2,
    content:'"In view of the crisis caused by COVID-19, the City Government of Manila appeals and humbly requests all lessors of commercial establishments in the City of Manila ...to waive the corresponding rental fees and charges thereof."'
  },
  {
    title: 'CNN',
    sub: 'April 13, 2020',
    img: logo3,
    content: '"Manila is now ready to conduct localized mass targeted testing for COVID-19, with the Philippine capital capable of conducting more than 1,000 swab tests weekly."'
  }
];

const HomeSection6 = () => {
  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('home-section6', { delay: '300ms' });
  }, []);
  return (
    <Container data-usefadein="home-section6">
      <CarouselContainer>
        {items.map((i, idx) => (
          <Item key={idx} {...i} />
        ))}
      </CarouselContainer>
      <Dots>
        <Circle className="home-active-dot">
          <Dot />
        </Circle>
      </Dots>
    </Container>
  );
};

export default HomeSection6;
