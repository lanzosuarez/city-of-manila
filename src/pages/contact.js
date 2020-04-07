import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import NavigationProvider from '../context/NavigationProvider';

const ContactPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Contact" />
        <h1>Contact Us</h1>
      </Layout>
    </NavigationProvider>
  );
};

export default ContactPage;
