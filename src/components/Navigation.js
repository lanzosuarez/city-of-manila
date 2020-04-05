import React from 'react';
import styled from '@emotion/styled';
import NavigationItem from './NavigationItem';

const Container = styled.div`
  height: 100px;
  width: 100%;
  max-width: 1200px;
  background: white;
  display: flex;
  margin: 0 auto;
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
    title: 'Home'
  },
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
    title: 'Latest Updates',
    sections: ['General Updates', 'Press Releases']
  },
  {
    title: 'Executive Orders & Legislation',
    sections: ['General Updates', 'Press Releases']
  },
  {
    title: 'Enhanced Community Quarantine: What you need to know'
  },
  {
    title: 'COVID - 19: What you need to know'
  },
  {
    title: 'Ongoing Programs'
  },
  {
    title: 'Multimedia'
  },
  {
    title: 'How can you help Manila'
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
