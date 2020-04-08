import React from 'react';
import { Link } from 'gatsby';

import styled from '@emotion/styled';
import NavigationItem from './NavigationItem';

const Container = styled.div`
  height: 100px;
  width: 100%;
  max-width: ${props => props.maxWidth};
  display: flex;
  background: white;
  margin: 0 auto;
  position: relative; 
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.div`
  height: 100%;
  width: 200px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
  }
`;

const NavList = styled.ul`
  flex: 1;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  align-items: center;
  list-style: none;
  padding: 0px 20px;
`;

export const listItems = [
  {
    title: 'About',
    path: '/about',
    sections: [
      {
        title: 'Mayor Profile',
        path: '/about#mayor-profile'
      },
      {
        title: 'Background',
        path: '/about#background'
      },
      {
        title: 'Links to Social Media Pages',
        path: '/about#links-to-social-media'
      }
    ]
  },
  {
    title: 'Executive Orders & Legislation',
    path: '/executive-and-legislation'
  },
  {
    title: 'COVID - 19: Overview',
    path: '/covid',
    sections: [
      {
        title: 'What is ECQ?',
        path: '/covid'
      },
      {
        title: 'How will ECQ get rid of COVID-19?',
        path: '/covid'
      }
    ]
  },
  {
    title: 'Programs',
    path: '/programs'
  },
  {
    title: 'Latest Updates',
    path: '/latest-updates'
  },
  {
    title: 'Gallery',
    path: '/gallery'
  },
  {
    title: 'Get Involved',
    path: '/get-involved'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
];

const Navigation = ({ maxWidth = '100%' }) => {
  return (
    <Container maxWidth={maxWidth}>
      <Logo>
        <Link to="/">logo .</Link>
      </Logo>
      <NavList>
        {listItems.map((i, idx) => (
          <NavigationItem key={idx} {...i} />
        ))}
      </NavList>
    </Container>
  );
};

export default Navigation;
