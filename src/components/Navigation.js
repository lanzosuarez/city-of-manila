import React from 'react';
import styled from '@emotion/styled';
import NavigationItem from './NavigationItem';

const Container = styled.div`
  height: 100px;
  width: 100%;
  max-width: 1290px;
  background: white;
  display: flex;
  margin: 0 auto;

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
  color: white;
  font-size: 1.5rem;
  align-items: center;
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

const listItems = [
  {
    title: 'About',
    sections: [
      'Mayor Profile',
      'Background',
      'His Leadership Team',
      'Links to Social Media Pages'
    ]
  },
  {
    title: 'Executive Orders & Legislation',
    sections: ['General Updates', 'Press Releases']
  },
  {
    title: 'COVID - 19: Overview'
  },
  {
    title: 'Programs'
  },
  {
    title: 'Latest Updates',
    sections: ['General Updates', 'Press Releases']
  },
  {
    title: 'Gallery'
  },
  {
    title: 'Get Involved'
  },
  {
    title: 'Contact'
  }
];

const Navigation = () => {
  return (
    <Container>
      <Logo>logo .</Logo>
      <NavList>
        {listItems.map((i, idx) => (
          <NavigationItem key={idx} {...i} />
        ))}
      </NavList>
    </Container>
  );
};

export default Navigation;
