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
  height: 360px;
  margin-bottom: 0px;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const PageContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0px 20px;
    width: 100%;
  }
`;

const HeaderText = styled.h1`
  color: #fefefe;
  font-size: 45px;
  line-height: 1.3;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    line-height: 1.3;
  }
`;

const PageBreadcrumbs = styled.p`
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
`;

const PageHeader = ({ name, bg }) => {
  return (
    <Container bg={bg ? bg : pageBg} >
      <PageContent>
        <HeaderText>{name}</HeaderText>
        <PageBreadcrumbs>Home / {name}</PageBreadcrumbs>
      </PageContent>
    </Container>
  );
};

export default PageHeader;
