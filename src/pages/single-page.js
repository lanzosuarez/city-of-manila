import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import SinglePageBanner from '../components/SinglePageBanner';
import SinglePageShare from '../components/SinglePageShare';
import SinglePageContent from '../components/SinglePageContent';
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
          <SinglePageBanner
            text="Lorem ipsum dolor sit amet, consectetur minim veniam adipiscing elit ut enim ad, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            datetext="April 14, 2020"
          />
          <SinglePageShare />
          <SinglePageContent/>
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default SinglePage;
