import React, { useState } from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';
import { graphql, useStaticQuery } from 'gatsby';

const ListContainer = styled.div`
  margin: 0 auto;
  background: white;
  margin-top: 50px;
  display: grid;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderItem = styled.div`
  /* flex: 1; */
`;

const Figure = styled.h3`
  display: inline;
  margin: 0;
  color: var(--blue);
  margin-right: 10px;
`;

const iconStyle = {
  color: 'var(--blue)',
  cursor: 'pointer'
};
const AssetContainer = styled.div`
  max-height: 309px;
  @media only screen and (max-width: 768px) {
    max-height: 100%;
  }
`;
const VideoItem = styled.img`
  width: 100%;
  height: auto;
`;
const AssetWrap = styled.div`
  width: 48%;
  h3 {
    margin-top: 1.45rem;
    margin-bottom: 1rem;
    color: #05326b;
    line-height: 1.3;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const AssetList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  margin: 1rem 0px;
`;

const VideoGallery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulVideoGallery {
          edges {
            node {
              title
              publishedDate
              video {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  );

 const items = data.allContentfulVideoGallery.edges;

  return (
    <PageContainer>
      <ListContainer>
        <Header>
          <HeaderItem>
            <Figure>{items.length}</Figure>Videos
          </HeaderItem>
          <HeaderItem>
            <ion-icon
              style={{ ...iconStyle, marginRight: 10 }}
              size="large"
              name="arrow-back"
            ></ion-icon>
            <ion-icon
              style={iconStyle}
              size="large"
              name="arrow-forward"
            ></ion-icon>
          </HeaderItem>
        </Header>
      </ListContainer>
      <AssetList>
          {items.map(item => (
          <AssetWrap>
            <AssetContainer>
              <VideoItem src={item.node.video.file.url} alt="Featured Video" />
            </AssetContainer>
            <h3>{item.node.title}</h3>
            {item.node.publishedDate}
          </AssetWrap>
        ))}
      </AssetList>
    </PageContainer>
  );
};

export default VideoGallery;
