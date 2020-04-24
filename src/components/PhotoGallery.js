import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { randomNumber } from '../helpers';

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
  margin-bottom: 1rem;
`;

const HeaderItem = styled.div`
  /* flex: 1; */
`;

const Content = styled.div`
  display: contents;
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
const AssetList = styled.div`
  /* margin: 1rem 0px; */
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 32%);
  grid-auto-rows: 350px;
  justify-content: center;
  grid-auto-flow: dense;

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

  /* .item.v2 {
    grid-row: span 3;
  }

  .item.v3 {
    grid-row: span 3;
  }

  .item.h2 {
    grid-column: span 2;
  }

  .item.h3 {
    grid-column: span 3;
  } */
`;

const Overlay = styled.div`
  position: fixed;
  /* display: flex; */
  display: ${props => (props.open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const PhotoGallery = () => {
  const [selectedImage, setSelectedImg] = useState(null);
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPhotoGallery {
          edges {
            node {
              image {
                file {
                  url
                }
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const Modal = ({ selectedImage }) => {
    return (
      <Overlay open={selectedImage}>
        <div>
          <ion-icon name="close-outline"></ion-icon>
        </div>
        {selectedImage && <Img fluid={selectedImage} alt="Gallery Image" />}
      </Overlay>
    );
  };

  const onClick = (img) => {
    setSelectedImg(img)
  };

  const items = data.allContentfulPhotoGallery.edges;
  return (
    <PageContainer>
      <ListContainer>
        <Header>
          <HeaderItem>
            <Figure>{items.length}</Figure>Photos
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
      <Fragment>
        <AssetList>
          {items.map(item => {
            const h = randomNumber(2);
            const v = randomNumber(2);
            return (
              <Content onClick={onClick}>
                <Img
                  key={item.node.image.fluid.src}
                  className={`item h${h} v${v}`}
                  fluid={item.node.image.fluid}
                  alt="Gallery Image"
                />
              </Content>
            );
          })}
        </AssetList>
        {selectedImage ? <Modal selectedImage={selectedImage} /> : null}
      </Fragment>
    </PageContainer>
  );
};

export default PhotoGallery;
