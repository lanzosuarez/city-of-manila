import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import SinglePageBanner from '../components/SinglePageBanner';
import SinglePageShare from '../components/SinglePageShare';
import SinglePageContent from '../components/SinglePageContent';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';
import SEO from '../components/SEO';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import scrollToSection from '../hooks/scrollToSection';
import { useStaticQuery, graphql } from 'gatsby';
import { formatDate } from '../helpers';

const Wrapper = styled.div`
  width: 100%;
`;

const SinglePage = ({ location, data }) => {
  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  const { heading1, date } = data.contentfulLatestUpdates;

  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Latest Update" />
        <Notice />
        <Navigation />
        <Wrapper>
          <SinglePageBanner text={heading1} datetext={formatDate(date)} />
          <SinglePageShare />
          <SinglePageContent
            data={data.contentfulLatestUpdates}
            recentPosts={data.allContentfulLatestUpdates.edges}
          />
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export const query = graphql`
  query($id: String!) {
    contentfulLatestUpdates(id: { eq: $id }) {
      heading1
      date
      body1 {
        body1
      }
      body2 {
        body2
      }
      quote {
        quote
      }
    }
    allContentfulLatestUpdates(
      filter: { id: { ne: $id } }
      sort: { fields: [date], order: ASC }
      limit: 3
    ) {
      edges {
        node {
          id
          heading1
          date
          photo {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default SinglePage;
