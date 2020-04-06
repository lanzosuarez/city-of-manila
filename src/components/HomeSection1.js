import React from 'react';
import styled from '@emotion/styled';
import '../styles/index.css';

import civilIcon from '../images/home-icon-civil-rights.png';
import commIcon from '../images/home-icon-community.png';
import criminalIcon from '../images/home-icon-justice.png';
import ecomIcon from '../images/home-icon-economic.png';
import educIcon from '../images/home-icon-education.png';
import envIcon from '../images/home-icon-environment.png';

const Container = styled.div`
  padding: 0px 70px 0px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(6, 1fr);
  margin-top: -50px;
  z-index: 4;
  position: relative;
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
  box-shadow: 15px 14px 38px 0px rgba(0,0,0,0.1);
`;

const ItemImg = styled.img`
  margin-bottom: 20px;
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
    title: 'Civil Rights',
    path: civilIcon
  },
  {
    title: 'Community Revitalization',
    path: commIcon
  },
  {
    title: 'Criminal Justice',
    path: criminalIcon
  },
  {
    title: 'Economic Development',
    path: ecomIcon
  },
  {
    title: 'Education',
    path: educIcon
  },
  {
    title: 'Environment',
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
