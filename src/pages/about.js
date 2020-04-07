import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import '../styles/about.css';

import line from '../images/blue-line.png';
import imgSection2 from '../images/about-section-2.png';
import imgSection2Quote from '../images/about-section-2-quote-box.png';
import section3Bg from '../images/about-section-3.png';
import itemImg from '../images/team-placeholder.png';
import section5Bg from '../images/about-section-5.png';
import section5Img from '../images/about-section-5-img.png';
import whiteline from '../images/white-line.png';

import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';
import SEO from '../components/seo';

const Wrapper = styled.div`
  width: 100%;
`;

const LeftContainer = styled.div`
  width: 39%;
  padding: 15px;
  margin: 0px 30px 0px 0px;
  text-align: left;
  align-self: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;
const RightContainer = styled.div`
  width: 61%;
  min-height: 1px;
  padding: 15px;
  align-self: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const QuoteStyle = styled.img`
  position: relative;
  width: 100%;
  max-width: 450px;
  @media only screen and (max-width: 425px) {
    max-width: 100%;
  }
`;

const QuoteStyleBox = styled.img`
  position: absolute;
  top: 184px;
  right: 0px;
  max-width: 300px;
  width: 100%;
  @media only screen and (max-width: 425px) {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    top: 14px;
    right: 0;
    display: block;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    top: 32rem;
    bottom: 40rem;
    width: 100%;
    right: 15px;
  }
`;

const Section3Container = styled.div`
  background-image: url(${section3Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
`;

const textWidth = {
  paddingRight: '15px',
  paddingLeft: '15px'
};

const Section3 = styled.div`
  padding: 4rem 0;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px;
  }
`;

const Section4Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 0px;
  @media only screen and (max-width: 425px) {
    justify-content: center;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    justify-content: space-evenly;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    justify-content: space-evenly;
    margin: 0px 15px;
  }
`;

const Section4Item = styled.div`
  display: block;
  width: 260px;
  background-color: white;
  box-shadow: 6px 5px 14px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  margin-top: 20px;

  @media only screen and (min-width: 426px) and (max-width: 1024px) {
    width: 336px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1439px) {
    width: 236px;
  }
`;

const ItemWrap = styled.div`
  padding: 30px 30px 10px 30px;
`;

const ItemText = styled.p`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 700;
  color: #e21130;
  text-transform: uppercase;
`;

const ItemTextHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 20px;
`;

const Section5Container = styled.div`
  background-image: url(${section5Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
`;

const iconStyle = {
  color: 'white',
  fontSize: '40px',
  marginRight: '30px'
};

const Section5ImgContent = styled.div`
  padding: 4rem 0px;
  @media only screen and (max-width: 425px) {
    padding: 4rem 0px 0 0;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    padding: 50px 10px 0px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const Section5Social = styled.div`
  padding: 100px;
  @media only screen and (max-width: 425px) {
    padding: 1rem 15px 4rem;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    padding: 20px 50px 50px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 20px 20px 50px 0px;
  }
`;

const AboutPage = ({ location }) => {

  useEffect(() => {
    const { hash } = location;
    if (hash.length) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <NavigationProvider>
      <Layout>
        <SEO title="About" />
        <Wrapper>
          <PageHeader />
          <PageContainer id="mayor-profile">
            <div className="section">
              <div className="section-container">
                <LeftContainer>
                  <h1> Meet The Man Who Care About Our City </h1>
                  <img src={line} alt="blue line" className="line" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitationquat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </LeftContainer>
                <RightContainer>
                  <QuoteStyle
                    src={imgSection2}
                    alt="Meet The Man Who Care About Our City"
                  />
                  <QuoteStyleBox src={imgSection2Quote} alt="From Mayor Isko" />
                </RightContainer>
              </div>
            </div>
          </PageContainer>
          <Section3Container>
            <PageContainer id="background">
              <Section3>
                <h1> Background </h1>
                <img src={line} alt="blue line" className="line" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Section3>
            </PageContainer>
          </Section3Container>
          <PageContainer id="leadership-team">
            <div className="section">
              <div className="center">
                <h1 style={textWidth}> His Leadership Team </h1>
                <img src={line} alt="blue line" className="line" />
                <p style={textWidth}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{' '}
                </p>
              </div>
              <Section4Container>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
              </Section4Container>
            </div>
          </PageContainer>
          <Section5Container>
            <PageContainer id="links-to-social-media">
              <div className="section">
                <div className="section-container">
                  <LeftContainer>
                    <Section5ImgContent>
                      <img
                        src={section5Img}
                        alt="blue line"
                        className="Mayor Isko Moreno"
                      />
                    </Section5ImgContent>
                  </LeftContainer>
                  <RightContainer>
                    <Section5Social>
                      <h1 className="white"> His Links To Social Media </h1>
                      <img src={whiteline} alt="white line" className="line" />
                      <p className="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor{' '}
                      </p>
                      <ion-icon
                        style={iconStyle}
                        name="logo-facebook"
                      ></ion-icon>
                      <ion-icon
                        style={iconStyle}
                        name="logo-twitter"
                      ></ion-icon>
                      <ion-icon
                        style={iconStyle}
                        name="logo-instagram"
                      ></ion-icon>
                    </Section5Social>
                  </RightContainer>
                </div>
              </div>
            </PageContainer>
          </Section5Container>
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default AboutPage;
