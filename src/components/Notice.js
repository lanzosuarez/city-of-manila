import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 50px;
  background: #f5f5f5;
  width: 100%;
  max-width: ${props => (props.isHome ? '1200px' : '100%')};
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

const Notice = ({ isHome }) => {
  return (
    <Container isHome={isHome}>
      <IconsContainer>
        <a href="https://www.facebook.com/iskomorenodomagoso/ "><ion-icon style={iconStyle} name="logo-facebook"></ion-icon></a>
        <a href="https://twitter.com/IskoMoreno "><ion-icon style={iconStyle} name="logo-twitter"></ion-icon></a>
        <a href="https://www.youtube.com/iskoverychannel"><ion-icon style={iconStyle} name="logo-youtube"></ion-icon></a>
        <a href="https://www.instagram.com/iskomorenodomagoso"><ion-icon style={iconStyle} name="logo-instagram"></ion-icon></a>
      </IconsContainer>
      <NoticeText>
        Open Hours Of City Government Mon - Fri 8:00 am - 6:00 pm.
      </NoticeText>
    </Container>
  );
};

export default Notice;
