import React from 'react';
import styled from '@emotion/styled';

import bg from '../images/home-section6-bg.png';
import logo1 from '../images/testimonial-logo-bg-1.png';
import logo2 from '../images/testimonial-logo-bg-2.png';
import logo3 from '../images/testimonial-logo-bg-3.png';

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
        &quot;
        {content}
        &quot;
      </Content>
    </ItemContainer>
  );
};

const items = [
  {
    title: 'Esquire Philippines',
    sub: 'Jul 8, 2019',
    img: logo1,
    content:
      'Within the next few days, he turns up again almost incessantly on social media news feeds and TV newscasts—there he is brandishing a sledgehammer and whacking gambling machines operating within Manila City Hall grounds.... The new mayor clearly means business and he’s not wasting a single minute of his three-year term.'
  },
  {
    title: 'Philippine Tatler ',
    sub: 'Mar 10, 2020',
    img: logo2,
    content:
      'This is my pat on the back. Every cup [of Starbucks] reminds me to be grateful that now I can afford 120 pesos for coffee when, once upon a time I could not. I thank God and ask for forgiveness, guidance, strength'
  },
  {
    title: 'Daily Pedia',
    sub: 'July 26, 2019',
    img: logo3,
    content:
      'When people who watch Isko actually go to Manila and experience the changes, their minds will be blown, not because they understand the political implications of this change, but because nakakatuwa lang talaga na makita ang isang lugar na dating magulo na ngayon ay maayos na. Salamat kay Yorme.'
  },
  {
    title: 'Lotty De La Ritta',
    sub: 'Citizen',
    img: logo1,
    content:
      'When people who watch Isko actually go to Manila and experience the changes, their minds will be blown, not because they understand the political implications of this change, but because nakakatuwa lang talaga na makita ang isang lugar na dating magulo na ngayon ay maayos na. Salamat kay Yorme.'
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
