import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import NavigationProvider from '../context/NavigationProvider';
import CovidSection1 from '../components/CovidSection1';
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
  @media only screen and (max-width: 425px) {
    width: 100%;
  }

  h1 {
    font-size: 4rem;
    color: white;
    font-weight: 600;
    @media only screen and (max-width: 425px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 18px;
    line-height: 2;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;
const Button = styled.button`
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
  @media only screen and (max-width: 425px) {
    width: 145px;
    height: 36px;
    font-size: 12px;
  }
`;
const ButtonTracker = styled.button`
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
  @media only screen and (max-width: 425px) {
    width: 176px;
    height: 36px;
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27rem;
  margin-top: 51px;
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
                hurdle of our lifetimes.{' '}
              </p>
              <ButtonContainer>
                <Button>Contact</Button>
                <ButtonTracker>COVID-19 Tracker</ButtonTracker>
              </ButtonContainer>
            </BannerContainer>
          </PageContainer>
        </CovidBanner>
        <CovidSection1 />
      </Layout>
    </NavigationProvider>
  );
};

export default CovidPage;
