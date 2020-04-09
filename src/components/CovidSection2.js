import React from 'react';
import styled from '@emotion/styled';

import blueline from '../images/blue-line.png';
import FbVideo from '../components/FbVideo';
import PageContainer from '../components/PageContainer';
import LearnMore from './LearnMore';

const Header = styled.div`
  max-width: 35rem;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
  text-align: left;

  p:nth-child(1) {
    text-transform: uppercase;
    color: #05326b;
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
    color: #05326b;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }
  }
`;
const LeftContainer = styled.div`
  /* height: 300px; */

  iframe {
    height: 500px;
  }

  @media (max-width: 576px) {
    iframe {
      height: 400px;
    }
  }
`;
const RightContainer = styled.div``;
const DisplayFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  padding: 20px 15px;
  height: 100%;
  /* align-items: center; */
`;
const ButtonTracker = styled.div`
  background-color: #05326b;
  color: white;
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
    background-color: #e21130;
    color: #ffffff;

    border-radius: 40px;
  }
  @media only screen and (max-width: 768px) {
    width: 240px;
    height: 36px;
    font-size: 12px;
  }
`;

const CovidSection2 = () => {
  return (
    <PageContainer>
      <DisplayFlex>
        <LeftContainer>
          <FbVideo />
        </LeftContainer>
        <RightContainer>
          <Header>
            <p>Do your part</p>
            <h1> Take the digital health survey. Save a life. </h1>
            <img src={blueline} alt="blue line" className="line" />
            <p>
              On March 20th, the City of Manila launched the Code Covid-19
              Digital Health Survey.
            </p>
            <p>
              This helpful tool provides Manilenos and Filipinos with an easy
              and accessible means to think objectively about their health
              within the Covid-19 context.
            </p>
            <p>
              You can access the survey 24x7 by hitting the “Send Message”
              button on his official FB Page.
            </p>
            <ButtonTracker>
              <a href="http://m.me/iskomorenodomagoso/">Take The Survey</a>
            </ButtonTracker>
          </Header>
        </RightContainer>
      </DisplayFlex>
    </PageContainer>
  );
};

export default CovidSection2;
