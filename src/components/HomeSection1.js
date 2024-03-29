import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import '../styles/index.css';

import civilIcon from '../images/home-economic.svg';
import commIcon from '../images/home-social.svg';
import criminalIcon from '../images/home-development.svg';
import ecomIcon from '../images/home-green.svg';
import educIcon from '../images/home-Investor.svg';
import envIcon from '../images/home-tourism.svg';

const Container = styled.div`
  padding: 0px 0px 0px;
  display: grid;
  grid-gap: 30px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  margin: -30px auto 0px;
  z-index: 4;
  position: relative;
  max-width: 1200px;

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
  width: 50px;
  height: 50px;
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
    title: 'Economic Development',
    path: civilIcon,
    page: '/programs/economic-development'
  },
  {
    title: 'Social Amelioration',
    path: commIcon,
    page: '/programs/social-amelioration'
  },
  {
    title: 'Physical Redevelopment',
    path: criminalIcon,
    page: '/programs/physical-redevelopment'
  },
  {
    title: 'Green Spaces',
    path: ecomIcon,
    page: '/programs/green-spaces'
  },
  {
    title: 'Business and Investor Revitalization',
    path: educIcon,
    page: '/programs/business-and-investor-revitalization'
  },
  {
    title: 'Tourism',
    path: envIcon,
    page: '/programs/tourism'
  }
];

const HomeSection1 = () => {
  return (
    <Container>
      {items.map((i, idx) => (
        <Item key={idx}>
          <Link to={i.page}>
            <ItemImg alt={i.title} src={i.path}></ItemImg>
            <p style={TextStyle}>{i.title}</p>
          </Link>
        </Item>
      ))}
    </Container>
  );
};

export default HomeSection1;
