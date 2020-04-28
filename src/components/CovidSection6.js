import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';

const Wrapper = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
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
  padding: 4rem 0;
  text-align: center;
  h1{
    max-width: 600px;
    margin: 0 auto 1.45rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px;
  }
`;

const CovidSection6 = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Section>
          <h1>City of Manila Covid-19 Response: Rapid and Comprehensive</h1>
          <img src={line} alt="blue line" className="line" />
          <Text>
            <p>
              The City of Manila’s response to the coronavirus pandemic has been
              rapid and comprehensive.
            </p>

            <p>
              On 8 March 2020 the City of Manila created a Special Task Force
              Against the Coronavirus.
            </p>

            <p>
              On March 9 Mayor Isko met with Robert Deane, Head of the United
              Kingdom’s Foreign and Commonwealth Office Coronavirus Task Force
              in London to discuss emerging challenges and best practices.
            </p>

            <p>
              All this in conjunction with key learnings have enabled the City
              of Manila to stay ahead of coronavirus, so far.
            </p>
          </Text>
        </Section>
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection6;
