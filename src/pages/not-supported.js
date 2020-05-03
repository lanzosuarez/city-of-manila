import React from 'react';
import styled from '@emotion/styled';
import Logo from '../images/manila-logo-90x90px.png';
import Bg from '../images/about-section-5.png';

const Wrapper = styled.div`
  background-image: ${`url(${Bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  z-index: 100;
  height: 100vh;
`;

const Cover = styled.div`
  text-align: center;
  width: 100%;
  height: 26rem;
  display: flex;
  justify-content: center;
  z-index: 200;

  &::before {
    content: '';
    width: 100%;
    height: inherit;
    background-color: #000000;
    opacity: 0.1;
    display: block;
    position: absolute;
    overflow-y: hidden;
  }
`;

const Item = styled.div`
  align-self: center;
  z-index: 200;
  padding: 0 15px;
  p {
    color: white;
    margin-bottom: 0rem;
  }
  h1 {
    color: white;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const NotSupportedPage = () => {
  return (
    <Wrapper>
      <Cover>
        <Item>
          <img src={Logo} alt="logo" />
          <h1>Can't access this page</h1>
          <p>
            Sorry, we don't support this browser. Try opening this page in a
            supported browser.{' '}
          </p>
        </Item>
      </Cover>
    </Wrapper>
  );
};

export default NotSupportedPage;
