import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import NavigationProvider from '../context/NavigationProvider';
import CovidSection1 from '../components/CovidSection1';
import CovidSection2 from '../components/CovidSection2';
import CovidSection3 from '../components/CovidSection3';
import banner from '../images/covid-banner.jpg';
import styled from '@emotion/styled';
import PageContainer from '../components/PageContainer';

const CovidBanner = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
`;

const BannerContainer = styled.div`
  display: flex;
  height: 700px;
  color: white;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 0px 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  h1 {
    font-size: 4rem;
    color: white;
    font-weight: 600;
    @media only screen and (max-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 18px;
    line-height: 2;
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
  :hover a{
    background-color:  #05326b;
    color:white;
    border-radius: 40px;
  }
  @media only screen and (max-width: 768px) {
    width: 145px;
    height: 36px;
    font-size: 12px;
    margin-right:5px;
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
  :hover a{
    background-color:  #05326b;
    color:white;
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
  margin-top: 51px;
  @media only screen and (max-width: 768px) {
    width: 18rem;
  }
`;

const Section = styled.div`
  padding: 4rem 0;
  background-color: white;
`;

const Section2 = styled.div`
  padding: 4rem 0;
  background-color: #fafafa;
`;

const CovidPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="COVID-19" />
        <CovidBanner>
          <PageContainer>
            <BannerContainer>
              <p>
                The most challenging public health challenge of our lifetimes
              </p>
              <h1>We will defeat Covid-19 together</h1>
              <p>
                Covid-19 is the single biggest public health and livelihood
                hurdle of our lifetimes.
              </p>
              <ButtonContainer>
                <Button>
                  <Link to="/contact">Contact</Link>
                </Button>
                <ButtonTracker>      
                  <a  href="https://www.google.com/url?q=https://www.doh.gov.ph/2019-nCoV&sa=D&ust=1586319141649000&usg=AFQjCNHH97WJSAPeduXH9jUtbRw9EB3ccQ">COVID-19 Tracker</a>
                </ButtonTracker>
              </ButtonContainer>
            </BannerContainer>
          </PageContainer>
        </CovidBanner>
        <PageContainer>
          <CovidSection1/>
        </PageContainer>
        <Section2>
          <PageContainer>
            <CovidSection2/>
          </PageContainer>
        </Section2>
        <Section>
          <PageContainer>
            <CovidSection3/>
          </PageContainer>
        </Section>
      </Layout>
    </NavigationProvider>
  );
};

export default CovidPage;
