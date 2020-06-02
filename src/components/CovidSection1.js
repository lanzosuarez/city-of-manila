import React from 'react';
import styled from '@emotion/styled';

import blueline from '../images/blue-line.png';
import Accordion from './Accordion';

const Container = styled.div`
  background: white;
`;

const SubContainer = styled.div`
  margin: 4rem 0px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-rows: auto 1fr;
    margin: 50px 50px;
    grid-gap: 30px;
  }

  @media (max-width: 576px) {
    margin: 15px 15px;
  }

  @media (max-width: 350px) {
    margin: 15px 10px;
  }
`;

const InfoSection = styled.div`
  /* align-self: center; */
  @media (max-width: 768px) {
    grid-column: span 3;
  }
`;
const AccordionSection = styled.div`
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-row: 2;
    grid-column: span 3;
  }
`;

const InfoHeader = styled.div``;

const InfoTitle = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: var(--blue);
`;

const InfoContent = styled.p`
  margin: 0;
  padding-top: 20px;
  a {
    color: #04326a;
  }
  @media (max-width: 768px) {
   br{
     display:none;
   }
  }
`;

const Footer = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #04326a;
    font-weight: 700;
    font-size: 20px;
    margin-right: 10px;
    transition: color 300ms;
  }

  &:hover {
    a {
      color: #e21130;
    }
    [name='arrow-forward'] {
      color: #e21130 !important;
    }
    span {
      transform: translateX(10px);
    }
  }
`;
const IconCon = styled.span`
  display: flex;
  align-items: center;
  transition: transform 300ms;
  cursor: pointer;
`;

const CovidSection1 = () => {
  return (
    <Container>
      <SubContainer>
        <InfoSection>
          <InfoHeader>
            <InfoTitle>
              Modified Enhanced Community Quarantine:
              <br />
              What You Need To Know
            </InfoTitle>
            <img loading="lazy" alt="blue-line" src={blueline}></img>
          </InfoHeader>
          <InfoContent>
            The Modified Enhanced Community Quarantine:<br/>What You Need to Know
            <br /> 15th May 2020
          </InfoContent>
          <InfoContent>
            The evolution of the Enhanced Community Quarantine (ECQ) to
            “Modified Enhanced Community Quarantine (MECQ)” status represents a
            deliberately phased approach to carefully reopening Philippine
            economic and social life in areas where COVID-19 growth continues to
            be worrisome.
          </InfoContent>
          <InfoContent>
            The seventeen cities which comprise Metro Manila – including the
            capital City of Manila – have the highest concentration of COVID-19
            cases in the Philippines. The National Capital Region (NCR) was
            declared by the Office of the President of the Philippines and the
            IATF to be under MECQ from 16 – 31 May 2020.
          </InfoContent>
          <InfoContent>
            To date, the City of Manila has been able to stay ahead of the virus
            due to a powerful combination of robust policy, investments in and
            deployment of latest technologies, extensive on-the-ground
            operations, and meticulous day-to-day management and clear and
            concise public communications by Mayor Isko and his crisis
            management team.
          </InfoContent>
          <InfoContent>
            The City of Manila shall continue prosecuting the war against
            COVID-19 to save as many lives as possible while equally seeking to
            save as many livelihoods as possible. This will only occur by
            enabling industry, small and medium-size business and other
            value-creating activities to restart within a heightened health and
            safety Covid-19 context. The MECQ is the first, early phase towards
            crafting our shared "New Normal".
          </InfoContent>
          <Footer>
            <a href="https://www.officialgazette.gov.ph/downloads/2020/02feb/20200308-PROC-922-RRD-1.pdf">
              View Proclamation No. 922
            </a>
            <IconCon>
              <ion-icon
                data-icon="icon"
                style={{ color: '#04326a' }}
                name="arrow-forward"
              ></ion-icon>
            </IconCon>
          </Footer>
        </InfoSection>
        <AccordionSection>
          <Accordion />
        </AccordionSection>
      </SubContainer>
    </Container>
  );
};

export default CovidSection1;
