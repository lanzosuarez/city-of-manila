import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import NavigationProvider from '../context/NavigationProvider';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';

import ProgramsSection1 from '../components/ProgramsSection1';
import PageContainer from '../components/PageContainer';

const ProgramsPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Programs" />
        <Notice />
        <Navigation />
        <PageHeader name="Programs" />
        <PageContainer>
          <ProgramsSection1 />
        </PageContainer>
      </Layout>
    </NavigationProvider>
  );
};

export default ProgramsPage;
