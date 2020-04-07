import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import NavigationProvider from '../context/NavigationProvider';
import CovidSection1 from '../components/CovidSection1';

const CovidPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="COVID-19" />
        <CovidSection1 />
      </Layout>
    </NavigationProvider>
  );
};

export default CovidPage;
