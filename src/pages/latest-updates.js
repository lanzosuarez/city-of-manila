import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavigationProvider from '../context/NavigationProvider';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useFadeIn from '../hooks/useFadeIn';
import banner from '../images/latest-updates-banner.jpg';
import Navigation from '../components/Navigation';
import Notice from '../components/Notice';
import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import FeaturedNews from '../components/FeaturedNews';
import { graphql } from 'gatsby';
import LatestUpdatesSection1 from '../components/LatestUpdatesSection1';
import LatestUpdatesProvider from '../context/LatestUpdateProvider';
import LatestUpdatesSection2 from '../components/LatestUpdatesSection2';

const Container = styled(PageContainer)`
  display: grid;
  grid-gap: 30px;
  width: 90%;
`;

const LatestUpdatePage = ({ location, data }) => {
  const [items, setItems] = useState(data.allContentfulLatestUpdates.edges);

  return (
    <NavigationProvider>
      <LatestUpdatesProvider>
        <Layout>
          <SEO title="Latest Updates" />
          <Notice />
          <Navigation />
          <PageHeader name="Newsroom" bg={banner} />
          <PageContainer>
            <Container>
              <FeaturedNews />
              <LatestUpdatesSection1 />
              <LatestUpdatesSection2 items={items} />
            </Container>
          </PageContainer>
        </Layout>
      </LatestUpdatesProvider>
    </NavigationProvider>
  );
};

export const query = graphql`
  query {
    allContentfulLatestUpdates(sort: { fields: [date], order: ASC }) {
      edges {
        node {
          id
          heading1
          body1 {
            body1
          }
          body2 {
            body2
          }
          photo {
            file {
              url
            }
          }
          date
          by
          category
        }
      }
    }
  }
`;

export default LatestUpdatePage;
