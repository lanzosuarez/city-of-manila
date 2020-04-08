import React from 'react';
import styled from '@emotion/styled';

import blueline from '../images/blue-line.png';
import CovidPlaceholder from '../images/covid-placeholder.jpg';

import PageContainer from '../components/PageContainer';

const Header = styled.div`
  max-width: 35rem;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }
  }
`;
const LeftContainer = styled.div`
  width: 50%;
  a{
    text-decoration: none;
    color: #365899;
    }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const DisplayFlex = styled.div`
  display: flex;
  padding: 20px 15px;
  justify-content: center;
  height: 100%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextHeader = styled.h1`
  font-size: 24px;
`;

const ImgContainer = styled.img`
  padding: 20px 4rem;
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;
const LinkStyle = styled.div`
    a{
        text-decoration: none;
        color: #365899;
    }
`;

const iconStyle = {
    marginRight: '5px'
  };
const CovidSection3 = () => {
  return (
    <PageContainer>
      <Header>
        <h1>
          COVID-19 : What you need to know to protect you and your family
        </h1>
        <img src={blueline} alt="blue line" className="line" />
      </Header>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>How to prevent COVID-19</TextHeader>
          <p>1. Avoid touching your eyes, nose and mouth with unwashed hands</p>
          <p>2. Wash your hands thouroughly with soap and water</p>
          <p>3. Clean and diisinfect surfaces such as doorknobs</p>
          <p>4. Practice social distancing</p>
          <p>5. Cover your nose and mouth when coughing and sneezing</p>
        </LeftContainer>
        <RightContainer>
          <ImgContainer src={CovidPlaceholder} alt="How to prevent COVID-19" />
        </RightContainer>
      </DisplayFlex>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>When to call a doctor</TextHeader>
          <p>
            If you think you are experiencing symptoms related to Covid-19, call
            the MEOC hotline so you can be guided by a medical professional on
            what to do next.
          </p>
          <p>
                <span>
                  <ion-icon name="call" style={iconStyle}></ion-icon>
                </span>Manila Emergency Operation Center Hotline (MEOC)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8926-2385 and 8926-2386
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8527-5174
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0961-062-7013
          </p>
        </LeftContainer>
        <RightContainer>
          <ImgContainer
            src={CovidPlaceholder}
            alt="When else you need to call a doctor"
          />
        </RightContainer>
      </DisplayFlex>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>Do not break ECQ rules</TextHeader>
          <p>1. Stay home. Only those classified as essential workers such as doctors, nurses, health and emergency service providers, supermarket and pharmacy staff, and the like, are allowed to leave their homes to go to work.</p>
          <p>
            2. Only one person per household is allowed to leave to purchase basic necessities such as food and medicine.
          </p>
          <p>3. If your Local Government Unit has issued a Quarantine Pass for your household, be sure to bring this with you whenever leaving the home to purchase essential items. </p>
          <p>4. Practice social distancing at all times, by standing at least one meter away from another individual when outside of the home. </p>
          <p>5. Wear a mask when outside of the home. This could be in the form of a surgical mask, face shield, or handkerchief. The objective is to ensure your nose and mouse are covered. </p>
        </LeftContainer>
        <RightContainer>
          <ImgContainer src={CovidPlaceholder} alt="Do not break ECQ rules " />
        </RightContainer>
      </DisplayFlex>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>Don't forget about mental health</TextHeader>
          <p>
            1. It is normal to feel sad, stressed, confused or scared during a
            crisis. Talking to people you trust can help such as your friends or
            family.
          </p>
          <p>
            2. Maintain a healthy lifestyle by eating a healthy diet, getting
            adequate hours of sleep, and exercise.
          </p>
          <p>
            3. Dont' turn to smoking, drugs or alcohol to deal with your
            emotions. Seek the assistance of a health worker or counsellor.
          </p>
          <p>4. Use this time to learn a new skill or take up a hobby.</p>
          <p>Source: <a href="https://www.who.int/health-topics/mental-health">WHO</a></p>
        </LeftContainer>
        <RightContainer>
          <ImgContainer
            src={CovidPlaceholder}
            alt="Don't forget about mental health"
          />
        </RightContainer>
      </DisplayFlex>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>Stay informed</TextHeader>
          <p>
            In times such as these where there can be considerable information
            in the media, online or across social media, on Covid-19, it is
            important to access information from official channels to avoid
            confusion and disinformation.
          </p>
          <LinkStyle>
            <a href="www.doh.gov.ph">
              <p>
                <span>
                  <ion-icon name="globe-outline" style={iconStyle}></ion-icon>
                </span>
                DOH Official Website
              </p>
            </a>

            <a href="www.covid19.gov.ph">
              <p>
                <span>
                  <ion-icon name="globe-outline" style={iconStyle}></ion-icon>
                </span>
                Official website of the IAFT
                <br />
              </p>
            </a>
            <a href="www.manila.gov.ph">
              <p>
                <span>
                  <ion-icon name="globe-outline" style={iconStyle}></ion-icon>
                </span>
                Official website of the City of Manila
                <br />
              </p>
            </a>
          </LinkStyle>
        </LeftContainer>
        <RightContainer>
          <ImgContainer src={CovidPlaceholder} alt="Stay informed" />
        </RightContainer>
      </DisplayFlex>
    </PageContainer>
  );
};

export default CovidSection3;
