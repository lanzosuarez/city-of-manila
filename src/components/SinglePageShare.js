import React from 'react';
import styled from '@emotion/styled';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

import PageContainer from '../components/PageContainer';
import { WEBSITE_URL } from '../constants';

const Container = styled.div`
  background: #05326b;
`;

const SubContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 25px;

  span {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 10px 15px;
  }
`;

const Icons = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 10px;

  .react-share__ShareButton {
    display: flex;
  }
`;

const SinglePageShare = ({ page }) => {
  const openGmail = () => {
    let url =
      'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Your+Subject+here&body=' +
      page +
      '&ui=2&tf=1&pli=1';

    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
  };
  return (
    <Container>
      <PageContainer>
        <SubContainer>
          <span>Share Overview</span>
          <Icons>
            <ion-icon onClick={openGmail} name="mail"></ion-icon>
            <FacebookShareButton url={page}>
              <ion-icon name="logo-facebook"></ion-icon>
            </FacebookShareButton>
            <TwitterShareButton url={page}>
              <ion-icon name="logo-twitter"></ion-icon>
            </TwitterShareButton>
          </Icons>
        </SubContainer>
      </PageContainer>
    </Container>
  );
};

export default SinglePageShare;
