import React from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';

const Container = styled.div`
  background: #05326b;
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

const SinglePageShare = () => {
  return (
    <Container>
      <PageContainer>
        <SubContainer>
          <span>Share Overview</span>
          <Icons>
            <ion-icon name="mail"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
          </Icons>
        </SubContainer>
      </PageContainer>
    </Container>
  );
};

export default SinglePageShare;
