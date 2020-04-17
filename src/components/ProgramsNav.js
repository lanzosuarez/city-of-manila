import React from 'react';
import styled from '@emotion/styled';

const MaxContainer = styled.div`
  background-color: #dddddd;
`;

const Container = styled.div`
  display: grid;
  text-align: center;
  grid-gap: 20px;
  margin: 0 auto;
`;

const NavWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  align-items: center;
  @media only screen and (max-width: 425px) {
    h3 {
      font-size: 12px;
      line-height: 1.2;
    }
  }
  h3{
    margin-bottom: 0px;
  }
`;

const NavItemLeft = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 10% 90%;
  height: 100%;
  align-items: center;
  background-color: #e5e5e5;
  padding: 1.5rem;
  &:hover {
    a {
      color: black;
    }
    [name='arrow-forward'] {
      color: black !important;
    }
    span {
      transform: translateX(-10px);
    }
    background-color: #ffa537;
  }
  @media only screen and (max-width: 425px) {
    grid-template-columns: 20% 70%;
    grid-column-gap: 5px;
`;
const NavItemRight = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 90% 10%;
  height: 100%;
  align-items: center;
  background-color: #dddddd;
  padding: 1.5rem;
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
    background-color: #ffa537;
  }
  @media only screen and (max-width: 425px) {
    grid-template-columns: 70% 20%;
    grid-column-gap: 5px;
  }
`;

const iconStyle = {
  color: '#05326b',
  fontSize: '2rem',
  marginRight: '30px'
};
const IconCon = styled.span`
  transition: transform 300ms;
  cursor: pointer;
`;

const ProgramsNav = () => {
  return (
    <MaxContainer>
      <Container>
        <NavWrap>
          <NavItemLeft>
            <IconCon>
              <a href="">
                <ion-icon
                  style={iconStyle}
                  name="arrow-back-outline"
                ></ion-icon>
              </a>
            </IconCon>
            <h3>Previous Program</h3>
          </NavItemLeft>
          <NavItemRight>
            <h3>Next Program</h3>
            <IconCon>
              <a href="">
                <ion-icon
                  style={iconStyle}
                  name="arrow-forward-outline"
                ></ion-icon>
              </a>
            </IconCon>
          </NavItemRight>
        </NavWrap>
      </Container>
    </MaxContainer>
  );
};

export default ProgramsNav;
