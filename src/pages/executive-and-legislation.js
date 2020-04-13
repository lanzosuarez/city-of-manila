import React from 'react';
import NavigationProvider from '../context/NavigationProvider';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import ExecSection1 from '../components/ExecSection1';
import ExecSection2 from '../components/ExecSection2';

const ExecutiveAndLegislativePage = ({}) => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Executive And Legislation" />
        <Notice />
        <Navigation />
        <PageHeader name="Executive And Legislation" />
        <ExecSection1 />
        <ExecSection2 />
      </Layout>
    </NavigationProvider>
  );
};

export default ExecutiveAndLegislativePage;
