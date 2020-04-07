import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    max-width: 1170px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    vertical-align: baseline;
`;

const PageContainer = ({ children }) => {
    return (
     <Container>
         {children}
     </Container>
    );
  };
  
  export default PageContainer;