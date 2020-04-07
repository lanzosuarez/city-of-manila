import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import NavigationProvider from '../context/NavigationProvider';

const CovidPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="COVID-19" />
        <h1>COVID-19</h1>
      </Layout>
    </NavigationProvider>
  );
};

export default CovidPage;
