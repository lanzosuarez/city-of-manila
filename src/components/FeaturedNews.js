import React, { useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { withReadMore, formatDate } from '../helpers';
import useFadeIn from '../hooks/useFadeIn';

const Container = styled.div`
  display: grid;
  grid-gap: 40px;
  margin: 0 auto;
  padding: 40px 0px;

  .divider {
    height: 3px;
    background: #ccc;
  }
`;

const PlaceholderCon = styled.div``;

const PlaceHolderImg = styled.img``;

const Title = styled.h2`
  margin: 0;
  color: var(--blue);
`;

const NewsCon = styled.div`
  display: grid;
  grid-gap: 20px;

  h4,
  h3,
  h5 {
    margin: 0;
    color: var(--blue);
  }

  p {
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
    color: red;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      [name='arrow-forward'] {
        transform: translate(10px);
      }
    }

    [name='arrow-forward'] {
      color: red;
      margin-left: 10px;
      transition: transform 300ms;
    }
  }

  .author-con {
    align-items: center;
    display: flex;

    h5 {
      margin-right: 20px;
    }

    span {
      margin-right: 20px;
    }

    .author {
      color: black;
    }
  }
`;

const FeaturedNews = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulLatestUpdates(featured: { eq: true }) {
        id
        heading1
        body1 {
          body1
        }
        photo {
          file {
            url
          }
        }
        date
        by
      }
    }
  `);
  const {
    heading1,
    category,
    by,
    body1,
    date,
    photo,
    id
  } = data.contentfulLatestUpdates;

  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('featured-news1', { delay: '300ms' });
    addElement('featured-news2', { delay: '300ms' });
    addElement('featured-news3', { delay: '500ms' });
    addElement('featured-news4', { delay: '500ms' });
  }, []);

  return (
    <Container>
      <Title data-usefadein="featured-news1">Featured News</Title>
      <PlaceholderCon data-usefadein="featured-news2">
        <PlaceHolderImg src={photo.file.url}></PlaceHolderImg>
      </PlaceholderCon>
      <NewsCon data-usefadein="featured-news3">
        <h4>{category}</h4>
        <h3>{heading1}</h3>
        <div className="author-con">
          <h5>{formatDate(date)}</h5>
          <span>|</span>
          <h5 className="author">By {by}</h5>
        </div>
        <p>{withReadMore(body1.body1)}</p>
        <Link to={`/news-room/${id}`}>
          READ MORE <ion-icon data-icon="icon" name="arrow-forward"></ion-icon>
        </Link>
      </NewsCon>
      <div className="divider" data-usefadein="featured-news4"></div>
    </Container>
  );
};

export default FeaturedNews;
