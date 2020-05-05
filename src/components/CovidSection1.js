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
  a{
    color:#04326a;
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
              Enhanced Community Quarantine:
              <br />
              What You Need To Know
            </InfoTitle>
            <img loading="lazy" alt="blue-line" src={blueline}></img>
          </InfoHeader>
          <InfoContent>
            COVID-19 is a new coronavirus that was first reported in Wuhan,
            China in December 2019. It is known to cause pneumonia-like symptoms
            in infected patients.
          </InfoContent>
          <InfoContent>
            The Philippine Department of Health (DOH) reported the first case in
            the Philippines on 30 January 2020.
          </InfoContent>
          <InfoContent>
            <a href="https://www.doh.gov.ph/doh-press-release/doh-confirms-local-transmission-of-covid-19-in-ph">
                On 07 March 2020, the DOH raised COVID-19 Alert System
            </a> to Code Red Sub-level 1 to initiate efforts to prevent widespread
            community transmission.
          </InfoContent>
          <InfoContent>
            On 08 March 2020, the Office of the President issued Proclamation
            No. 922 s. 2020 declaring a State of Public Health Emergency. The
            proclamation directs the mobilization of necessary resources;
            undertaking of critical, urgent, and appropriate response and
            measures in a timely manner; assistance and cooperation of all
            government agencies and LGUs; and, for all the citizens, residents,
            tourists and establishments to comply with lawful directives and
            advisories, to eliminate and curtail the COVID-19 threat and ensure
            the safety and well-being of everyone.
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
