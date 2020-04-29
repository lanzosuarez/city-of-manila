import React, { useState, useMemo, useEffect } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Pages = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  grid-gap: 10px;
  margin: 0px 20px;
`;

const Page = styled.li`
  font-size: 18px;
  width: 30px;
  height: 30px;
  background: ${props => (props.active ? '#17b1a2' : 'none')};
  color: ${props => (props.active ? 'white' : 'black')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const MAX_ITEMS_PER_PAGE = 5;
const MAX_BUTTONS_PER_PAGE = 3;

const Pagination = ({
  items,
  page: itemPage,
  setPage: setItemPage,
  onPageChange = () => {},
  nextPage,
  prevPage,
  activeTab
}) => {
  const pages = Math.ceil(items.length / 5);

  const setCurrentPage = page => () => setItemPage(page);

  useEffect(() => {
    const skip = (itemPage - 1) * MAX_ITEMS_PER_PAGE;
    const paginatedItems = [...new Array(MAX_ITEMS_PER_PAGE)]
      .map((_, idx) => items[skip + idx])
      .filter(i => !!i);
    onPageChange(paginatedItems);
  }, [itemPage, items, activeTab]);

  const showdedButtons = useMemo(() => {
    const numOfPages = Math.ceil(items.length / 5);

    const start = itemPage - 3 < 0 ? 0 : itemPage - 3;
    const end = start + 3;
    const skip =
      itemPage - MAX_BUTTONS_PER_PAGE <= 0
        ? 0
        : itemPage - MAX_BUTTONS_PER_PAGE;
    const btns = [...new Array(numOfPages)].map((_, i) => i + 1);

    return btns.slice(start, end);
  }, [itemPage, items, activeTab]);

  return (
    <Container>
      <InnerContainer>
        {itemPage > 1 && items.length && (
          <ion-icon
            onClick={prevPage}
            size="large"
            name="arrow-back-outline"
          ></ion-icon>
        )}
        <Pages>
          {showdedButtons.map((b, idx) => (
            <Page onClick={setCurrentPage(b)} active={itemPage === b} key={idx}>
              {b}
            </Page>
          ))}
        </Pages>
        {itemPage < pages && items.length && (
          <ion-icon
            onClick={nextPage}
            size="large"
            name="arrow-forward-outline"
          ></ion-icon>
        )}
      </InnerContainer>
    </Container>
  );
};

export default Pagination;
