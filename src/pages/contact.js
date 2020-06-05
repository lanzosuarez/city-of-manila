import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import NavigationProvider from '../context/NavigationProvider';
import styled from '@emotion/styled';

import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import ContactForm from '../components/ContactForm';
import HeaderImg from '../images/page-banner-contact.jpg';
import whiteline from '../images/white-line.png';
import contactbg1 from '../images/contact-bg.png';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';

const Wrapper = styled.div`
  width: 100%;
`;

const ContactItem = styled.div`
  width: 370px;
  height: 320px;
  background-image: url(${contactbg1});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-color: #2cabcc;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;

  :hover div:nth-child(1) {
    background-color: #e21130;
  }
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24), 0 6px 6px rgba(0, 0, 0, 0.06);
  }
  h1 {
    color: white;
    margin-bottom: 0.5rem;
    font-size: 30px;
  }
  p {
    font-size: 24px;
    line-height: 1.4;
    color: white;
    margin-bottom: 0.5rem;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
    }
    @media only screen and (min-width: 729px) and (max-width: 1024px) {
      font-size: 18px;
      line-height: 1.5;
    }
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    margin-bottom: 15px;
    height: 231px;
  }
  @media only screen and (min-width: 426px) and (max-width: 728px) {
    width: 100%;
    margin-bottom: 15px;
    height: 215px;
  }
  @media only screen and (min-width: 729px) and (max-width: 1150px) {
    flex-wrap: wrap;
    width: 31%;
  }
`;

const ContactWrap = styled.div`
  align-items: center;
  align-self: center;
  z-index: 2;
`;

const iconStyle = {
  color: 'white',
  fontSize: '27px'
};

const IconBox = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: #05326b;
  padding: 126px;
  clip-path: circle(30.4% at 99% -2%);
`;
const IconItem = styled.div`
  position: absolute;
  right: 16px;
  top: 13px;
`;
const Section = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 728px) {
    flex-direction: column;
    padding: 50px 15px;
  }
  @media only screen and (min-width: 729px) and (max-width: 1024px) {
    padding: 50px 15px;
  }
`;

const Section2 = styled.div`
  padding: 4rem 15px 0rem;
  margin: 0 auto;
  text-align:center;
  p{
    font-size: 24px;
    line-height: 1.5;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px 0px;
  }
`;
const Section3 = styled.div`
  padding: 1rem 15px 0rem;
  margin: 0 auto;
  text-align:center;
  h1{
    font-size: 32px;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 1rem 15px 0px;
    h1{
      font-size: 24px;
    }
  }
`;
const ContactPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="Contact" />
        <Notice />
        <Navigation />
        <Wrapper>
          <PageHeader name="Contact" bg={HeaderImg}/>
          <PageContainer>
          <PageContainer>
            <Section2>
              <p>
              Your City Government works 24/7 for you. During this time of modified enhanced community quarantine, it is best to reach us through our official social media pages or, for further health assistance, please call the Manila Emergency Operation Center <b>8926-2385, 8926-2386, 8527-5174, 
or 0961-062-7013</b>.
              </p>
              </Section2>
            </PageContainer>
            <Section>
              <ContactItem>
                <IconBox className="IconBox" />
                <IconItem>
                  <ion-icon style={iconStyle} name="call"></ion-icon>
                </IconItem>
                <ContactWrap>
                  <h1>Call Us</h1>
                  <p>+ 63 8527 0972</p>
                  <img src={whiteline} alt="white line" />
                </ContactWrap>
              </ContactItem>
              <ContactItem>
                <IconBox />
                <IconItem>
                  <ion-icon style={iconStyle} name="location-sharp"></ion-icon>
                </IconItem>
                <ContactWrap>
                  <h1>Visit Us</h1>
                  <p>
                    Manila City Hall
                    <br />
                    Padre Burgos Avenue
                    <br />
                    Ermita, Manila 1000
                  </p>
                  <img src={whiteline} alt="white line" />
                </ContactWrap>
              </ContactItem>
              <ContactItem>
                <IconBox />
                <IconItem>
                  <ion-icon style={iconStyle} name="business"></ion-icon>
                </IconItem>
                <ContactWrap>
                  <h1>Office Hours</h1>
                  <p>
                    Monday - Friday
                    <br />
                    8:00 AM - 5:00 PM
                  </p>
                  <img src={whiteline} alt="white line" />
                </ContactWrap>
              </ContactItem>
            </Section>
            <Section3>
              <h1>
                Send Us A Message
              </h1>
              <ContactForm/>
            </Section3>
          </PageContainer>
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default ContactPage;
