import React from 'react';
import styled from '@emotion/styled';

import blueline from '../images/blue-line.png';
import PageContainer from '../components/PageContainer';


const Header = styled.div`
    max-width: 35rem;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 20px;
`;
const LeftContainer = styled.div`
    width:50%;
`;
const RightContainer = styled.div`
    width:50%;
`;
const DisplayFlex = styled.div`
    display: flex;
    padding: 20px 15px;
`;

const TextHeader = styled.h1`
    font-size: 24px;
`;
const CovidSection3 = () => {
  return (
    <PageContainer>
        <Header>
            <h1> COVID-19 : What you need to know to protect you and your family </h1>
            <img src={blueline} alt="blue line" className="line" />
        </Header>
        <DisplayFlex>
            <LeftContainer>
                <TextHeader>
                    How to prevent COVID-19  
                </TextHeader>
                <p>
                    1. Avoid touching your eyes, nose and mouth with unwashed hands
                </p>
                <p>
                    2. Wash your hands thouroughly with soap and water
                </p>
                <p>
                    3. Clean and diisinfect surfaces such as doorknobs
                </p>
                <p>
                    4. Practice social distancing 
                </p>
                <p>
                    5. Cover your nose and mouth when coughing and sneezing
                </p>
            </LeftContainer>
            <RightContainer>
                Img
            </RightContainer>
        </DisplayFlex>
        <DisplayFlex>
            <LeftContainer>
                <TextHeader>
                    When else you need to call a doctor
                </TextHeader>
                <p>
                    If you think you are experiencing symptoms related to Covid-19, call the MEOC hotline so you can be guided by a medical professional on what to do next.
                </p>
                <p>
                    Manila Emergency Operation Center Hotline (MEOC)<br/>
                    8926-2385 and 8926-2386<br/>
                    8527-5174<br/>
                    0961-062-7013
                </p>
            </LeftContainer>
            <RightContainer>
                Img
            </RightContainer>
        </DisplayFlex>
        <DisplayFlex>
            <LeftContainer>
                <TextHeader>
                    Do not break ECQ rules  
                </TextHeader>
                <p>
                    1. Stay home
                </p>
                <p>
                    2. Only one person per household is allowed to leave to purchase basic necessities such as food and medicine.
                </p>
                <p>
                    3. Practice social distancing at all times.
                </p>
            </LeftContainer>
            <RightContainer>
                Img
            </RightContainer>
        </DisplayFlex>
        <DisplayFlex>
            <LeftContainer>
                <TextHeader>
                    Don't forget about mental health
                </TextHeader>
                <p>
                    1.  It is normal to feel sad, stressed, confused or scared during a crisis. Talking to people you trust can help such as your friends or family.
                </p>
                <p>
                    2. Maintain a healthy lifestyle by eating a healthy diet, getting adequate hours of sleep, and exercise. 
                </p>
                <p>
                    3. Dont' turn to smoking, drugs or alcohol to deal with your emotions. Seek the assistance of a health worker or counsellor. 
                </p>
                <p>
                    4. Use this time to learn a new skill or take up a hobby. 
                </p>
                <p>
                    Source: WHO 
                </p>
            </LeftContainer>
            <RightContainer>
                Img
            </RightContainer>
        </DisplayFlex>
        <DisplayFlex>
            <LeftContainer>
                <TextHeader>
                    Stay informed
                </TextHeader>
                <p>
                    In times such as these where there can be considerable information in the media, online or across social media, on Covid-19, it is important to access information from official channels to avoid confusion and disinformation. 
                </p>
                <p>
                    DOH Official Website <br/>
                    www.doh.gov.ph 
                </p>
                <p>
                    Official website of the IAFT<br/>
                    www.covid19.gov.ph
                </p>
                <p>
                    Official website of the City of Manila<br/>
                    www.manila.gov.ph
                </p>
            </LeftContainer>
            <RightContainer>
                Img
            </RightContainer>
        </DisplayFlex>
    </PageContainer>
  );
};

export default CovidSection3;
