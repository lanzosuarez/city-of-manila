import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import NavigationProvider from '../context/NavigationProvider';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import logo from '../images/logo-150px.png';
import banner from '../images/page-banner-newsroom.jpg';
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

const Logo = styled.img`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width:100px;
  @media only screen and (max-width: 1024px) {
    bottom: 0.5rem;
    top: unset;
    width: 80px;
  }
`;
const SubLogo = styled.div`
  position: relative;
`;

const NewsRoomPage = ({ location, data }) => {
  const [items, setItems] = useState(data.allContentfulNewsroom.edges);

  return (
    <NavigationProvider>
      <LatestUpdatesProvider>
        <Layout>
          <SEO title="Newsroom" />
          <Notice />
          <Navigation />
          <SubLogo>
            <Logo src={logo} alt="newsroom logo" />
            <PageHeader name="Newsroom" bg={banner} />
          </SubLogo>
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
    allContentfulNewsroom(sort: { fields: [date], order: ASC }) {
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
