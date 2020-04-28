import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';
import CovidSection8 from '../components/CovidSection8';
import CovidSection9 from '../components/CovidSection9';

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
`;

const SubText = styled.div`
  text-align: justify;
`;

const Section = styled.div`
  padding: 4rem 0;
  text-align: center;
  h1 {
    max-width: 600px;
    margin: 0 auto 1.45rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px;
  }
`;

const Item = styled.div`
  grid-auto-flow: column;
  display: grid;
  padding-bottom: 10px;
  width: 100%;
  padding-left: 1rem;
`;

const ItemContent = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 35px auto;
  @media only screen and (max-width: 780px) {
      br{
          display:none
      }
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

          <p>
            <strong>Mitigate:</strong> Provide best care possible to residents
            of Manila via a multipronged approach:
          </p>
          </Text>
          <SubText>
          <Item>
            <ItemContent>
              <p>-</p>
              <p>
                Establish a dedicated Manila Infectious Disease Control Centre:
                the first by any Philippine local government unit
              </p>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <p>-</p>
              <p>
                Establish the City of Manila Covid-19 24x7 Emergency Operations
                Centre, the first by any Philippine <br/>local government unit
              </p>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <p>-</p>
              <p>
                Deploy the Philippines’ first municipal Covid-19 digital ID
                system through the “Code-M Covid-19<br/> Digital Health Survey”
              </p>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <p>-</p>
              <p>
                Provide additional personnel, equipment and financial resources
                to hospitals across the City of Manila
              </p>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <p>-</p>
              <p>
                Provide the best care possible for people who become sick and
                increase ability to ensure<br/> patient successful recoveries
              </p>
            </ItemContent>
          </Item>
          <Item>
            <ItemContent>
              <p>-</p>
              <p>
                Minimize economic hardships for all residents with greatest
                emphasis for City of Manila’s poorest through an aggressive
                delivery program of food boxes, rice and emergency cash to all
                households across the City of Manila
              </p>
            </ItemContent>
          </Item>
          </SubText>
          <CovidSection8 />
          <CovidSection9 />
        </Section>
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection7;
