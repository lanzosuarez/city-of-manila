import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import useFadeIn from '../hooks/useFadeIn';
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

const CovidSection8 = () => {
  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('covid-section8', { delay: '300ms' });
  }, []);

  return (
    <Wrapper>
      <ContentContainer data-usefadein="covid-section8"> 
        <Section>
          <h1>Actions to Date</h1>
          <img src={line} alt="blue line" className="line" />
          <CovidSection9 />
          <CovidSection10 />
          <CovidSection11 />
          <Footer>
            <Link
              state={{
                tab: 1
              }}
              to="/executive-and-legislation"
            >
              View Executive Order
            </Link>
            <IconCon>
              <ion-icon
                data-icon="icon"
                style={{ color: '#04326a' }}
                name="arrow-forward"
              ></ion-icon>
            </IconCon>
          </Footer>
        </Section>
      </ContentContainer>
    </Wrapper>
  );
};

export default CovidSection8;
