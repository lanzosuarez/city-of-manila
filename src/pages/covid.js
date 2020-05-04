import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useFadeIn from '../hooks/useFadeIn';
import '../styles/covid.css';
import NavigationProvider from '../context/NavigationProvider';
import CovidSection1 from '../components/CovidSection1';
import CovidSection2 from '../components/CovidSection2';
import CovidSection3 from '../components/CovidSection3';
import CovidSection5 from '../components/CovidSection5';
import CovidSection6 from '../components/CovidSection6';
import CovidSection7 from '../components/CovidSection7';
import CovidSection8 from '../components/CovidSection8';
import banner from '../images/covid-banner.jpg';
import styled from '@emotion/styled';
import PageContainer from '../components/PageContainer';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import scrollToSection from '../hooks/scrollToSection';
import covidbg from '../images/covid-bg.png';

const CovidBanner = styled.div`
  width: 100%;
  /* height: 700px; */
  padding: 100px 80px;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;

  @media (max-width: 1024px) {
    padding: 80px 60px;
  }

  @media (max-width: 768px) {
    padding: 60px 40px;
  }

  @media (max-width: 576px) {
    padding: 40px 20px;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  /* height: 700px; */
  color: white;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding: 0px 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 0px;
  }

  h1 {
    font-size: 3.8rem;
    color: white;
    line-height: 70px;
    font-weight: 600;
    @media only screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 1.3;
    }
  }

  p {
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 12px;
    @media only screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;

const Button = styled.div`
  background-color: #f3a81b;
  color: #051422;
  width: 179px;
  height: 54px;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  text-transform: uppercase;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  a {
    display: flex;
    height: 100%;
    text-decoration: none;
    color: #051422;
    align-items: center;
    justify-content: center;
  }
  :hover a {
    background-color: #05326b;
    color: white;
    border-radius: 40px;
  }
  @media only screen and (max-width: 768px) {
    width: 145px;
    height: 36px;
    font-size: 12px;
    margin-right: 5px;
  }
`;
const ButtonTracker = styled.div`
  background-color: #e21130;
  color: #ffffff;
  width: 282px;
  height: 54px;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  text-transform: uppercase;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  a {
    display: flex;
    height: 100%;
    text-decoration: none;
    color: white;
    align-items: center;
    justify-content: center;
  }
  :hover a {
    background-color: #05326b;
    color: white;
    border-radius: 40px;
  }
  @media only screen and (max-width: 768px) {
    width: 240px;
    height: 36px;
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27rem;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    width: 17rem;
  }
`;

const Section = styled.div`
  padding: 4rem 0;
  background-color: #f8f8f8;
`;

const Section2 = styled.div`
  padding: 4rem 0;
  background-color: white;
`;
const Section1 = styled.div`
  padding: 4rem 0;
  background-color: #f8f8f8;
`;
const Section4 = styled.div`
  padding: 4rem 0;
  background-image: url(${covidbg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom center;
`;

const CovidPage = ({ location }) => {
  useEffect(() => scrollToSection(location), []);

  const [addElement] = useFadeIn();
  useEffect(() => {
    addElement('covid-section1', { dir: 'down' });
    addElement('covid-section2', { delay: '300ms' });
    addElement('covid-section3', { delay: '300ms' });
    addElement('covid-section4', { delay: '300ms' });
    addElement('covid-section5', { delay: '300ms' });
    addElement('covid-section6', { delay: '300ms' });
    addElement('covid-section7', { delay: '300ms' });
  }, []);

  return (
    <NavigationProvider>
      <Layout>
        <SEO title="COVID-19" />
        <Notice />
        <Navigation />
        <CovidBanner>
          <PageContainer>
            <BannerContainer data-usefadein="covid-section1">
              <p>The most difficult public health challenge of our lifetime</p>
              <h1>We will defeat Covid-19 together</h1>
              <p>
                Covid-19 is the single biggest public health and livelihood
                hurdle of our lifetimes.
              </p>
              <p>
                While much of the day and night life of our city has come to a
                temporary stop, we do not stop. The City Government of Manila
                continues, 24x7. We will not stop, until we win the war against
                Covid -19.
              </p>
              <p>Let us beat Covid-19 together. Bangon, Manila!</p>
              <ButtonContainer>
                <Button>
                 <Link to="/contact">Contact</Link>
                </Button>
                <ButtonTracker>
                  <a href="https://covid19stats.ph/">COVID-19 Tracker</a>
                </ButtonTracker>
              </ButtonContainer>
            </BannerContainer>
          </PageContainer>
        </CovidBanner>
        <Section1>
          <PageContainer id="digital-survey" data-usefadein="covid-section2">
            <CovidSection2 />
          </PageContainer>
        </Section1>
        <Section2>
          <PageContainer id="ecq" data-usefadein="covid-section3">
            <CovidSection1 />
          </PageContainer>
        </Section2>
        <Section>
          <PageContainer id="what-you-need-to-know" data-usefadein="covid-section4">
            <CovidSection3 />
          </PageContainer>
        </Section>
        <Section4>
          <PageContainer id="manila's-response" data-usefadein="covid-section5">
            <CovidSection5 />
          </PageContainer>
        </Section4>
        <Section>
          <PageContainer data-usefadein="covid-section6">
            <CovidSection6 />
          </PageContainer>
        </Section>
        <Section4>
          <PageContainer data-usefadein="covid-section7">
            <CovidSection7 />
            <CovidSection8 />
          </PageContainer>
        </Section4>
      </Layout>
    </NavigationProvider>
  );
};

export default CovidPage;
