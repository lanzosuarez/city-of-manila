import React from 'react';
import styled from '@emotion/styled';

const MaxContainer = styled.div`
  background-color: #dddddd;
`;

const Container = styled.div`
  max-width: 800px;
  display: grid;
  text-align: center;
  grid-gap: 20px;
  padding: 4rem 15px;
  margin: 0 auto;
`;

const NavWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  @media only screen and (max-width: 425px) {
    h3 {
      font-size: 16px;
      line-height: 1.2;
    }
  }
`;

const NavItemLeft = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 37px auto;
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
  }
  @media only screen and (max-width: 425px) {
    grid-template-columns: 37px 6rem;
  }
`;
const NavItemRight = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 37px;
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
  @media only screen and (max-width: 425px) {
    grid-template-columns: 6rem 37px;
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
            <h3>Program Previous</h3>
          </NavItemLeft>
          <NavItemRight>
            <h3>Program Next</h3>
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
