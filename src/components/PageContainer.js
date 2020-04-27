import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1170px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const PageContainer = ({ children, id = '', ...props }) => {
  return (
    <Container {...props} id={id}>
      {children}
    </Container>
  );
};

export default PageContainer;
