import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';
import SEO from '../components/SEO';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import scrollToSection from '../hooks/scrollToSection';

const Wrapper = styled.div`
  width: 100%;
`;


const SinglePage = ({ location }) => {
  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Latest Update" />
        <Notice />
        <Navigation />
        <Wrapper>
          
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default SinglePage;
