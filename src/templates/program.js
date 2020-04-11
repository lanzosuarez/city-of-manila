import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import NavigationProvider from '../context/NavigationProvider';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';

import ProgramsSection1 from '../components/ProgramsSection1';
import PageContainer from '../components/PageContainer';
import ProgramBanner from '../components/ProgramBanner';
import ProgramShare from '../components/ProgramShare';
import ProgramsSection2 from '../components/ProgramSection2';
import ProgramsSection3 from '../components/ProgramSection3';
import ProgramsSection4 from '../components/ProgramSection4';
import ProgramsSection5 from '../components/ProgramSection5';
import ProgramsSection6 from '../components/ProgramSection6';

const Grid = styled.div`
  display: grid;
  padding: 30px 0px 0px;
  grid-gap: 50px;
`;

const ProgramsTemplate = ({ data }) => {
  const {
    contentfulPrograms: { bannerTitle }
  } = data;
  console.log(bannerTitle);
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Programs" />
        <Notice />
        <Navigation />
        <ProgramBanner text={bannerTitle} />
        <ProgramShare />
        <Grid>
          <PageContainer>
            <ProgramsSection1 />
          </PageContainer>
          <ProgramsSection2 />
          <PageContainer>
            <ProgramsSection3 />
          </PageContainer>
          <ProgramsSection4 />
          <PageContainer>
            <ProgramsSection5 />
          </PageContainer>
          <ProgramsSection6 />
        </Grid>
      </Layout>
    </NavigationProvider>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulPrograms(slug: { eq: $slug }) {
      bannerTitle
      section1 {
        title
        content
      }
      section2 {
        title
        subtitle
        btnLink
        content
      }
      section3 {
        items {
          title
          btnLink
          content
        }
      }
      section4 {
        quote
        quotee
      }
      section5 {
        title
        videoUrl
      }
      section6 {
        title
        content
        btnLink
      }
    }
  }
`;

export default ProgramsTemplate;
