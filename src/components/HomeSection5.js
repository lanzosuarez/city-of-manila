import React from 'react';
import styled from '@emotion/styled';
import img1 from '../images/home-section5-img-1.jpg';
import img2 from '../images/home-section5-img-2.jpg';
import sign from '../images/sign.png';
import LearnMore from './LearnMore';
import line from '../images/blue-line.png';

const Container = styled.div`
  padding: 80px 70px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  position: relative;
  background: white;
  grid-gap: 40px;

  @media (max-width: 576px) {
    padding: 80px 15px 80px;
  }
`;

const Item = styled.div`
  position: relative;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  padding: 0px 0px 30px 40px;
  justify-content: center;
  @media (max-width: 576px) {
    padding: 0;
    height: auto;
  }
`;

const Text = styled.h3`
  color: var(--blue);
  padding-top: 40px;
  font-size: 36px;
  line-height: 56px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SubText = styled.p`
  font-size: 24px;
  line-height: 1.5;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-gap: 20px;
  align-items: center;
`;

const Section3 = styled.div`
  /* display: flex;
  align-self: center; */
  position: relative;
`;

const Sign = styled.img`
  position: absolute;
  bottom: -50px;
  left: 0;
`;

const lineStyle = {
  width: '77px'
};

const HomeSection5 = () => {
  return (
    <Container>
      <Item>
        <Text>Meet Mayor Isko</Text>
        <img src={line} style={lineStyle} alt="blue line" className="line" />
        <SubText>
          "The City of Manila will retake her place as a leading global city,
          with opportunities for all and compassion for everyone."
        </SubText>
        <LearnMore
          to="/about"
          text="About"
          textColor="black"
          width="140px"
          letterSpacing="2px"
        />
      </Item>
      <Section>
        <div>
          <img alt="mayor-isko" src={img1}></img>
        </div>
        <Section3>
          <img alt="mayor-isko" src={img2}></img>
          <Sign src={sign} />
        </Section3>
      </Section>
    </Container>
  );
};

export default HomeSection5;
