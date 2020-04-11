import React from 'react';
import styled from '@emotion/styled';

import bluebg from '../images/home-section6-bg.png';

const MaxContainer = styled.div`
  background-image: url(${bluebg});
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  max-width: 1170px;
  display: grid;
  text-align: center;
  grid-gap: 20px;
  padding: 50px 0px;
  margin: 0 auto;
`;

const Content = styled.p`
  width: 700px;
  margin: 0 auto;
  text-align: justify;
  color: white;
  @media (max-width: 768px) {
    width: auto;
    padding: 0px 25px;
  }

  @media (max-width: 576px) {
    width: auto;
    padding: 0px 15px;
  }

  span {
    font-family: 'Nunito';
    font-size: 0.9rem;
  }
`;

const ProgramsSection4 = () => {
  return (
    <MaxContainer>
      <Container>
        <Content>
          &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. &quot; <br />
          <span>Mayor Isko Moreno</span>
        </Content>
      </Container>
    </MaxContainer>
  );
};

export default ProgramsSection4;
