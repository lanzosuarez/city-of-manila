import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import '../styles/about.css';

import line from '../images/blue-line.png';
import placeholder from '../images/get-involved-placeholder.png';
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
`;
const iconStyle = {
  fontSize: '20px',
  marginRight: '10px'
};
const DonateButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffa537;
  padding: 15px;
`;

const ButtonText = styled.p`
  margin-bottom: 0px;
  letter-spacing: 2px;
  text-transform: uppercase;
  align-items: center;
  display: flex;
  height: 100%;
`;

const GetInvolvedPage = ({ location }) => {
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
          <PageHeader name="Get Involved" />
          <Section1>
            <PageContainer>
              <Section>
                <h1>Duis aute irure dolor in reprehenderit</h1>
                <img src={line} alt="blue line" className="line" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Section>
            </PageContainer>
          </Section1>
          <Section2>
            <PageContainer>
              <Section>
                <h1>Excepteur sint occaecat cupidatat non proident</h1>
                <img src={line} alt="blue line" className="line" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
                <ButtonTracker>
                  <a href="http://m.me/iskomorenodomagoso/">Take The Survey</a>
                </ButtonTracker>
              </Section>
            </PageContainer>
          </Section2>
          <Section3>
            <PageContainer>
              <Section>
                <h1>Duis aute irure dolor in reprehenderit</h1>
                <img src={line} alt="blue line" className="line" />
                <ItemWrap>
                  <Item>
                    <img src={placeholder} alt="placeholder" />
                    <Content>
                      <h1>Lorem ipsum dolor sit amet ad minim veniam</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </p>
                    </Content>
                    <DonateButton>
                      <a href="#">
                        <ButtonText>
                          <ion-icon
                            style={iconStyle}
                            name="caret-forward-outline"
                          />
                          Donate
                        </ButtonText>
                      </a>
                    </DonateButton>
                  </Item>
                  <Item>
                    <img src={placeholder} alt="placeholder" />
                    <Content>
                      <h1>Lorem ipsum dolor sit amet ad minim veniam</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </p>
                    </Content>
                    <DonateButton>
                      <a href="#">
                        <ButtonText>
                          <ion-icon
                            style={iconStyle}
                            name="caret-forward-outline"
                          />
                          Donate
                        </ButtonText>
                      </a>
                    </DonateButton>
                  </Item>
                  <Item>
                    <img src={placeholder} alt="placeholder" />
                    <Content>
                      <h1>Lorem ipsum dolor sit amet ad minim veniam</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </p>
                    </Content>
                    <DonateButton>
                      <a href="#">
                        <ButtonText>
                          <ion-icon
                            style={iconStyle}
                            name="caret-forward-outline"
                          />
                          Donate
                        </ButtonText>
                      </a>
                    </DonateButton>
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
