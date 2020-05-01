import React from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';


const Content = styled.div`
  display: contents;

  @media (max-width: 1028px) {
    img{
      object-fit:cover;
      height: 300px;
      display: block;
      margin: 0 auto;
    }

  @media (max-width: 426px) {
    img{
      object-fit:cover;
      height: 300px;
      display: block;
      margin: 0 auto;
    }
  }
  
`;

const AssetList = styled.div`
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 32%);
  grid-auto-rows: 350px;
  justify-content: center;
  grid-auto-flow: dense;
  padding: 1rem 0 3rem;

  @media (max-width: 1028px) {
    grid-template-columns: repeat(auto-fill,30%);
    grid-auto-rows: 300px;
  }

  @media (max-width: 426px) {
    grid-template-columns: repeat(auto-fill, 100%);
    grid-auto-rows: 300px;
  }
`;

const CovidPictures = (props) => {
  return (
    <PageContainer>
      <AssetList>
        <Content>
            <img src={props.img1} alt="actions to date"/>
        </Content>
        <Content>
            <img src={props.img2} alt="actions to date"/>
        </Content>
        <Content>
            <img src={props.img3} alt="actions to date"/>
        </Content>
      </AssetList>
    </PageContainer>
  );
};

export default CovidPictures;
