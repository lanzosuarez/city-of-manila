import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import HomeSection4 from '../components/HomeSection4';
import HomeSection5 from '../components/HomeSection5';
import HomeSection6 from '../components/HomeSection6';
import HomeSection8 from '../components/HomeSection8';
import HomeSection9 from '../components/HomeSection9';

import NavigationProvider from '../context/NavigationProvider';
import Banner from '../components/Banner';
const IndexPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Home" />
        <Banner />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <HomeSection8 />
        <HomeSection9 />
      </Layout>
    </NavigationProvider>
  );
};

export default IndexPage;
