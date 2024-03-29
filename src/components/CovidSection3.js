import React from 'react';
import styled from '@emotion/styled';

import blueline from '../images/blue-line.png';
import Covid1 from '../images/covid-sec-4-img-1.jpg';
import Covid2 from '../images/covid-sec-4-img-2.jpg';
import Covid3 from '../images/covid-sec-4-img-3.jpg';
import Covid4 from '../images/covid-sec-4-img-4.jpg';
import Covid5 from '../images/covid-sec-4-img-5.jpg';

import PageContainer from '../components/PageContainer';
import { downloadFile } from '../helpers';

const Header = styled.div`
  max-width: 35rem;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }
  }
`;
const LeftContainer = styled.div`
  width: 48%;
  a {
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
  a {
    text-decoration: none;
    color: #365899;
  }
`;

const ManilaContactDiv = styled.p`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5px;
`;

const iconStyle = {
  marginTop: 5
};

const CovidSection3 = () => {
  const downloadPDF = () => {
    downloadFile(
      'https://assets.ctfassets.net/7dav9yxqrisj/35WkB5WocSUQFKL7B7Gmgs/bfeadb623be87f3d1210dc610bf24f5f/BEST_PRACTICES.pdf',
      `Manila's Response to COVID-19 Pandemic.pdf`
    );
  };
  return (
    <PageContainer>
      <Header>
        <h1>COVID-19 : What you need to know to protect you and your family</h1>
        <img loading="lazy" src={blueline} alt="blue line" className="line" />
      </Header>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>How to prevent COVID-19</TextHeader>
          <p>
            1. Avoid touching your eyes, nose, and mouth with unwashed hands.
          </p>
          <p>2. Wash your hands thoroughly with soap and water.</p>
          <p>3. Clean and disinfect surfaces such as doorknobs.</p>
          <p>4. Practice social distancing.</p>
          <p>5. Cover your nose and mouth when coughing and sneezing.</p>
        </LeftContainer>
        <RightContainer>
          <ImgContainer
            loading="lazy"
            src={Covid1}
            alt="How to prevent COVID-19"
          />
        </RightContainer>
      </DisplayFlex>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>When to call a doctor</TextHeader>
          <p>
            If you think you are experiencing symptoms related to COVID-19, call
            the MEOC hotline so you can be guided by a medical professional on
            what to do next.
          </p>
          <ManilaContactDiv>
            <ion-icon name="call" style={iconStyle}></ion-icon>
            <p>
              Manila Emergency Operation Center Hotline (MEOC) <br />
              8926-2385 and
              <br />
              8926-2386 <br />
              8527-5174 <br />
              0961-062-7013
            </p>
          </ManilaContactDiv>
        </LeftContainer>
        <RightContainer>
          <ImgContainer
            loading="lazy"
            src={Covid2}
            alt="When else you need to call a doctor"
          />
        </RightContainer>
      </DisplayFlex>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>Please follow MECQ rules</TextHeader>
          <p>
            1. Stay home. Only those classified as essential workers, as well as
            employees of businesses or industries authorized to operate during
            the MECQ, are allowed to leave their homes to go to work.
          </p>
          <p>
            2. Only one person per household is allowed to leave to purchase
            basic necessities such as food and medicine.
          </p>
          <p>
            3. If your Local Government Unit has issued a Quarantine Pass for
            your household, be sure to bring this with you whenever leaving the
            home to purchase essential items.{' '}
          </p>
          <p>
            4. Practice social distancing at all times by standing at least one
            meter away from another individual when outside of the home.{' '}
          </p>
          <p>
            5. Wear a mask when outside the home. This could be in the form of a
            surgical mask, face shield, or handkerchief. The objective is to
            ensure your nose and mouth are covered.{' '}
          </p>
        </LeftContainer>
        <RightContainer>
          <ImgContainer
            loading="lazy"
            src={Covid3}
            alt="Do not break ECQ rules "
          />
        </RightContainer>
      </DisplayFlex>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>Don't forget about mental health</TextHeader>
          <p>
            1. It is normal to feel sad, stressed, confused, or scared during a
            crisis. Talking to people you trust, such as your friends or family,
            can help with mental health.
          </p>
          <p>
            2. Maintain a healthy lifestyle by eating a healthy diet, getting
            adequate hours of sleep, and regular exercise.
          </p>
          <p>
            3. Don't turn to smoking, drugs, or alcohol to deal with your
            emotions. Seek the assistance of a health worker or counselor.
          </p>
          <p>4. Use this time to learn a new skill or take up a hobby.</p>
          <p>
            Source:{' '}
            <a href="https://www.who.int/health-topics/mental-health">WHO</a>
          </p>
        </LeftContainer>
        <RightContainer>
          <ImgContainer
            loading="lazy"
            src={Covid4}
            alt="Don't forget about mental health"
          />
        </RightContainer>
      </DisplayFlex>
      <DisplayFlex>
        <LeftContainer>
          <TextHeader>Stay informed</TextHeader>
          <p>
            In times such as these where there can be considerable information
            in the media, online and offline, on COVID-19, it is important to
            access information from official channels to avoid confusion and
            disinformation.
          </p>
          <LinkStyle>
            <a onClick={downloadPDF}>
              <ManilaContactDiv>
                <ion-icon name="globe-outline" style={iconStyle}></ion-icon>
                Manila's Response to COVID-19 Pandemic
              </ManilaContactDiv>
            </a>
            <a href="https://www.doh.gov.ph">
              <ManilaContactDiv>
                <ion-icon name="globe-outline" style={iconStyle}></ion-icon>
                DOH Official Website
              </ManilaContactDiv>
            </a>

            <a href="https://www.covid19.gov.ph">
              <ManilaContactDiv>
                <ion-icon name="globe-outline" style={iconStyle}></ion-icon>
                Official website of the IATF
                <br />
              </ManilaContactDiv>
            </a>
          </LinkStyle>
        </LeftContainer>
        <RightContainer>
          <ImgContainer loading="lazy" src={Covid5} alt="Stay informed" />
        </RightContainer>
      </DisplayFlex>
    </PageContainer>
  );
};

export default CovidSection3;
