import React from 'react';
import styled from '@emotion/styled';

import pageBg from '../images/about-header.png';

const Container = styled.div`
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: bottom center;
  background-color: #f2f2f4;
  min-height: 360px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
`;

const PageContent = styled.div`
  height: 100%;
  padding: 0px 100px;
  align-items: center;
  max-width: 1170px;

  @media (max-width: 768px) {
    padding: 35px 50px;
  }
  @media (max-width: 576px) {
    padding: 35px 35px;
  }
`;

const HeaderText = styled.h1`
  color: #fefefe;
  font-size: 52px;
  line-height: 52px;
  word-break: break-word;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProgramBanner = props => {
  return (
    <Container bg={pageBg}>
      <PageContent>
        <HeaderText>{props.text}</HeaderText>
      </PageContent>
    </Container>
  );
};

export default ProgramBanner;
