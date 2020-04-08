import React from 'react';
import styled from '@emotion/styled';

import blueline from '../images/blue-line.png';
import FbVideo from '../components/FbVideo';
import PageContainer from '../components/PageContainer';

const Header = styled.div`
    max-width: 35rem;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 20px;
    text-align: left;

    p:nth-child(1){
        text-transform: uppercase;
        color: #05326b;
        margin-bottom: 1rem;
        font-weight: 700;
        letter-spacing: 1px;
    }

    a{
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
    width:50%;
    @media (max-width: 768px) {
        width:100%;
      }
`;
const RightContainer = styled.div`
    width:50%;
     @media (max-width: 768px) {
        width:100%;
      }
`;
const DisplayFlex = styled.div`
    display: flex;
    padding: 20px 15px;
    justify-content: center;
    height: 100%;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction:column;
      }
`;


const CovidSection2 = () => {
  return (
    <PageContainer>
        <DisplayFlex>
            <LeftContainer>
                <FbVideo/>
            </LeftContainer>
            <RightContainer>
                <Header>
                    <p>How to Help Manila</p>
                    <h1> Flatten the Curve by Participating in the Digital Health Survey </h1>
                    <img src={blueline} alt="blue line" className="line" />
                    <p>On March 20th, the City of Manila launched the Code Covid-19 Digital Health Survey.</p>
                    <p>This helpful tool provides Manilenos and Filipinos with an easy and accessible means to think objectively about their health within the Covid-19 context.</p>
                    <p>You can access the survey 24x7 by hitting the “Send Message” button on his official FB Page: <a href="https://www.facebook.com/235030693233048/videos/220490752632700/">here</a></p>
                </Header>
            </RightContainer>
        </DisplayFlex>
       
    </PageContainer>
  );
};

export default CovidSection2;
