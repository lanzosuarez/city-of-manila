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
        title: 'Links To Social Media Pages',
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
        title: 'Digital Help Survey',
        path: '/covid#digital-survey'
      },
      {
        title: 'Enhanced Community Quarantine',
        path: '/covid#ecq'
      },
      {
        title: 'What You Need To Know',
        path: '/covid#what-you-need-to-know'
      }
    ]
  },
  {
    title: 'Programs',
    path: '/programs/economic-alleviation',
    sections: [
      {
        title: 'Economic Alleviation',
        path: '/programs/economic-alleviation'
      },
      {
        title: 'Social Amelioration',
        path: '/programs/social-amelioration'
      },
      {
        title: 'Physical Redevelopment',
        path: '/programs/physical-redevelopment'
      },
      {
        title: 'Green Spaces',
        path: '/programs/green-spaces'
      },
      {
        title: 'Business And Investor Revitalization',
        path: '/programs/business-and-investor-revitalization'
      },
      {
        title: 'Tourism',
        path: '/programs/tourism'
      }
    ]
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
