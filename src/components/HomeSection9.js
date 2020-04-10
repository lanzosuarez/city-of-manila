import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';
import section9Img1 from '../images/section-9-img-1.png';
import section9Img2 from '../images/section-9-img-2.png';
import section9Img3 from '../images/section-9-img-3.png';
import section9Img4 from '../images/section-9-img-4.png';

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
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    width: 72%;
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
    display: -webkit-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    width: 23%;
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 425px) {
    display: block;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 426px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const iconStyle = {
  color: '#01bcb1',
  fontSize: '20px',
  marginRight: ' 0.5rem',
  marginTop: '3px'
};

const pStyle = {
  fontWeight: '800',
  marginBottom: '3px'
};

const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 360px;
  position: relative;
  width: 270px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.5s ease;
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24), 0 6px 6px rgba(0, 0, 0, 0.06);
  }
  @media only screen and (max-width: 425px) {
    margin: 20px auto;
  }
  @media only screen and (min-width: 426px) and (max-width: 728px) {
    margin: 20px auto;
  }
  @media only screen and (min-width: 729px) and (max-width: 1024px) {
    margin: 30px auto;
  }
`;

const CardContent = styled.div`
  width: 200px;
  margin: 0 auto;
  height: 150px;
  overflow-y: hidden;
  margin-bottom: 20px;
  margin-top: 5px;
`;

const CardHeader = styled.h3`
  line-height: 1.3;
  color: #2d2d2d;
  font-size: 24px;
  font-weight: 800;
`;

const DateContent = styled.div`
  height: 50px;
  display: flex;
  padding: 15px 40px;
  border-top: 1px solid #e1e1e1;
`;

const DateStyle = styled.p`
  margin-bottom: 0px;
  align-self: center;
  color: #04326a;
  font-weight: 800;
`;

const HomeSection9 = () => {
  return (
    <Wrapper>
      <PageContainer>
        <div className="section">
          <Section>
            <LeftContainer>
              <h1 style={H1Style}>Latest Updates</h1>
              <img src={line} alt="blue line" className="line" />
              <p>Lorem ipsum dolor sit amet</p>
            </LeftContainer>
            <RightContainer>
              <span>
                <ion-icon style={iconStyle} name="apps"></ion-icon>
              </span>
              <p style={pStyle}>View All</p>
            </RightContainer>
          </Section>
          <CardContainer>
            <Card>
              <img src={section9Img1} alt="Latest Update" className="line" />
              <CardContent>
                <CardHeader>
                  Lorem ipsum dolor sit amet
                </CardHeader>
              </CardContent>
              <DateContent>
                <DateStyle>April 04, 2020</DateStyle>
              </DateContent>
            </Card>
            <Card>
              <img src={section9Img2} alt="Latest Update" className="line" />
              <CardContent>
                <CardHeader>
                  Lorem ipsum dolor sit amet
                </CardHeader>
              </CardContent>
              <DateContent>
                <DateStyle>April 04, 2020</DateStyle>
              </DateContent>
            </Card>
            <Card>
              <img src={section9Img3} alt="Latest Update" className="line" />
              <CardContent>
                <CardHeader>
                  Lorem ipsum dolor sit amet
                </CardHeader>
              </CardContent>
              <DateContent>
                <DateStyle>April 04, 2020</DateStyle>
              </DateContent>
            </Card>
            <Card>
              <img src={section9Img4} alt="Latest Update" className="line" />
              <CardContent>
                <CardHeader>
                  Lorem ipsum dolor sit amet
                </CardHeader>
              </CardContent>
              <DateContent>
                <DateStyle>April 04, 2020</DateStyle>
              </DateContent>
            </Card>
          </CardContainer>
        </div>
      </PageContainer>
    </Wrapper>
  );
};

export default HomeSection9;
