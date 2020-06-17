import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import Footer from './Footer';
import MobileHeader from './MobileHeader';
import SideNavigation from './SideNavigation';
import { NavigationContext } from '../context/NavigationProvider';

import '../styles/typography.css';
import '../styles/index.css';
import { detectIE } from '../helpers';
import { navigate } from 'gatsby';

const Container = styled.div`
  width: 100%;
  position: relative;

  height: ${props => (props.noscroll ? '100vh' : 'auto')};
  overflow: ${props => (props.noscroll ? 'hidden' : 'auto')};
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

  if (detectIE()) navigate('/not-supported');

  return (
    <Container id="page-layout" noscroll={showNav}>
      <Overlay onClick={() => toggleNav(false)} show={showNav} />
      <MobileHeader />
      <SideNavigation />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
