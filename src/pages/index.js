import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import HomeSection4 from '../components/HomeSection4';
import HomeSection5 from '../components/HomeSection5';
import HomeSection6 from '../components/HomeSection6';
import HomeSection7 from '../components/HomeSection7';
import HomeSection8 from '../components/HomeSection8';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
    </Layout>
  );
};

export default IndexPage;
