import React, { useState } from 'react';
import NavigationProvider from '../context/NavigationProvider';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import ExecSection1 from '../components/ExecSection1';
import ExecSection2 from '../components/ExecSection2';
import ExecAndLegislationProvider from '../context/ExecAndLegislationProvider';
import pageBg from '../images/page-banner-eo.jpg';
import { graphql } from 'gatsby';

const ExecutiveAndLegislativePage = ({ data, location }) => {
  const [items, setItems] = useState(
    data.allContentfulExecutiveAndLegislation.edges
  );

  return (
    <NavigationProvider>
      <ExecAndLegislationProvider>
        <Layout>
          <SEO title="Executive Orders, City Resolutions, and Ordinances" />
          <Notice />
          <Navigation />
          <PageHeader
            name="Executive Orders, City Resolutions, and Ordinances"
            bg={pageBg}
          />
          <ExecSection1 items={items} location={location} />
          <ExecSection2 items={items} />
        </Layout>
      </ExecAndLegislationProvider>
    </NavigationProvider>
  );
};

export const query = graphql`
  query {
    allContentfulExecutiveAndLegislation {
      edges {
        node {
          id
          logo {
            file {
              url
            }
          }
          name
          publishedDate
          type
          description {
            description
          }
          file {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default ExecutiveAndLegislativePage;
