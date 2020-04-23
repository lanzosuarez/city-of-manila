import React,  { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import GalleryFbVideo from '../components/GalleryFbVideo';
import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import VideoGallery from '../components/VideoGallery';
import PhotoGallery from '../components/PhotoGallery';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';
import SEO from '../components/SEO';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import scrollToSection from '../hooks/scrollToSection';

const Wrapper = styled.div`
  width: 100%;
`;

const Section = styled.div`
  padding: 4rem 15px;
`;

const FeaturedContainer = styled.div`
  max-width: 1280px;
  height: 100%;
`;

const FeaturedText = styled.p`
  color: #d33c35;
  margin: 0.5rem 0px 1rem 0px;
  font-weight: 600;
  font-family: Quicksand;
`;

const FeaturedContent = styled.h1`
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.3;
  }
`;

const Date = styled.p`
  margin-bottom: 0px;
`;

const BorderLine = styled.hr`
  border-top: 3px solid #e0e0e;
  margin: 0px 15px;
`;
const TabContainer = styled.div`
  max-width: 300px;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
`;

const Tab = styled.div`
  cursor: pointer;
  margin: 0 auto;
  color: ${props => (props.active ? '#05326b' : '#989797')};
  font-weight: ${props => (props.active ? '700' : '600')};
  padding-bottom: ${props => (props.active ? '8px' : '0px')};
  border-bottom: ${props => (props.active ? '2px solid #05326b' : 'none')};
  h3{
    margin-bottom: 0.5rem;
  }
`;

export const tabs = ['Videos', 'Photos'];

const GalleryPage = ({ location }) => {
  const [activeTab, setActiveTab ] = useState(0);

  const onSelectTab = idx => () => setActiveTab(idx);

  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Gallery" />
        <Notice />
        <Navigation />
        <Wrapper>
          <PageHeader name="Gallery" />
          <PageContainer>
            <Section>
              <FeaturedContainer>
                  <GalleryFbVideo />
              </FeaturedContainer>
              <FeaturedText>Featured Video</FeaturedText>
              <FeaturedContent>
                Feeding a city of 1.8 million during a crisis.
              </FeaturedContent>
              <Date>April 04, 2020</Date>
            </Section>
            <PageContainer>
              <BorderLine />
            </PageContainer>
            <Section>
              <TabContainer>
                {tabs.map((tab, idx) => (
                  <Tab
                    key={idx}
                    onClick={onSelectTab(idx)}
                    active={idx === activeTab}
                  >
                    <h3>{tab}</h3>
                  </Tab>
                ))}
              </TabContainer>
              {activeTab == '0' && <VideoGallery/>}
              {activeTab == '1' && <PhotoGallery/>}
            </Section>
          </PageContainer>
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default GalleryPage;
