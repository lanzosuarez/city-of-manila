import React from 'react';
import styled from '@emotion/styled';

import line from "../images/blue-line.png";
import PageContainer from '../components/PageContainer';

const Wrapper = styled.div`
  width: 100%;
`;

const H1Style = {
    lineHeight: '1'
};

const LeftContainer = styled.div`
  width: 90%;
`;
const RightContainer = styled.div`
  width: 10%;
  display: flex;
 justify-content: space-evenly;
`;

const Section = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
`;

const iconStyle = {
    color: '#01bcb1',
    fontSize: '20px',
};

const ArrowStyle = {
    color: 'rgb(0, 0, 0)',
    fontSize: '30px'
};

const pStyle = {
    fontWeight: '800',
    marginBottom: '3px'
};

const LinkStyle = {
    listStyle: 'none',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '900',
    color: 'black',
    marginRight: '3rem'
};

const LinkFlex = styled.div`
  display:flex;
`;



const HomeSection7 = () => {
  return (
    <Wrapper>
        <PageContainer>
            <Section>
                <LeftContainer>
                    <h1 style={H1Style}>Ongoing Programs</h1>
                    <img src={ line } alt="blue line" className="line"/>
                </LeftContainer>
                <RightContainer>
                    <span><ion-icon style={iconStyle} name="apps"></ion-icon></span><p style={pStyle}>View All</p>
                </RightContainer>
            </Section>
            <Section>
                <LeftContainer>
                    <LinkFlex>
                        <a style={LinkStyle} href="#"><p>All</p></a>
                        <a style={LinkStyle} href="#"><p>COVID-19</p></a>
                        <a style={LinkStyle} href="#"><p>Conference</p></a>
                        <a style={LinkStyle} href="#"><p>Meeting</p></a>
                    </LinkFlex>
                </LeftContainer>
                <RightContainer>
                        <span><ion-icon style={ArrowStyle} name="arrow-back-outline"></ion-icon></span>
                        <span><ion-icon style={ArrowStyle} name="arrow-forward-outline"></ion-icon></span>
                </RightContainer>

            </Section>
        </PageContainer>
    </Wrapper>
  );
};

export default HomeSection7;
