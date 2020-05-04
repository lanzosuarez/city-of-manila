import React, { useEffect, useState } from 'react';
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

const NewsRoomPage = ({ location, data }) => {
  const [items, setItems] = useState(data.allContentfulLatestUpdates.edges);

  return (
    <NavigationProvider>
      <LatestUpdatesProvider>
        <Layout>
          <SEO title="News Room" />
          <Notice />
          <Navigation />
          <PageHeader name="News Room" bg={banner} />
          <PageContainer>
            <Container>
              <FeaturedNews />
              <LatestUpdatesSection1 location={location} />
              <LatestUpdatesSection2 items={items} location={location} />
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
          tags
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

export default NewsRoomPage;
