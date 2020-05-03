import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import Logo from '../images/manila-logo-90x90px.png';
import Bg from '../images/about-section-5.png';

const Wrapper = styled.div`
  background-image: ${`url(${Bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  z-index: 100;
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

const NotFoundPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <Notice />
        <Navigation />
        <Wrapper>
          <Cover>
            <Item>
              <img src={Logo} alt="logo" />
              <h1>Page Not Found</h1>
              <p>Sorry, the page you're looking for doesn't exist </p>
            </Item>
          </Cover>
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default NotFoundPage;
