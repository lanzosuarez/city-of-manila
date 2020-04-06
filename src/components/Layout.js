import React from 'react';
import styled from '@emotion/styled';

import '../styles/index.css';
import Banner from './Banner';
import Footer from './Footer';

const Container = styled.div`
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Banner />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
