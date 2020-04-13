import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const SearchContainer = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 800px;
  margin: 0 auto;
  background: white;
  margin-top: -40px;
  padding: 30px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 768px) {
    width: 90%;
    margin-top: -40px;
    grid-gap: 20px;
  }

  @media (max-width: 576px) {
    width: 90%;
    padding: 20px 15px;
  }
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
`;

const Category = styled.h4`
  margin: 0;
  color: #9a9999;
`;

const Filters = styled.div`
  display: grid;
  justify-items: flex-end;
  align-items: center;
  grid-auto-flow: column;

  @media (max-width: 768px) {
    justify-items: start;
  }
`;

const SearchCon = styled.div`
  display: flex;
  align-items: center;

  h5 {
    font-weight: 600;
  }
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  background: #ededed;
  padding: 5px;
  font-size: 0.7rem;
  padding: 5px 10px;
  border-radius: 5px;
`;

const iconStyle = {
  cursor: 'pointer',
  color: '#1ab1a2'
};

const ExecSection1 = () => {
  return (
    <Container>
      <SearchContainer>
        <Categories>
          <Category>All</Category>
          <Category>Executive Orders</Category>
          <Category>Legislation</Category>
        </Categories>
        <Filters>
          <SearchCon>
            <ion-icon
              style={{ ...iconStyle, marginRight: 10 }}
              name="calendar"
            ></ion-icon>
            <h5 style={{ margin: 0 }}>Date</h5>
          </SearchCon>
          <SearchCon>
            <ion-icon
              style={{ ...iconStyle, marginRight: 10 }}
              name="search"
            ></ion-icon>
            <SearchInput placeholder="Keyword" type="text"></SearchInput>
          </SearchCon>
        </Filters>
      </SearchContainer>
    </Container>
  );
};

export default ExecSection1;
