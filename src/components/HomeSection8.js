import React from 'react';
import styled from '@emotion/styled';

import line from "../images/blue-line.png";
import section8Bg from '../images/section-8-bg.png';

import PageContainer from '../components/PageContainer';

const Wrapper = styled.div`
  width: 100%;
`;

const SectionContainer = styled.div`
  background-image: url(${section8Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top;
`;

const Section = styled.div`
    color:white;
    max-width:500px;
    display:flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    padding: 125px 30px;
`;

const SectionHeader = styled.h1`
    color: white;
    font-size: 42px;
    line-height: 1.4;
`;

const iconStyle = {
    color: 'white',
    fontSize: '30px',
    marginTop: '9px'
};

const IconBox = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ffa537;
    border-radius: 50px;
    margin-top: 10px;
    margin: auto;
`;

const HomeSection8 = () => {
  return (
    <Wrapper>
        <SectionContainer>
            <PageContainer>
                <Section>
                    <SectionHeader> Lorem Ipsum Dolor Sit Ameti </SectionHeader>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div>
                        <IconBox>
                            <ion-icon style={iconStyle} name="caret-forward-outline"></ion-icon>
                        </IconBox>
                    </div>
                </Section>
            </PageContainer>
        </SectionContainer>
    </Wrapper>
  );
};

export default HomeSection8;
