import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';

const Wrapper = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1070px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Text = styled.div`
  text-align: justify;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  text-align: center;
  h1 {
    max-width: 600px;
    margin: 0 auto 1.45rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px;
  }
`;

const CovidSection7 = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Section>
          <h1>City of Manila Code-M Contain, Delay and Mitigate Program</h1>
          <img src={line} alt="blue line" className="line" />
          <Text>
            <p>
              The City of Manila’s Code-M Contain, Delay and Mitigate program
              was initially modeled on the United Kingdom’s response plan,
              however, has been significantly modified to meet our unique
              conditions and challenges.
            </p>

            <p>The overall phases of the plan include:</p>
          <p>
            <strong>Contain:</strong> Leverage best-in-class technologies and
            deploy aggressive on-the-ground community outreach to detect and
            trace cases early on so as to identify persons who need medical
            attention now.
          </p>

          <p>
            <strong>Delay:</strong> Slow the spread of Covid-19 across the City
            of Manila and implement strict but compassionate lockdown measures
            to ensure its slow spread.
          </p>
          </Text>
        </Section>
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection7;
