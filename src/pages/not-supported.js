import React from 'react';
import styled from '@emotion/styled';
import Logo from '../images/manila-logo-90x90px.png';
import Bg from '../images/about-section-5.png';
import BrowserChrome from '../images/browser-chrome.png';
import BrowserMozilla from '../images/browser-mozilla.png';
import BrowserSafari from '../images/browser-safari.png';
import BrowserOpera from '../images/browser-opera.png';
import BrowserEdge from '../images/browser-edge.png';
import '../styles/index.css';

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
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 200;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.1;
    display: block;
    position: absolute;
    overflow-y: hidden;
    overflow-x: hidden;
    left:0;
  }
`;

const Item = styled.div`
  align-self: center;
  z-index: 200;
  padding: 0 15px;
  max-width: 808px;
  p {
    color: white;
    margin-bottom: 0rem;
    max-width: 579px;
    margin: 0 auto;
  }
  h1 {
    color: white;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  @media only screen and (max-width: 425px) {
    h1 {
       font-size: 20px;
    }
  }
`;

const List = styled.div`
  margin-top: 2rem;
  ul {
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-start;
  }
  li {
    list-style: none;
    color: white;
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  img {
    width: 21px;
    margin-right: 0.5rem;
  }
  @media only screen and (max-width: 829px) {
    margin-top: 1rem;
    ul {
      flex-direction: column;
      align-self: center;
      justify-content: center;
      align-items: center;
      padding-left: 0px;
    }
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const NotSupportedPage = () => {
  return (
    <Wrapper>
      <Cover>
        <Item>
          <img src={Logo} alt="logo" />
          <h1>
            Oops! It seems you are trying to access this page using an
            unsupported browser.
          </h1>
          <p>
            No worries, please update to the latest version of your browser or
            download one of these alternatives:
          </p>
          <List>
            <ul>
              <li>
                <img src={BrowserChrome} alt="chrome browser" />
                <span>Google Chrome</span>
              </li>
              <li>
                <img src={BrowserSafari} alt="chrome safari" />
                <span>IOS Safari</span>
              </li>
              <li>
                <img src={BrowserMozilla} alt="chrome mozilla" />
                <span>Mozilla Firefox</span>
              </li>
              <li>
                <img src={BrowserOpera} alt="chrome opera" />
                <span>Opera</span>
              </li>
              <li>
                <img src={BrowserEdge} alt="chrome edge" />
                <span>Microsoft Edge</span>
              </li>
            </ul>
          </List>
        </Item>
      </Cover>
    </Wrapper>
  );
};

export default NotSupportedPage;
