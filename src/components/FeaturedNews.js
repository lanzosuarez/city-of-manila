import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { withReadMore, formatDate } from '../helpers';

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
  return (
    <Container>
      <Title>Featured News</Title>
      <PlaceholderCon>
        <PlaceHolderImg src={photo.file.url}></PlaceHolderImg>
      </PlaceholderCon>
      <NewsCon>
        <h4>{category}</h4>
        <h3>{heading1}</h3>
        <div className="author-con">
          <h5>{formatDate(date)}</h5>
          <span>|</span>
          <h5 className="author">By {by}</h5>
        </div>
        <p>{withReadMore(body1.body1)}</p>
        <Link to={`/latest-updates/${id}`}>
          READ MORE <ion-icon data-icon="icon" name="arrow-forward"></ion-icon>
        </Link>
      </NewsCon>
      <div className="divider"></div>
    </Container>
  );
};

export default FeaturedNews;
