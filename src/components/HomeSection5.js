import React from 'react';
import styled from '@emotion/styled';
import img1 from '../images/home-section5-1.png';
import img2 from '../images/home-section5-2.png';
import sign from '../images/sign.png';
import LearnMore from './LearnMore';

const Container = styled.div`
  padding: 80px 70px 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 300px;
  position: relative;
  background: white;
  grid-gap: 40px;
`;

const Item = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 30px 40px;
`;

const Text = styled.h3`
  color: var(--blue);
  padding-top: 40px;
`;

const SubText = styled.p`
  font-size: 0.8rem;
`;

const Section = styled.div``;

const Section3 = styled.div`
  height: 70%;
  display: flex;
  align-self: center;
  position: relative;
`;

const Sign = styled.img`
  position: absolute;
  bottom: -50px;
`;

const HomeSection5 = () => {
  return (
    <Container>
      <Item>
        <Text>Meet The Man Who Care About Our City</Text>
        <SubText>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </SubText>
        <LearnMore
          text="About"
          textColor="black"
          width="140px"
          letterSpacing="2px"
        />
      </Item>
      <Section>
        <img alt="mayor-isko" src={img1}></img>
      </Section>
      <Section3>
        <img alt="mayor-isko" src={img2}></img>
        <Sign src={sign} />
      </Section3>
    </Container>
  );
};

export default HomeSection5;
