import React, { useContext, useMemo, useEffect } from 'react';
import styled from '@emotion/styled';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import useFadeIn from '../hooks/useFadeIn';
import {
  pipe,
  searchLatestUpdates,
  formatDate,
  withReadMore
} from '../helpers';
import Pagination from './Pagination';
import { useState } from 'react';
import { LatestUpdatesContext } from '../context/LatestUpdateProvider';
import { Link } from 'gatsby';

const ListContainer = styled.div`
  margin: 0 auto;
  background: white;
  display: grid;
  padding: 20px 0px;
  grid-gap: 30px;

  /* @media (max-width: 768px) {
    width: 90%;
  } */
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

const List = styled.div`
  display: grid;
  grid-gap: 40px;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 40px;
  padding-bottom: 40px;
  border-bottom: 2px solid #efefef;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Avatar = styled.div`
  /* height: 100%; */
  background: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Details = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: auto 1fr auto auto;
`;

const Type = styled.h6`
  margin: 0;
  font-family: 'Nunito';
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--blue);
`;

const Name = styled.h4`
  margin: 0px 0px 10px;
  color: var(--blue);
`;

const ItemDate = styled.h5`
  margin: 0;
  font-weight: lighter;
`;

const NewsCon = styled.div`
  display: grid;
  grid-gap: 20px;

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
    @media (max-width: 982px) {
      h5 {
        line-height: 1.5;
        margin-right: 10px;
        min-width: 92px;
        font-size: 12px;
      }
      span {
        margin-right: 10px;
      }
    }
    @media (max-width: 580px) {
      h5 {
        line-height: 1.5;
        margin-right: 10px;
        min-width: 92px;
      }
      span {
        margin-right: 10px;
      }
    }
  }
`;

const LatestUpdatesSection2 = ({ items }) => {
  const { activeTab, filters } = useContext(LatestUpdatesContext);
  const [page, setPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState([]);

  const activeCategory = () => {
    switch (activeTab) {
      case 0:
        return 'All';
      case 1:
        return 'News';
      case 2:
        return 'Features';
      case 3:
        return 'Public Advisories';
      case 4:
        return 'Multimedia';
      default:
        return 'All';
    }
  };

  const activePage = () => {
    switch (activeTab) {
      case 0:
        return 'All';
      case 1:
        return 'News';
      case 2:
        return 'Features';
      case 3:
        return 'Public Advisories';
      case 4:
        return 'Multimedia';
      default:
        return 'Total';
    }
  };

  useEffect(() => {
    setPage(1);
  }, [filters, items, activeTab]);

  const pageItems = useMemo(
    () =>
      pipe(
        items =>
          items.filter(i => {
            const categoryFilter = activeCategory();
            if (categoryFilter === 'All') return true;

            return i.node.category === categoryFilter;
          }),
        items => searchLatestUpdates(filters.searchText, items),
        items =>
          items.filter(i => {
            if (filters.dateRange === null) return true;

            const [p, a] = filters.dateRange;
            const pDate = new Date(i.node.date);
            return isAfter(pDate, p) && isBefore(pDate, a);
          })
      )(items),
    [filters, activeTab]
  );

  const pages = Math.ceil(pageItems.length / 5);
  const nextPage = () => setPage(p => p + 1);
  const prevPage = () => setPage(p => p - 1);

  const [addElement] = useFadeIn();
  useEffect(() => {
    addElement('latest-update-section2', { delay: '400ms' });
  }, []);

  return (
    <div data-usefadein="latest-update-section2">
      <ListContainer>
        <Header>
          <HeaderItem>
            <Figure>{pageItems.length}</Figure> {activePage()}
          </HeaderItem>
          <HeaderItem>
            {page > 1 && pageItems.length && (
              <ion-icon
                onClick={prevPage}
                style={{ ...iconStyle, marginRight: 10 }}
                size="large"
                name="arrow-back"
              ></ion-icon>
            )}
            {page < pages && pageItems.length && (
              <ion-icon
                onClick={nextPage}
                style={iconStyle}
                size="large"
                name="arrow-forward"
              ></ion-icon>
            )}
          </HeaderItem>
        </Header>
        <List>
          {paginatedItems.map(({ node: i }, idx) => (
            <ListItem key={idx}>
              <Avatar alt="item_avatar" src={i.photo.file.url}></Avatar>
              <Details>
                <NewsCon>
                  <h4>{i.category}</h4>
                  <Link to={`/news-room/${i.id}`}><h3>{i.heading1}</h3></Link>
                  <div className="author-con">
                    <h5>{formatDate(i.date)}</h5>
                    <span>|</span>
                    <h5 className="author">By {i.by}</h5>
                  </div>
                  <p>{withReadMore(i.body1.body1)}</p>
                  <Link to={`/news-room/${i.id}`}>
                    READ MORE{' '}
                    <ion-icon data-icon="icon" name="arrow-forward"></ion-icon>
                  </Link>
                </NewsCon>
              </Details>
            </ListItem>
          ))}
        </List>
      </ListContainer>
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        setPage={setPage}
        page={page}
        items={pageItems}
        onPageChange={setPaginatedItems}
        activeTab={activeTab}
      />
    </div>
  );
};

export default LatestUpdatesSection2;
