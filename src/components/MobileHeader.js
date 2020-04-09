import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { NavigationContext } from '../context/NavigationProvider';

const Container = styled.div`
  display: none;
  height: 80px;
  align-items: center;
  padding: 0px 50px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  z-index: 3;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 575.98px) {
    padding: 0px 20px;
  }
`;

const Logo = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.5rem;
  align-items: center;
  flex: 1;
  font-weight: bold;
`;

const MobileHeader = () => {
  const { toggleNav } = useContext(NavigationContext);
  const showNav = () => toggleNav(true);
  return (
    <Container>
      <ion-icon
        onClick={showNav}
        style={{ cursor: 'pointer' }}
        name="menu-outline"
        size="large"
      ></ion-icon>
      <Logo>
        <Link to="/">logo .</Link>
      </Logo>
      <div />
    </Container>
  );
};

export default MobileHeader;
