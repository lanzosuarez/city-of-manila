import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useFadeIn from '../hooks/useFadeIn';
import { navigate } from 'gatsby';

const Container = styled.div`
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: #f2f2f4;
  min-height: 360px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const PageContent = styled.div`
  height: 100%;
  padding: 2rem 100px;
  align-items: center;
  position: relative;
  z-index: 2;
  max-width: 1036px;
  @media (max-width: 768px) {
    padding: 35px 50px;
  }
  @media (max-width: 576px) {
    padding: 35px 35px;
  }
`;

const HeaderText = styled.h1`
  color: #fefefe;
  font-size: 42px;
  line-height: 1.3;
  font-weight: 600;
  word-break: break-word;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
  }
`;

const Text = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  display: flex;
  p {
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    color: #fefefe;
    font-size: 20px;
  }
  @media (max-width: 580px) {
    display: block;
    p:nth-child(2) {
      display: none;
    }
  }
`;

const Category = styled.p`
  color: #fefefe;
  font-size: 20px;
  margin-bottom: 0.5rem;
`;

const SinglePageBanner = props => {
  const [addElement] = useFadeIn();
  useEffect(() => {
    addElement('banner-header-category', { dir: 'down' });
    addElement('banner-header', { dir: 'down' });
    addElement('banner-header-text', { dir: 'down' });
  }, []);

  return (
    <Container bg={props.bg.file.url}>
      <PageContent>
        <Category data-usefadein="banner-header-category">
          {props.category}
        </Category>
        <HeaderText data-usefadein="banner-header">{props.text}</HeaderText>
        <Text data-usefadein="banner-header-text">
          <p>{props.datetext}</p>
          <p>|</p>
          <p>By: {props.by}</p>
        </Text>
      </PageContent>
    </Container>
  );
};

export default SinglePageBanner;
