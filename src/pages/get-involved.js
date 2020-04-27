import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import '../styles/about.css';

import line from '../images/blue-line.png';
import placeholder from '../images/get-involved-placeholder2.png';
import Banner from '../images/page-banner-get-involved.jpg';
import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';
import SEO from '../components/SEO';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import scrollToSection from '../hooks/scrollToSection';
import useFadeIn from '../hooks/useFadeIn';

const Wrapper = styled.div`
  width: 100%;
`;

const Section = styled.div`
  display: block;
  position: relative;
  padding: 80px 15px;
`;
const Section1 = styled.div`
  text-align: center;
  background-color: #05326b;
  color: white;
  h1 {
    color: white;
  }
`;
const Section2 = styled.div`
  text-align: center;
  background-color: #fafafa;
`;
const Section2Container = styled.div`
  max-width: 900px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
const Section3 = styled.div``;
const ItemWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 490px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
  @media only screen and (min-width: 491px) and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const Item = styled.div`
  width: 31%;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.06);
  h1 {
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 490px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 491px) and (max-width: 768px) {
    width: 48%;
    margin-bottom: 2rem;
  }
`;
const ButtonTracker = styled.div`
  background-color: #05326b;
  color: white;
  width: 282px;
  height: 54px;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  margin: 3rem auto 0;
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
    background-color: #e21130;
    color: #ffffff;

    border-radius: 40px;
  }
`;
const Content = styled.div`
  padding: 1rem 1.5rem;
  height: 350px;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
  @media only screen and (min-width: 769px) and (max-width: 834px) {
    height: 532px;
  }
  @media only screen and (min-width: 835px) and (max-width: 1048px) {
    height: 26rem;
  }
`;

const GetInvolvedPage = ({ location }) => {
  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('get-involved-section1');
    addElement('get-involved-section2', { delay: '300ms' });
    addElement('get-involved-section3', { delay: '300ms' });
  }, []);

  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Get Involved" />
        <Notice />
        <Navigation />
        <Wrapper>
          <PageHeader name="Get Involved" bg={Banner} />
          <Section1 data-usefadein="get-involved-section1">
            <PageContainer>
              <Section>
                <h1>How you can help Manila</h1>
                <img src={line} alt="blue line" className="line" />
                <p>
                  Mayor Isko calls on everyone in true bayanihan spirit to help
                  Manilenos surivive the current Covid-19 pandemic and once we
                  are out of this period, build a better future for Manila.
                </p>
              </Section>
            </PageContainer>
          </Section1>
          <Section2 data-usefadein="get-involved-section2">
            <Section2Container>
              <Section>
                <h1>Take the Digital Health Survey Now</h1>
                <img src={line} alt="blue line" className="line" />
                <p>
                  Transparent and open sharing of information is critical
                  towards identifying persons who may be at risk for
                  coronavirus.
                </p>
                <p>
                  This helpful tool embedded in Mayor Isko's FB page encourages
                  respondents to think objectively about their health within the
                  Covid-19 context.
                </p>
                <p>
                  Data collected from the survey will help the City of Manila to
                  proactively reach out to you, if you need critical health
                  assistance now.
                </p>
                <ButtonTracker>
                  <a href="http://m.me/iskomorenodomagoso/">Take The Survey</a>
                </ButtonTracker>
              </Section>
            </Section2Container>
          </Section2>
          <Section3 data-usefadein="get-involved-section3">
            <PageContainer>
              <Section>
                <h1 id="how-to-help">How to help</h1>
                <img src={line} alt="blue line" className="line" />
                <ItemWrap>
                  <Item>
                    <img src={placeholder} alt="placeholder" />
                    <Content>
                      <h1>Cash donations in any currency</h1>
                      <p>
                        For online donations, you may deposit through Landbank,
                        account name Landbank of the Philppines Trust Fund with
                        account number 1982-1003-36, any currency will be
                        accepted.
                      </p>
                    </Content>
                  </Item>
                  <Item>
                    <img src={placeholder} alt="placeholder" />
                    <Content>
                      <h1>Cash donations in Philippine currency</h1>
                      <p>
                        For online donations, you may deposit through the
                        Development Bank of the Philippines, account name
                        LGU-MANILA-COVID19 with account number 0-05113-410-5.
                      </p>
                    </Content>
                  </Item>
                  <Item>
                    <img src={placeholder} alt="placeholder" />
                    <Content>
                      <h1>Donate goods and supplies</h1>
                      <p>
                        The city is in need of medical, transportation, and food
                        supplies. Learn more on how to help by emailing us at
                        mayorofmanila@gmail.com or calling us through
                        +63921-966-0384.
                      </p>
                    </Content>
                  </Item>
                </ItemWrap>
              </Section>
            </PageContainer>
          </Section3>
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default GetInvolvedPage;
