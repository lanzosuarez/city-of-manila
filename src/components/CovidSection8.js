import React from 'react';
import styled from '@emotion/styled';

import line from '../images/blue-line.png';
import CovidSection9 from '../components/CovidSection9';
import CovidSection10 from '../components/CovidSection10';
import CovidSection11 from '../components/CovidSection11';

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

const CovidSection8 = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Section>
          <h1>Actions to Date</h1>
          <img src={line} alt="blue line" className="line" />
          <Text>
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
          <CovidSection9 />
          <CovidSection10 />
          <CovidSection11 />
        </Section>
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection8;
