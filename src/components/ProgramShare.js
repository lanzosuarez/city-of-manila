import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: #fd942b;
`;

const SubContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 25px;

  span {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 10px 15px;
  }
`;

const Icons = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 10px;
`;

const ProgramShare = () => {
  return (
    <Container>
      <SubContainer>
        <span>Share Overview</span>
        <Icons>
          <ion-icon name="mail-outline"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-facebook"></ion-icon>
        </Icons>
      </SubContainer>
    </Container>
  );
};

export default ProgramShare;
