import React from 'react';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';

const NotFoundPage = () => {
  return (
    <NavigationProvider>
      <Layout>Page cannot be found</Layout>
    </NavigationProvider>
  );
};

export default NotFoundPage;
