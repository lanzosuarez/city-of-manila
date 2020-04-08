import React from 'react';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';

const NotFoundPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <Notice />
        <Navigation />
        Page cannot be found
      </Layout>
    </NavigationProvider>
  );
};

export default NotFoundPage;
