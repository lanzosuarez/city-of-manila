import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';
import bg1 from '../images/home-section-7-img-1.png';
import bg2 from '../images/home-section-7-img-2.png';
import bg3 from '../images/home-section-7-img-3.png';

import PageContainer from '../components/PageContainer';

const Wrapper = styled.div`
  width: 100%;
`;

const H1Style = {
  lineHeight: '1'
};

const LeftContainer = styled.div`
  width: 90%;
  @media only screen and (max-width: 425px) {
    display: block;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    width: 78%;
    margin-bottom: 1rem;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 80%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const RightContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 425px) {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    justify-content: start;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    width: 22%;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 20%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 425px) {
    display: block;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 680px) {
    display: block;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 681px) and (max-width: 1024px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const iconStyle = {
  color: '#01bcb1',
  fontSize: '20px',
  marginRight: '0.2rem'
};

const ArrowStyle = {
  color: 'rgb(0, 0, 0)',
  fontSize: '30px'
};

const ArrowStyle2 = {
  color: 'rgb(0, 0, 0)',
  fontSize: '14px',
  marginLeft: '5px',
  paddingTop: '7px'
};

const pStyle = {
  fontWeight: '800',
  marginBottom: '3px'
};

const LinkStyle = styled.div`
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
  color: black;
  margin-right: 3rem;
  @media only screen and (max-width: 425px) {
    margin-right: 1rem;
    font-size: 12px;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    margin-right: 1rem;
  }
`;

const GridContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Grid = styled.div`
  width: 370px;
  height: 370px;
  position: relative;
  padding: 50px 48px 44px;
  margin-top: 30px;
  transition: all 1s ease;
  /* background: transparent; */
  z-index: 2;

  &::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    opacity: 1;
    z-index: 0;
    top: 0;
    left: 0;
    background-image: ${props => `url(${props.bg})`};
    background-size: cover;
    z-index: 1;
    transition: opacity 500ms ease;
  }

  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 0;
    top: 0;
    left: 0;
    background: white;
    transition: opacity 500ms ease;
  }

  &:hover {
    a {
      max-height: 50px;
    }

    &::after {
      opacity: 1;
      z-index: 2;
    }

    &::before {
      opacity: 0;
      z-index: 1;
    }
    /* background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    ); */
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0), 0 10px 10px rgba(0, 0, 0, 0.11);

    .DateText {
      color: #d4d4d4;
    }
    h1 {
      color: #00335a;
    }
    p {
      color: rgb(0, 0, 0);
    }
  }

  @media only screen and (max-width: 680px) {
    margin: 10px auto 20px;
    width: 100%;
    max-height: 100%;
    padding: 30px 40px;
  }
  @media only screen and (min-width: 681px) and (max-width: 1024px) {
    padding: 30px 30px;
    width: 30%;
    height: 300px;
  }
`;

const GridInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  height: 100%;
  color: white;
  h1 {
    line-height: 1.2;
    margin-bottom: 18px;
    color: white;
  }
  .DateText {
    margin-bottom: 0px;
    text-transform: uppercase;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }

  a {
    max-height: 0;
    transition: max-height 1s;
    text-decoration: none;
    flex-direction: row;
    align-content: center;
    color: black;
    font-size: 14px;
    transition: all 500ms ease;
    overflow: hidden;
  }
`;

const TagConference = styled.div`
  background-color: #e21130;
  padding: 0 24px;
  width: max-content;
  border-radius: 12px;
  color: white;
  font-weight: 800;
  z-index: 3;
  height: 28px;
  font-size: 14px;
  padding-top: 2px;
`;

const TagMeeting = styled.div`
  background-color: #01bcb1;
  padding: 0 24px;
  width: max-content;
  border-radius: 12px;
  color: white;
  font-weight: 800;
  z-index: 3;
  height: 28px;
  font-size: 14px;
  padding-top: 2px;
`;

const TagCovid = styled.div`
  background-color: #05326b;
  padding: 0 24px;
  width: max-content;
  border-radius: 12px;
  color: white;
  font-weight: 800;
  z-index: 3;
  height: 28px;
  font-size: 14px;
  padding-top: 2px;
`;

const LinkFlex = styled.div`
  display: flex;
`;

const HomeSection7 = () => {
  return (
    <Wrapper>
      <PageContainer>
        <div className="section">
          <Section>
            <LeftContainer>
              <h1 style={H1Style}>Ongoing Programs</h1>
              <img src={line} alt="blue line" className="line" />
            </LeftContainer>
            <RightContainer>
              <span>
                <ion-icon style={iconStyle} name="apps"></ion-icon>
              </span>
              <p style={pStyle}>View All</p>
            </RightContainer>
          </Section>
          <Section>
            <LeftContainer>
              <LinkFlex>
                <LinkStyle>All</LinkStyle>
                <LinkStyle>COVID-19</LinkStyle>
                <LinkStyle>Conference</LinkStyle>
                <LinkStyle>Meeting</LinkStyle>
              </LinkFlex>
            </LeftContainer>
            <RightContainer>
              <span>
                <ion-icon
                  style={ArrowStyle}
                  name="arrow-back-outline"
                ></ion-icon>
              </span>
              <span>
                <ion-icon
                  style={ArrowStyle}
                  name="arrow-forward-outline"
                ></ion-icon>
              </span>
            </RightContainer>
          </Section>
          <GridContainer>
            <Grid bg={bg1}>
              <GridContent>
                <TagConference>Conference</TagConference>
                <GridInfo>
                  <p className="DateText">April 04, 2020</p>
                  <h1>Lorem ipsum dolor sitamen</h1>
                  <p>At Manila City</p>
                  <a href="#">
                    Read More
                    <span>
                      <ion-icon
                        style={ArrowStyle2}
                        name="arrow-forward-outline"
                      ></ion-icon>
                    </span>
                  </a>
                </GridInfo>
              </GridContent>
            </Grid>
            <Grid bg={bg2}>
              <GridContent>
                <TagMeeting>Meeting</TagMeeting>
                <GridInfo>
                  <p className="DateText">April 04, 2020</p>
                  <h1>Lorem ipsum dolor sitamen</h1>
                  <p>At Manila City</p>
                  <a href="#">
                    Read More
                    <span>
                      <ion-icon
                        style={ArrowStyle2}
                        name="arrow-forward-outline"
                      ></ion-icon>
                    </span>
                  </a>
                </GridInfo>
              </GridContent>
            </Grid>
            <Grid bg={bg3}>
              <GridContent>
                <TagCovid>COVID-19</TagCovid>
                <GridInfo>
                  <p className="DateText">April 04, 2020</p>
                  <h1>Lorem ipsum dolor sitamen</h1>
                  <p>At Manila City</p>
                  <a href="#">
                    Read More
                    <span>
                      <ion-icon
                        style={ArrowStyle2}
                        name="arrow-forward-outline"
                      ></ion-icon>
                    </span>
                  </a>
                </GridInfo>
              </GridContent>
            </Grid>
          </GridContainer>
        </div>
      </PageContainer>
    </Wrapper>
  );
};

export default HomeSection7;
