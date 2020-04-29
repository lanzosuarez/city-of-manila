import React from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';


const Content = styled.div`
  display: contents;
`;

const AssetList = styled.div`
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 32%);
  grid-auto-rows: 350px;
  justify-content: center;
  grid-auto-flow: dense;
  padding: 1rem 0;

  @media (max-width: 1028px) {
    grid-template-columns: repeat(auto-fill, 48%);
    grid-auto-rows: 300px;
  }
  @media (max-width: 809px) {
    grid-template-columns: repeat(auto-fill, 45%);
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
