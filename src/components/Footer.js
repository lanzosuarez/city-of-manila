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
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: 10px 1fr;
`;

const Footer = () => {
  return (
    <Container>
      <SectionsContainer>
        <Section>
          <h4>Lorem Ipsum</h4>
          <SectionP>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took.
          </SectionP>
          <img width="60%" alt="mayor signature" src={sign}></img>
        </Section>
        <Section>
          <h4>Service Links</h4>
          <LinkList>
            <LinkItem>
              <Link>Service Link</Link>
            </LinkItem>
            <LinkItem>
              <Link>Service Link</Link>
            </LinkItem>
            <LinkItem>
              <Link>Service Link</Link>
            </LinkItem>
            <LinkItem>
              <Link>Service Link</Link>
            </LinkItem>
            <LinkItem>
              <Link>Service Link</Link>
            </LinkItem>
          </LinkList>
        </Section>
        <Section>
          <h4>Governments Links</h4>
          <LinkList>
            <LinkItem>
              <Link>Government Link</Link>
            </LinkItem>
            <LinkItem>
              <Link>Government Link</Link>
            </LinkItem>
            <LinkItem>
              <Link>Government Link</Link>
            </LinkItem>
            <LinkItem>
              <Link>Government Link</Link>
            </LinkItem>
            <LinkItem>
              <Link>Government Link</Link>
            </LinkItem>
          </LinkList>
        </Section>
        <Section>
          <h4>City Government</h4>
          <GovDetails>
            <GovDetailsText>
              <ion-icon name="location-outline"></ion-icon>
              Padre Burgos Ave, Ermita, Manila, 1000 Metro Manil
            </GovDetailsText>
            <GovDetailsText>
              <ion-icon name="call"></ion-icon>
              +63 000 000
            </GovDetailsText>
            <GovDetailsText>
              <ion-icon name="alarm"></ion-icon>
              Mon - Fri: 8:00 am - 6:00 pm
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
