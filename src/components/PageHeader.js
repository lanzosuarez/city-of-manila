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
`;

const HeaderText = styled.h1`
    color: #fefefe;
    font-size: 52px;
    line-height: 52px;
`;

const PageBreadcrumbs = styled.p`
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;
`;

const PageHeader = (props) => {
    return (
     <Container bg={pageBg}>
         <PageContent>
             <HeaderText>{props.name}</HeaderText>
             <PageBreadcrumbs>Home / {props.name}</PageBreadcrumbs>
         </PageContent>
     </Container>
    );
  };
  
  export default PageHeader;