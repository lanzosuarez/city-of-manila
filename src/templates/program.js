import React, { useEffect } from 'react';
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
import useFadeIn from '../hooks/useFadeIn';

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

const ProgramsTemplate = ({ data, location }) => {
  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('program-section1');
    addElement('program-section2', { delay: '300ms' });
    addElement('program-section3', { delay: '300ms' });
  }, []);
  const {
    contentfulPrograms: {
      bannerTitle,
      banner,
      pageType,
      section1,
      section2,
      section3,
      slug
    }
  } = data;
  console.log(data);
  return (
    <NavigationProvider>
      <Layout>
        <SEO title={bannerTitle} image={banner.file.url} />
        <Notice />
        <Navigation />
        <ProgramBanner text={bannerTitle} bg={banner.file.url} />
        <ProgramShare page={location.href} />
        <Grid>
          <PageContainer data-usefadein="program-section1">
            <ProgramsSection1 content={section1} />
          </PageContainer>
          {pageType !== 3 && (
            <ProgramsSection2
              content={section2}
              data-usefadein="program-section2"
            />
          )}
          {(pageType === 2 || pageType === 3) && (
            <PageContainer data-usefadein="program-section3">
              <ProgramsSection3 content={section3} />
            </PageContainer>
          )}
        </Grid>
        <ProgramsNav activeProgram={slug} data-usefadein="program-section4" />
      </Layout>
    </NavigationProvider>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulPrograms(slug: { eq: $slug }) {
      slug
      bannerTitle
      banner {
        file {
          url
        }
      }
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
        content {
          title
          subtitle
          content
          imageUrl
        }
      }
    }
  }
`;

export default ProgramsTemplate;
