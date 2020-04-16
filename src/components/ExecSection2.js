import React from 'react';
import styled from '@emotion/styled';
import format from 'date-fns/format';

import placeholder from '../images/team-placeholder.png';
import DownloadExec from './DownloadExec';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const ListContainer = styled.div`
  /* width: 800px; */
  margin: 0 auto;
  background: white;
  margin-top: 50px;
  display: grid;
  padding: 20px 20px;
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
  margin-right: 10px;
`;

const iconStyle = {
  color: 'var(--blue)',
  cursor: 'pointer'
};

const List = styled.div`
  display: grid;
  grid-gap: 40px;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 170px 1fr;
  grid-gap: 15px;
  padding-bottom: 40px;
  border-bottom: 2px solid #efefef;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Avatar = styled.img`

  @media (max-width: 576px) {
    display: none;
  }
`;

const Details = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: auto 1fr auto auto;
`;

const Type = styled.h6`
  margin: 0;
  font-family: 'Nunito';
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Name = styled.h4`
  margin: 0px 0px 10px;
  color: var(--blue);
`;

const ItemDate = styled.h5`
  margin: 0;
  font-weight: lighter;
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
    justify-content: center;
  }
`;

const ExecSection2 = ({ items }) => {
  return (
    <Container>
      <ListContainer>
        <Header>
          <HeaderItem>
            <Figure>{items.length}</Figure> Legislation
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
          {items.map(({ node: i }, idx) => (
            <ListItem key={idx}>
              <Avatar alt="item_avatar" src={placeholder}></Avatar>
              <Details>
                <Type>{i.name}</Type>
                <Name>{i.description.description}</Name>
                <ItemDate>
                  {format(new Date(i.publishedDate), 'MMMM dd, yyyy')}
                </ItemDate>
                <Buttons>
                  <DownloadExec
                    type={i.type}
                    url={i.file.file.url}
                    filename={i.name}
                  />
                </Buttons>
              </Details>
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </Container>
  );
};

export default ExecSection2;
