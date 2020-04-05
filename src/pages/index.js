import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
    </Layout>
  );
};

export default IndexPage;
