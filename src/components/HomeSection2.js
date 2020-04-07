import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import line from '../images/blue-line.png';

const Container = styled.div`
  padding: 100px 70px 100px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  position: relative;

  @media (max-width: 576px) {
    padding: 100px 15px 50px;
    grid-gap: 50px;
  }
`;

const Item = styled.div`
  position: relative;
`;

const OverlayHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 90px;
  font-weight: bolder;
  z-index: 0;
  color: #f5f5f5;
`;

const Header = styled.h2`
  z-index: 1;
  position: relative;
  color: var(--blue);
  padding: 10px 0px 0px 20px;
  margin: 0;
`;

const Content = styled.div`
  padding: 20px 20px 30px;
  font-size: 16px;
  line-height: 2;
`;

const Footer = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: red;
    font-weight: 600;
    font-size: 0.8rem;
    margin-right: 10px;
    transition: color 300ms;
  }

  &:hover {
    a {
      color: black;
    }
    [name='arrow-forward'] {
      color: black !important;
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

const LineImage = styled.img`
  padding-top: 25px;
  margin-left: 21px;
`;

const HomeSection2 = () => {
  return (
    <Container>
      <Item>
        <OverlayHeader>01</OverlayHeader>
        <Header>Executive Orders</Header>
        <LineImage src={line} alt="blue line" />
        <Content>
          Directive issued by the President of the Philippines that manages operations of the national government.
        </Content>
        <Footer>
          <Link>READ MORE</Link>
          <IconCon>
            <ion-icon
              data-icon="icon"
              style={{ color: 'red' }}
              name="arrow-forward"
            ></ion-icon>
          </IconCon>
        </Footer>
      </Item>
      <Item>
        <OverlayHeader>02</OverlayHeader>
        <Header>Legislation</Header>
        <LineImage src={line} alt="blue line" />
        <Content>
          A bill that was proposed and approved by Congress into law to be effective after publication. 
        </Content>
        <Footer>
          <Link>READ MORE</Link>
          <IconCon>
            <ion-icon
              data-icon="icon"
              style={{ color: 'red' }}
              name="arrow-forward"
            ></ion-icon>
          </IconCon>
        </Footer>
      </Item>
      <Item>
        <OverlayHeader>03</OverlayHeader>
        <Header>How To Help Manila</Header>
        <LineImage src={line} alt="blue line" />
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Content>
        <Footer>
          <Link>READ MORE</Link>
          <IconCon>
            <ion-icon
              data-icon="icon"
              style={{ color: 'red' }}
              name="arrow-forward"
            ></ion-icon>
          </IconCon>
        </Footer>
      </Item>
    </Container>
  );
};

export default HomeSection2;
