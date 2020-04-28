import React from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';
import GalleryVideo from '../components/GalleryVideo';
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
  cursor: 'pointer',
  display: 'none'
};

const VideoCon = styled.div`
  width: 100%;
  height: auto;
`;
const AssetWrap1 = styled.div`
  width: 48%;
  display: none;
  margin-bottom: 2rem;
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
const AssetWrap = styled.div`
  width: 48%;
  margin-bottom: 2rem;
  h3 {
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

const Style = {
  border: 'none',
  overflow: 'hidden',
};

const VideoGallery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulVideoGallery {
          edges {
            node {
              title
              publishedDate
              videoUrl
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
          <AssetWrap1>
            <VideoCon>
              <GalleryVideo url={item.node.videoUrl} />
            </VideoCon>
            <h3>{item.node.title}</h3>
            {item.node.publishedDate}
          </AssetWrap1>
        ))}
        <AssetWrap>
          <VideoCon>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fiskomorenodomagoso%2Fvideos%2F588205432100969%2F&show_text=0&width=560"
              width="100%"
              height='300px'
              style={Style}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true"
            ></iframe>
          </VideoCon>
          <h3>Bawat senior citizen, healthy, safe and ensured.</h3>
          April 27, 2020
        </AssetWrap>
        <AssetWrap>
          <VideoCon>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fiskomorenodomagoso%2Fvideos%2F215672656398430%2F&show_text=0&width=560"
              width="100%"
              height='300px'
              style={Style}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true"
            ></iframe>
          </VideoCon>
          <h3>There is hope.</h3>
          April 24, 2020
        </AssetWrap>
        <AssetWrap>
          <VideoCon>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fiskomorenodomagoso%2Fvideos%2F570862237115165%2F&show_text=0&width=476"
              width="100%"
              height='500px'
              style={Style}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true"
            ></iframe>
          </VideoCon>
          <h3>Thank you po to our frontliners from all sectors.</h3>
          April 9, 2020
        </AssetWrap>
        <AssetWrap>
          <VideoCon>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fiskomorenodomagoso%2Fvideos%2F211567876925376%2F&show_text=0&width=560"
              width="100%"
              height='300px'
              style={Style}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true"
            ></iframe>
          </VideoCon>
          <h3>Sama-sama po ang Manileño sa hamong ito.</h3>
          April 5, 2020
        </AssetWrap>
      </AssetList>
    </PageContainer>
  );
};

export default VideoGallery;
