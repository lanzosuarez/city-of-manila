import React from 'react';
import styled from '@emotion/styled';

import blueline from '../images/blue-line.png';
import GalleryVideo from '../components/GalleryVideo';
import PageContainer from '../components/PageContainer';
import LearnMore from './LearnMore';

const Header = styled.div`
  max-width: 29rem;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
  text-align: left;

  p:nth-child(1) {
    text-transform: uppercase;
    color: #05326b;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 2px;
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
      height: 100vw;
    }
  }
`;
const RightContainer = styled.div``;
const DisplayFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
  padding: 20px 15px;
  height: 100%;
  /* align-items: center; */

  @media (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: 96vw auto;
    grid-gap: 30px;
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
            <GalleryVideo url="https://www.facebook.com/watch/?v=220490752632700" />
        </LeftContainer>
        <RightContainer>
          <Header>
            <p>You can help us flatten the curve now</p>
            <h1>Take the COVID-19 Digital Health Survey now; your life just might depend on it</h1>
            <img
              loading="lazy"
              src={blueline}
              alt="blue line"
              className="line"
            />
            <p>
              On March 20th, the City of Manila launched the Code COVID-19
              Digital Health Survey.
            </p>
            <p>
              This helpful tool provides Manileños and Filipinos with an easy
              and accessible means to think objectively about their health
              within the COVID-19 context.
            </p>
            <p>
              You can access the survey 24/7 by hitting the “Send Message”
              button on his official Facebook Page.
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
