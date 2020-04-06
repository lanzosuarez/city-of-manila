import React, { useContext } from 'react';
import styled from '@emotion/styled';

import '../styles/index.css';
import Banner from './Banner';
import Footer from './Footer';
import MobileHeader from './MobileHeader';
import SideNavigation from './SideNavigation';
import { NavigationContext } from '../context/NavigationProvider';

const Container = styled.div`
  width: 100%;
  position: relative;

  height: ${props => (props.noscroll ? '100vh' : 'auto')};
  overflow: ${props => (props.noscroll ? 'hidden' : 'scroll')};
`;

const Overlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  top: 0;
  left: 0%;
  background: rgba(0, 0, 0, 0.3);
  display: ${props => (props.show ? 'block' : 'none')};
  cursor: pointer;
`;

const Layout = ({ children }) => {
  const { showNav, toggleNav } = useContext(NavigationContext);

  return (
    <Container noscroll={showNav}>
      <Overlay onClick={() => toggleNav(false)} show={showNav} />
      <MobileHeader />
      <SideNavigation />
      <Banner />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
