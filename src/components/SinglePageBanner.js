import React from 'react';
import styled from '@emotion/styled';

import pageBg from '../images/page-banner-get-involved.jpg';

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
  padding: 0px 100px;
  align-items: center;
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
  p {
    margin-bottom: 0.5rem;
    color: #fefefe;
    font-size: 20px;
  }
`;

const Category = styled.p`
  color: #fefefe;
  font-size: 20px;
  margin-bottom: 0.5rem;
`;
const Tag = styled.div`
  background-color: #ffa537;
  width: inherit;
  padding: 5px 23px;
  text-align: center;
  border-radius: 45px;
  p {
    color: #fefefe;
    font-size: 0.8rem;
    margin-bottom: 0rem;
  }
`;

const TagList = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 9px;
`;

const ProgramBanner = props => {
  return (
    <Container bg={pageBg}>
      <PageContent>
        <Category>Category</Category>
        <HeaderText>{props.text}</HeaderText>
        <Text>
          <p>
            {props.datetext}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;By&nbsp;{props.author}
          </p>
        </Text>
        <TagList>
          <Tag>
            <p>Tag Name 1</p>
          </Tag>
          <Tag>
            <p>Tag Name 1</p>
          </Tag>
        </TagList>
      </PageContent>
    </Container>
  );
};

export default ProgramBanner;
