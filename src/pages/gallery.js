import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';
import VideoPlaceholder from '../images/video-placeholder.jpg';
import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
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
  max-height: 720px;
`;

const FeaturedVideo = styled.img`
  width: 100%;
  height: auto;
`;

const FeaturedText = styled.p`
  color: #d33c35;
  margin: 2rem 0px 1rem 0px;
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

const Tab = styled.h3`
  margin: 0 auto;
  color: #989797;
  font-weight: 600;
`;

const active = {
  borderBottom: '2px solid #05326b',
  color: '#05326b',
  fontWeight: '700',
  paddingBottom: '8px'
};

const ListContainer = styled.div`
  margin: 0 auto;
  background: white;
  margin-top: 50px;
  display: grid;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderItem = styled.div`
  /* flex: 1; */
`;

const Figure = styled.h3`
  display: inline;
  margin: 0;
  color: var(--blue);
  margin-right: 10px;
`;

const iconStyle = {
  color: 'var(--blue)',
  cursor: 'pointer'
};
const AssetContainer = styled.div`
  max-height: 309px;
  @media only screen and (max-width: 768px) {
    max-height: 100%;
  }
`;
const VideoItem = styled.img`
  width: 100%;
  height: auto;
`;
const AssetWrap = styled.div`
  width: 48%;
  h3 {
    margin-top: 1.45rem;
    margin-bottom: 1rem;
    color: #05326b;
    line-height: 1.3;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const AssetList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  margin: 1rem 0px;
`;
const GalleryPage = ({ location }) => {
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
                <FeaturedVideo src={VideoPlaceholder} alt="Featured Video" />
              </FeaturedContainer>
              <FeaturedText>Featured Video</FeaturedText>
              <FeaturedContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </FeaturedContent>
              <Date>April 04, 2020</Date>
            </Section>
            <PageContainer>
              <BorderLine />
            </PageContainer>
            <Section>
              <TabContainer>
                <Tab style={active}>Videos</Tab>
                <Tab>Photos</Tab>
              </TabContainer>
              <PageContainer>
                <ListContainer>
                  <Header>
                    <HeaderItem>
                      <Figure>100</Figure>Videos
                    </HeaderItem>
                    <HeaderItem>
                      <ion-icon
                        style={{ ...iconStyle, marginRight: 10 }}
                        size="large"
                        name="arrow-back"
                      ></ion-icon>
                      <ion-icon
                        style={iconStyle}
                        size="large"
                        name="arrow-forward"
                      ></ion-icon>
                    </HeaderItem>
                  </Header>
                </ListContainer>
                <AssetList>
                  <AssetWrap>
                    <AssetContainer>
                      <VideoItem src={VideoPlaceholder} alt="Featured Video" />
                    </AssetContainer>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </h3>
                    <p>April 04, 2020</p>
                  </AssetWrap>
                  <AssetWrap>
                    <AssetContainer>
                      <VideoItem src={VideoPlaceholder} alt="Featured Video" />
                    </AssetContainer>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </h3>
                    <p>April 04, 2020</p>
                  </AssetWrap>
                  <AssetWrap>
                    <AssetContainer>
                      <VideoItem src={VideoPlaceholder} alt="Featured Video" />
                    </AssetContainer>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </h3>
                    <p>April 04, 2020</p>
                  </AssetWrap>
                  <AssetWrap>
                    <AssetContainer>
                      <VideoItem src={VideoPlaceholder} alt="Featured Video" />
                    </AssetContainer>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </h3>
                    <p>April 04, 2020</p>
                  </AssetWrap>
                </AssetList>
              </PageContainer>
            </Section>
          </PageContainer>
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default GalleryPage;
