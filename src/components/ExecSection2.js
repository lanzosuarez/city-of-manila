import React from 'react';
import styled from '@emotion/styled';

import placeholder from '../images/team-placeholder.png';

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
  padding: 20px 0px;
  grid-gap: 30px;

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

const List = styled.div`
  display: grid;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 170px 1fr;
  height: 200px;
  grid-gap: 10px;
  padding-bottom: 40px;
  border-bottom: 2px solid #efefef;
`;

const Avatar = styled.img`
  height: 100%;
`;

const Details = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: auto 1fr auto auto;
`;

const Type = styled.h6`
  margin: 0;
  font-family: 'Nunito';
`;

const Name = styled.h4`
  margin: 0;
  color: var(--blue);
`;

const Date = styled.h5`
  margin: 0;
  font-weight: lighter;
  font-size: 0.8rem;
`;

const Buttons = styled.div`
  button {
    border: none;
    outline: none;
    color: white;
    font-size: 0.8rem;
    padding: 5px 30px;
    border-radius: 3px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
`;

const ButtonMemo = styled.button`
  margin-right: 10px;
  background: #269cc0;

  &:active {
    background: rgb(38, 156, 192, 0.8);
  }
`;
const ButtonLegislation = styled.button`
  background: #fd942d;

  &:active {
    background: rgb(253, 148, 45, 0.8);
  }
`;

const butttonIconStyle = {
  marginRight: 5
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
        <List>
          <ListItem>
            <Avatar alt="item_avatar" src={placeholder}></Avatar>
            <Details>
              <Type>Legislation</Type>
              <Name>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod
              </Name>
              <Date>April 04, 2020</Date>
              <Buttons>
                <ButtonMemo>
                  <ion-icon
                    style={butttonIconStyle}
                    name="download-outline"
                  ></ion-icon>
                  Download Memo
                </ButtonMemo>
                <ButtonLegislation>
                  <ion-icon
                    style={butttonIconStyle}
                    name="download-outline"
                  ></ion-icon>
                  Download Legislation
                </ButtonLegislation>
              </Buttons>
            </Details>
          </ListItem>
        </List>
      </ListContainer>
    </Container>
  );
};

export default ExecSection2;
