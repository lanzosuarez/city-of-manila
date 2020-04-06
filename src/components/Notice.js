import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 50px;
  background: #f5f5f5;
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const IconsContainer = styled.div`
  position: absolute;
  left: 30px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 20px;
`;

const NoticeText = styled.div`
  font-size: 0.7rem;
  color: grey;
`;

const iconStyle = {
  color: 'grey'
};

const Notice = () => {
  return (
    <Container>
      <IconsContainer>
        <ion-icon style={iconStyle} name="logo-twitter"></ion-icon>
        <ion-icon style={iconStyle} name="logo-facebook"></ion-icon>
        <ion-icon style={iconStyle} name="logo-linkedin"></ion-icon>
        <ion-icon style={iconStyle} name="logo-instagram"></ion-icon>
      </IconsContainer>
      <NoticeText>
        Open Hours Of City Government Mon - Fri 8:00 am - 6:00 pm.
      </NoticeText>
    </Container>
  );
};

export default Notice;
