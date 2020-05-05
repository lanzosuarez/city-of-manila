import React, { useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { withReadMore, formatDate } from '../helpers';
import useFadeIn from '../hooks/useFadeIn';

const Container = styled.div`
  display: grid;
  grid-gap: 3rem;
  margin: 0 auto;
  padding: 4rem 0px 1rem;

  .divider {
    height: 3px;
    background: #ccc;
  }

  @media (max-width: 1000px) {
    padding: 4rem 0px 2rem;
  }

  @media (max-width: 576px) {
    padding: 4rem 0px 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-auto-flow: column;
  grid-template-columns: 57% auto;

  @media (max-width: 1000px) {
    grid-template-columns: 45% auto;
  }

  @media (max-width: 576px) {
    display: grid;
    grid-auto-flow: unset;
    grid-template-columns: unset;
    grid-gap: 25px;
  }
`;

const PlaceholderCon = styled.div``;

const PlaceHolderImg = styled.img``;

const Title = styled.div`
  background-color: #01bcb1;
  display: block;
  width: max-content;
  padding: 0.3rem 1rem;
  h4 {
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
  }
`;

const NewsCon = styled.div`
  display: grid;
  grid-gap: 25px;
  align-items: center;
  align-self: center;

  h4,
  h3,
  h5 {
    margin: 0;
    color: var(--blue);
    line-height: 1.5;
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
      contentfulNewsroom(featured: { eq: true }) {
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
  } = data.contentfulNewsroom;

  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('featured-news1', { delay: '300ms' });
    addElement('featured-news2', { delay: '300ms' });
    addElement('featured-news3', { delay: '500ms' });
  }, []);

  return (
    <Container>
      <Grid>
        <PlaceholderCon data-usefadein="featured-news1">
          <PlaceHolderImg src={photo.file.url}></PlaceHolderImg>
        </PlaceholderCon>
        <NewsCon data-usefadein="featured-news2">
          {/* <Title data-usefadein="featured-news1">Top Story</Title> */}
          <Title>
            <h4>Top Story</h4>
          </Title>
          <Link to={`/news-room/${id}`}>
            <h3>{heading1}</h3>
          </Link>
          <div className="author-con">
            <h5>{formatDate(date)}</h5>
            <span>|</span>
            <h5 className="author">By {by}</h5>
          </div>
          <p>{withReadMore(body1.body1)}</p>
          <Link to={`/news-room/${id}`}>
            READ MORE{' '}
            <ion-icon data-icon="icon" name="arrow-forward"></ion-icon>
          </Link>
        </NewsCon>
      </Grid>
      <div className="divider" data-usefadein="featured-news3"></div>
    </Container>
  );
};

export default FeaturedNews;
