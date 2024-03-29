import React, { useEffect }  from 'react';
import styled from '@emotion/styled';

import pageBg from '../images/about-header.png';
import useFadeIn from '../hooks/useFadeIn';

const Container = styled.div`
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: bottom center;
  background-color: #f2f2f4;
  min-height: 360px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
`;

const PageContent = styled.div`
  height: 100%;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
`;

const HeaderText = styled.h1`
  color: #fefefe;
  font-size: 52px;
  line-height: 52px;
  word-break: break-word;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 2.6rem;
    line-height: 1.3;
  }
`;

const ProgramBanner = props => {
  const [addElement] = useFadeIn();
  useEffect(() => {
    addElement('banner-header-text', { dir: 'down' });
  }, []);
  return (
    <Container bg={props.bg ? props.bg : pageBg} >
      <PageContent>
        <HeaderText data-usefadein="banner-header-text">{props.text}</HeaderText>
      </PageContent>
    </Container>
  );
};

export default ProgramBanner;
