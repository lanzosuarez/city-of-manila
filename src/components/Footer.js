import React from 'react';
import { Link } from 'gatsby';
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
            I'm on social media, let me hear from you! Reach out to me. 
          </SectionP>
          <img width="60%" alt="mayor signature" src={sign}></img>
        </Section>
        <Section>
          <h4>Services</h4>
          <LinkList>
            <LinkItem>
              <Link to="https://manila.gov.ph/district-hospitals/  ">District Hospitals</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://manila.gov.ph/civil-registry/">Civil Registry</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://manila.gov.ph/social-welfare/">Social Welfare</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://manila.gov.ph/senior-citizens/">Senior Citizens</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://manila.gov.ph/traffic-management/ ">Traffic Management</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://manila.gov.ph/disaster-and-risk-management/ ">Disaster And Risk Management</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://manila.gov.ph/public-services/">Public Services</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://manila.gov.ph/engineering-public-works/">Engineering Public Works</Link>
            </LinkItem>
          </LinkList>
        </Section>
        <Section>
          <h4>National Government</h4>
          <LinkList>
            <LinkItem>
              <Link to="https://doh.gov.ph">Department Of Health</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://dilg.gov.ph">Department Of The Interior And Local Government</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://dotr.gov.ph">Department Of Transportation</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://da.gov.ph">Department Of Agriculture</Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://op-proper.gov.ph">Office Of The President Of The Philippines</Link>
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
