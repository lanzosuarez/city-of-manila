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
import ProgramsNav from '../components/ProgramsNav';

const Grid = styled.div`
  display: grid;
  padding: 30px 0px 0px;
  grid-gap: 50px;
`;

export const programsPath = [
  '/programs/economic-development',
  '/programs/social-amelioration',
  '/programs/physical-redevelopment',
  '/programs/green-spaces',
  '/programs/business-and-investor-revitalization',
  '/programs/tourism'
];

const ProgramsTemplate = ({ data }) => {
  const {
    contentfulPrograms: {
      bannerTitle,
      pageType,
      section1,
      section2,
      section3,
      slug
    }
  } = data;
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
            <ProgramsSection1 content={section1} />
          </PageContainer>
          <ProgramsSection2 content={section2} />
          {pageType === 2 && (
            <PageContainer>
              <ProgramsSection3 content={section3} />
            </PageContainer>
          )}
        </Grid>
        <ProgramsNav activeProgram={slug} />
      </Layout>
    </NavigationProvider>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulPrograms(slug: { eq: $slug }) {
      slug
      bannerTitle
      pageType
      section1 {
        title
        content
      }
      section2 {
        title
        subtitle
        btnLink
        content
        btnText
        hasCTA
      }
      section3 {
        title
        content {
          title
          subtitle
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
