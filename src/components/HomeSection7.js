import React from 'react';
import styled from '@emotion/styled';

import line from "../images/blue-line.png";
import section7Img1 from "../images/home-section-7-img-1.png";

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
  justify-content: space-between;
`;

const iconStyle = {
    color: '#01bcb1',
    fontSize: '20px',
};

const ArrowStyle = {
    color: 'rgb(0, 0, 0)',
    fontSize: '30px'
};

const ArrowStyle2 = {
    color: 'rgb(0, 0, 0)',
    fontSize: '20px',
    marginLeft: '10px',
    marginTop: '2px'
};

const pStyle = {
    fontWeight: '800',
    marginBottom: '3px'
};

const LinkStyle2 = {
    listStyle: 'none',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    color: 'black'
};

const LinkStyle = {
    listStyle: 'none',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '900',
    color: 'black',
    marginRight: '3rem'
};

const Grid = styled.div`
    width: 370px;
    height: 370px;
    background-color: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0), 0 10px 10px rgba(0, 0, 0, 0.11);
    padding: 50px 48px 44px;
`;

const GridHeader = styled.h1`
    line-height: 1.2;
    margin-bottom: 18px;
`;

const GridInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: flex-end;
    height: 100%;
`;

const Tag = styled.div`
    background-color: #e21130;
    padding: 0 24px;
    width: max-content;
    border-radius: 12px;
    color: white;
    font-size: 12px;
    font-weight: 800;
`;

const LinkFlex = styled.div`
  display:flex;
`;

const DateText = {
    marginBottom: '0px',
    textTransform: 'uppercase'
};

const HomeSection7 = () => {
  return (
    <Wrapper>
        <PageContainer>
            <div className="section">
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
                <Section>
                    <Grid>
                        <Tag>Conference</Tag>
                    <GridInfo>
                            <p style={DateText}>April 04, 2020</p>
                            <GridHeader>Lorem ipsum dolor sitamen</GridHeader>
                            <p>At Manila City</p>
                            <a href="#" style={LinkStyle2}>Read More<span><ion-icon style={ArrowStyle2} name="arrow-forward-outline"></ion-icon></span></a>
                    </GridInfo>
                    </Grid>
                    <Grid>
                        <Tag>Conference</Tag>
                    <GridInfo>
                            <p style={DateText}>April 04, 2020</p>
                            <GridHeader>Lorem ipsum dolor sitamen</GridHeader>
                            <p>At Manila City</p>
                            <a href="#" style={LinkStyle2}>Read More<span><ion-icon style={ArrowStyle2} name="arrow-forward-outline"></ion-icon></span></a>
                    </GridInfo>
                    </Grid>
                    <Grid>
                        <Tag>Conference</Tag>
                    <GridInfo>
                            <p style={DateText}>April 04, 2020</p>
                            <GridHeader>Lorem ipsum dolor sitamen</GridHeader>
                            <p>At Manila City</p>
                            <a href="#" style={LinkStyle2}>Read More<span><ion-icon style={ArrowStyle2} name="arrow-forward-outline"></ion-icon></span></a>
                    </GridInfo>
                    </Grid>
                </Section>
            </div>
        </PageContainer>
    </Wrapper>
  );
};

export default HomeSection7;
