import React from 'react';
import styled from '@emotion/styled';

import blueline from '../images/blue-line.png';
import Accordion from './Accordion';

const Container = styled.div`
  background: white;
`;

const SubContainer = styled.div`
  max-width: 1200px;
  margin: 50px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-rows: auto 1fr;
    margin: 50px 50px;
    grid-gap: 30px;
  }
`;

const InfoSection = styled.div`
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
`;

const CovidSection1 = () => {
  return (
    <Container>
      <SubContainer>
        <InfoSection>
          <InfoHeader>
            <InfoTitle>
              Enhanced Community Quarantine: What You Need To Know
            </InfoTitle>
            <img alt="blue-line" src={blueline}></img>
          </InfoHeader>
          <InfoContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </InfoContent>
        </InfoSection>
        <AccordionSection>
          <Accordion />
        </AccordionSection>
      </SubContainer>
    </Container>
  );
};

export default CovidSection1;
