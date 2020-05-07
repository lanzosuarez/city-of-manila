import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';

const Wrapper = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 960px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Text = styled.div`
  text-align: justify;
  @media only screen and (max-width: 424px) {
    text-align: center;
  }
`;

const Section = styled.div`
  text-align: center;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px;
  }
  @media only screen and (max-width: 768px){
      h1 {
        font-size: 26px;
    }
  }
   
`;

const CovidSection5 = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Section>
          <h1>The City of Manila: Context and COVID-19 Challenges</h1>
          <img src={line} alt="blue line" className="line" />
          <Text>
            <p>
              The City of Manila occupies the geographic and historic centre of
              the greater Metropolitan Manila Region.
            </p>

            <p>
              In the 1980’s the administrative structure of Metropolitan Manila
              was devolved into 16 separate individual cities and two
              municipalities.
            </p>

            <p>
              The City of Manila is the historic capital of the Philippines.
              Home to the Office of the President of the Philippines, key
              government departments and agencies, the Senate of the
              Philippines, and embassies and offices of international organizations.
            </p>

            <p>
              The City of Manila is also the main international and domestic
              seaport of the Philippines and primary food logistics centre for
              the greater Metro Manila region.
            </p>

            <p>
              Approximately 1.8 million people reside in the City of Manila
              (estimated more than 25 million in the greater Metropolitan Manila
              region).
            </p>

            <p>
              A victim of haphazard urban devolvement, lack of investment and
              other factors have created among the world’s most challenging
              urban fabrics:
            </p>

            <p>
              Estimated 60% of Manila’s residents live below the poverty level.
              Moreover, Manila is the most densely populated city in the world:
              an estimated 70,000 persons per square kilometer in the city’s
              teeming slums.
            </p>

            <p>
              COVID-19 creates challenges previously not encountered in modern
              human history - for any municipal city administration - but
              particularly for The City of Manila where issues of close human
              density, proximity, economy, education, health, and more are the
              most acute.
            </p>
          </Text>
        </Section>
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection5;
