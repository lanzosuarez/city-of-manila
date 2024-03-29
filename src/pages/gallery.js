import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useFadeIn from '../hooks/useFadeIn';
import GalleryVideo from '../components/GalleryVideo';
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
import Banner from '../images/page-banner-gallery.jpg';

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
  margin: 1.45rem 0px 1rem 0px;
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
  h3 {
    margin-bottom: 0.5rem;
  }
`;

export const tabs = ['Videos', 'Photos'];

const GalleryPage = ({ location }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onSelectTab = idx => () => setActiveTab(idx);

  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('gallery-page1', { delay: '300ms' });
    addElement('gallery-page2', { delay: '300ms' });
    addElement('gallery-page3', { delay: '300ms' });
  }, []);

  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Gallery" />
        <Notice />
        <Navigation />
        <Wrapper>
          <PageHeader name="Gallery" bg={Banner} />
          <PageContainer>
            <Section data-usefadein="gallery-page1">
              <FeaturedContainer>
                <GalleryVideo url="https://www.youtube.com/watch?v=2qKPzVLguDc&" />
              </FeaturedContainer>
              <FeaturedText>Featured Video</FeaturedText>
              <FeaturedContent>
                Feeding a city of 1.8 million during a crisis.
              </FeaturedContent>
              <Date>March 25, 2020</Date>
            </Section>
            <PageContainer data-usefadein="gallery-page2">
              <BorderLine />
            </PageContainer>
            <Section data-usefadein="gallery-page3">
              <TabContainer >
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
              {activeTab === 0 && <VideoGallery />}
              {activeTab === 1 && <PhotoGallery />}
            </Section>
          </PageContainer>
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default GalleryPage;
