import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { randomNumber } from '../helpers';
import Modal from './Modal';

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
  cursor: pointer;
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
  display: ${props => (props.open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const ImgCon = styled.div`
  background: white;
  padding: 20px;
  max-width: 700px;
  display: grid;
  grid-gap: 20px;
  border-radius: 10px;

  @media (max-width: 576px) {
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: flex-end;
  }
`;
const ModalImg = styled.img`
  max-height: 600px;
`;

const ModalContent = ({ selectedImage, onClose, preventClose }) => {
  return (
    <Overlay open={selectedImage} onClick={onClose}>
      {selectedImage && (
        <ImgCon>
          <div onClick={onClose}>
            <ion-icon name="close-outline"></ion-icon>
            Close
          </div>
          <ModalImg
            src={selectedImage}
            alt="Gallery Image"
            onClick={preventClose}
          />
        </ImgCon>
      )}
    </Overlay>
  );
};

const PhotoGallery = () => {
  const [selectedImage, setSelectedImg] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPhotoGallery(sort: { fields: [updatedAt], order: DESC }) {
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

  const onClick = img => () => {
    setSelectedImg(img);
  };

  const onClose = () => setSelectedImg(null);
  const preventClose = e => e.stopPropagation();

  const items = data.allContentfulPhotoGallery.edges;

  const maxPage = Math.ceil(items.length / 9);
  const nextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  };
  const prevPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  function currentItems() {
    const begin = (currentPage - 1) * 9;
    const end = begin + 9;
    return items.slice(begin, end);
  }

  return (
    <PageContainer>
      <ListContainer>
        <Header>
          <HeaderItem>
            <Figure>{items.length}</Figure>Photos
          </HeaderItem>
          <HeaderItem>
            {currentPage > 1 && items.length && (
              <ion-icon
                onClick={prevPage}
                style={{ ...iconStyle, marginRight: 10 }}
                size="large"
                name="arrow-back"
              ></ion-icon>
            )}
            {currentPage < maxPage && items.length && (
              <ion-icon
                onClick={nextPage}
                style={iconStyle}
                size="large"
                name="arrow-forward"
              ></ion-icon>
            )}
          </HeaderItem>
        </Header>
      </ListContainer>

      <AssetList>
        {currentItems().map(item => {
          const h = randomNumber(2);
          const v = randomNumber(2);
          return (
            <Content
              key={item.node.image.file.url}
              onClick={onClick(item.node.image.file.url)}
            >
              <Img
                className={`item h${h} v${v}`}
                fluid={item.node.image.fluid}
                alt="Gallery Image"
              />
            </Content>
          );
        })}
      </AssetList>
      {selectedImage && (
        <Modal>
          <ModalContent
            onClose={onClose}
            preventClose={preventClose}
            selectedImage={selectedImage}
          />
        </Modal>
      )}
    </PageContainer>
  );
};

export default PhotoGallery;
