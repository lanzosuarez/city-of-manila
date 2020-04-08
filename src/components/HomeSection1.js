import React from 'react';
import styled from '@emotion/styled';
import '../styles/index.css';

import civilIcon from '../images/home-economic.svg';
import commIcon from '../images/home-social.svg';
import criminalIcon from '../images/home-development.svg';
import ecomIcon from '../images/home-green.svg';
import educIcon from '../images/home-Investor.svg';
import envIcon from '../images/home-tourism.svg';

const Container = styled.div`
  padding: 0px 88px 0px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin-top: -30px;
  z-index: 4;
  position: relative;

  @media (max-width: 576px) {
    padding: 0px 20px 0px;
  }

`;

const Item = styled.div`
  font-size: 0.8rem;
  cursor: pointer;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  text-align: center;
  font-weight: 600;
  box-shadow: 15px 14px 38px 0px rgba(0, 0, 0, 0.1);
  transition: transform 500ms;

  &:hover {
    transform: translateY(-20px);
  }
`;

const ItemImg = styled.img`
  margin-bottom: 20px;
  width:50px;
  height:50px;
  fill: #05326b;
`;

const TextStyle = {
  marginBottom: '0px',
  lineHeight: '1.5',
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: '13px'
};

const items = [
  {
    title: 'Economic Alleviation',
    path: civilIcon
  },
  {
    title: 'Social Amelioration',
    path: commIcon
  },
  {
    title: 'Physical Redevelopment',
    path: criminalIcon
  },
  {
    title: 'Green Spaces',
    path: ecomIcon
  },
  {
    title: 'Business and Investor Revitalization',
    path: educIcon
  },
  {
    title: 'Tourism',
    path: envIcon
  }
];

const HomeSection1 = () => {
  return (
    <Container>
      {items.map(i => (
        <Item>
          <ItemImg alt={i.title} src={i.path}></ItemImg>
          <p style={TextStyle}>{i.title}</p>
        </Item>
      ))}
    </Container>
  );
};

export default HomeSection1;
