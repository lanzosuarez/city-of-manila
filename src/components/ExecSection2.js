import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const ListContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  background: white;
  margin-top: 50px;
  display: grid;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderItem = styled.div`
  /* flex: 1; */
`;

const Figure = styled.h3`
  display: inline;
  margin: 0;
  color: var(--blue);
`;

const iconStyle = {
  color: 'var(--blue)',
  cursor: 'pointer'
};

const ExecSection2 = () => {
  return (
    <Container>
      <ListContainer>
        <Header>
          <HeaderItem>
            <Figure>420</Figure> Legislation
          </HeaderItem>
          <HeaderItem>
            <ion-icon
              style={{ ...iconStyle, marginRight: 10 }}
              size="large"
              name="arrow-back"
            ></ion-icon>
            <ion-icon
              style={iconStyle}
              size="large"
              name="arrow-forward"
            ></ion-icon>
          </HeaderItem>
        </Header>
      </ListContainer>
    </Container>
  );
};

export default ExecSection2;
