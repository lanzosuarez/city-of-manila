import React, { useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import querystring from 'query-string';

import CustomSelect from './CustomSelect';
import { LatestUpdatesContext } from '../context/LatestUpdateProvider';
import useFadeIn from '../hooks/useFadeIn';

const SearchContainer = styled.div`
  background: white;
  /* margin-top: -40px; */
  /* padding: 30px 0px; */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    margin-top: -40px;
    grid-gap: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 576px) {
    padding: 20px 10px;
    grid-template-rows: auto 1fr;

    #custom-select {
      display: flex;
      grid-row: 2;
    }
  }
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;

  @media (max-width: 768px) {
    grid-row: 2;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const Category = styled.div`
  margin: 0;
  padding-bottom: 5px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  border-bottom: ${props => (props.active ? '3px solid var(--blue)' : '')};
  color: ${props => (props.active ? 'var(--blue)' : '#9a9999')};
  cursor: pointer;

  @media (max-width: 768px) {
    border-bottom: ${props =>
      props.active ? '3px solid var(--blue)' : '3px solid #ededed;'};
  }
`;

const Filters = styled.div`
  display: grid;
  justify-items: flex-end;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 30px;

  @media (max-width: 768px) {
    justify-content: space-between;
    grid-template-columns: 1fr;
    justify-items: flex-start;
  }

  @media (max-width: 576px) {
    grid-auto-flow: row;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
  }
`;

const SearchCon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const FilterByDate = styled.div`
  grid-auto-flow: column;
  display: grid;
  align-items: center;
  grid-gap: 10px;
  h5 {
    font-weight: 600;
    margin: 0;
    white-space: nowrap;
  }
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  background: #ededed;
  padding: 5px;
  font-size: 0.7rem;
  padding: 5px 10px;
  border-radius: 5px;

  @media (max-width: 576px) {
    height: 35px;
    width: 100%;
  }
`;

const iconStyle = {
  cursor: 'pointer',
  color: '#1ab1a2'
};

export const tabs = [
  'All',
  'News',
  'Features',
  'Public Advisories',
  'Multimedia'
];

const LatestUpdatesSection1 = ({ location }) => {
  const { activeTab, filters, setActiveTab, setFilters } = useContext(
    LatestUpdatesContext
  );

  useEffect(() => {
    const query = querystring.parse(location.search);
    if (query.q) {
      setTextFilter(query.q);
    }
  }, []);

  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('news1', { delay: '500ms' });
  }, []);

  const onSelectTab = idx => () => setActiveTab(idx);
  const selectRange = dateRange => setFilters({ ...filters, dateRange });

  const setTextFilter = searchText => {
    setFilters({ ...filters, searchText });
    if (typeof window !== 'undefined') {
      window.history.pushState(
        {},
        `search ${searchText}`,
        `/news-room?q=${searchText}${location.hash}`
      );
    }
  };
  const searchByText = e => setTextFilter(e.target.value);

  const showDateFilterFn = showDateFilter => () =>
    setFilters({ ...filters, showDateFilter });

  const onSelect = idx => setActiveTab(idx);

  return (
    <>
      <SearchContainer data-usefadein="news1">
        <CustomSelect onChange={onSelect} activeTab={activeTab} tabs={tabs} />
        <Categories>
          {tabs.map((tab, idx) => (
            <Category
              key={idx}
              onClick={onSelectTab(idx)}
              active={idx === activeTab}
            >
              <span>{tab}</span>
            </Category>
          ))}
        </Categories>
        <Filters>
          <SearchCon>
            {!filters.showDateFilter ? (
              <FilterByDate>
                <h5> Filter by Date</h5>
                <ion-icon
                  onClick={showDateFilterFn(true)}
                  size="small"
                  style={iconStyle}
                  name="calendar"
                ></ion-icon>
              </FilterByDate>
            ) : (
              <DateRangePicker
                onChange={selectRange}
                clearIcon={
                  <ion-icon
                    onClick={showDateFilterFn(false)}
                    size="small"
                    style={iconStyle}
                    name="close-outline"
                  ></ion-icon>
                }
                calendarIcon={
                  <ion-icon
                    size="small"
                    style={iconStyle}
                    name="calendar"
                  ></ion-icon>
                }
                value={filters.dateRange}
              />
            )}
          </SearchCon>
          <SearchCon>
            <ion-icon
              style={{ ...iconStyle, marginRight: 10 }}
              name="search"
            ></ion-icon>
            <SearchInput
              value={filters.searchText}
              pattern="^[a-zA-Z0-9]+$"
              onChange={searchByText}
              placeholder="Keyword"
              type="text"
            ></SearchInput>
          </SearchCon>
        </Filters>
      </SearchContainer>
    </>
  );
};

export default LatestUpdatesSection1;
