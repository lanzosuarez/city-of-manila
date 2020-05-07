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
import { graphql } from 'gatsby';
import { formatDate } from '../helpers';

const Wrapper = styled.div`
  width: 100%;
`;

const SinglePage = ({ location, data }) => {
  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  const { heading1, date, photo, by, tags, category } = data.contentfulNewsroom;
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Latest Update" />
        <Notice />
        <Navigation />
        <Wrapper>
          <SinglePageBanner
            category={category}
            by={by}
            bg={photo}
            text={heading1}
            datetext={formatDate(date)}
          />
          <SinglePageShare page={location.href} />
          <SinglePageContent
            tagNames={tags}
            data={data.contentfulNewsroom}
            recentPosts={data.allContentfulNewsroom.edges}
          />
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export const query = graphql`
  query($id: String!) {
    contentfulNewsroom(id: { eq: $id }) {
      category
      tags
      by
      photo {
        file {
          url
        }
      }
      heading1
      date
      body1 {
        body1
      }
      body2 {
        childMarkdownRemark {
          html
        }
      }
      quote {
        quote
      }
      quoteFrom
      youtubeLink
    }
    allContentfulNewsroom(
      filter: { id: { ne: $id } }
      sort: { fields: [date], order: DESC }
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
