import React from 'react';
import styled from '@emotion/styled';
import sign from '../images/sign-footer.png';

const Container = styled.div`
  width: 100%;
  background: var(--blue);
  color: white;
  display: flex;
  flex-direction: column;
`;

const SectionsContainer = styled.div`
  margin: 60px 100px 40px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 768px) {
    grid-gap: 20px;
    margin: 60px 50px 40px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
  }
`;

const Section = styled.div``;
const SectionP = styled.p`
  font-size: 0.8rem;
`;

const CopyRight = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  background: #051422;
`;

const LinkList = styled.ul`
  list-style: none;
`;

const LinkItem = styled.li`
  font-size: 0.8rem;
  a {
    text-decoration: none;
    color: white;
  }
`;

const GovDetails = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const GovDetailsText = styled.div`
  font-size: 0.7rem;
  display: grid;
  align-items: baseline;
  grid-gap: 10px;
  grid-template-columns: 10px 1fr;
`;

const Footer = () => {
  return (
    <Container>
      <SectionsContainer>
        <Section>
          <h4>City Of Manila</h4>
          <SectionP>
            Connect with us and know about what's the latest happenings in our city.
          </SectionP>
          <img width="60%" alt="mayor signature" src={sign}></img>
        </Section>
        <Section>
          <h4>Services</h4>
          <LinkList>
            <LinkItem>
              <a href="https://manila.gov.ph/district-hospitals/  ">District Hospitals</a>
            </LinkItem>
            <LinkItem>
              <a href="https://manila.gov.ph/civil-registry/">Civil Registry</a>
            </LinkItem>
            <LinkItem>
              <a href="https://manila.gov.ph/social-welfare/">Social Welfare</a>
            </LinkItem>
            <LinkItem>
              <a href="https://manila.gov.ph/senior-citizens/">Senior Citizens</a>
            </LinkItem>
            <LinkItem>
              <a href="https://manila.gov.ph/traffic-management/ ">Traffic Management</a>
            </LinkItem>
            <LinkItem>
              <a href="https://manila.gov.ph/disaster-and-risk-management/ ">Disaster And Risk Management</a>
            </LinkItem>
            <LinkItem>
              <a href="https://manila.gov.ph/public-services/">Public Services</a>
            </LinkItem>
            <LinkItem>
              <a href="https://manila.gov.ph/engineering-public-works/">Engineering Public Works</a>
            </LinkItem>
          </LinkList>
        </Section>
        <Section>
          <h4>National Government</h4>
          <LinkList>
            <LinkItem>
              <a href="https://doh.gov.ph">Department Of Health</a>
            </LinkItem>
            <LinkItem>
              <a href="https://dilg.gov.ph">Department Of The Interior And Local Government</a>
            </LinkItem>
            <LinkItem>
              <a href="https://dotr.gov.ph">Department Of Transportation</a>
            </LinkItem>
            <LinkItem>
              <a href="https://da.gov.ph">Department Of Agriculture</a>
            </LinkItem>
            <LinkItem>
              <a href="https://op-proper.gov.ph">Office Of The President Of The Philippines</a>
            </LinkItem>
          </LinkList>
        </Section>
        <Section>
          <h4>City Government</h4>
          <GovDetails>
            <GovDetailsText>
              <ion-icon name="location-outline"></ion-icon>
              Manila City Hall<br/>Padre Burgos Avenue, Ermita<br/>Manila City 1000 
            </GovDetailsText>
            <GovDetailsText>
              <ion-icon name="call"></ion-icon>
              8527-0972  
            </GovDetailsText>
            <GovDetailsText>
              <ion-icon name="alarm"></ion-icon>
              Monday - Friday: 8:00 am - 5:00 pm
            </GovDetailsText>
          </GovDetails>
        </Section>
      </SectionsContainer>
      <CopyRight>
        Copyright &#169; {new Date().getFullYear()} City Of Manila. All Rights
        Reserved
      </CopyRight>
    </Container>
  );
};

export default Footer;
