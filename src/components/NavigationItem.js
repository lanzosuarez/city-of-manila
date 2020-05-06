import React, { useState, memo } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Dropdown from './Dropdown';

import '../styles/dropdown.css';

const Container = styled.li`
  position: relative;
  font-size: 0.7rem;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
  font-weight: 600;
  height: 100%;
  align-items: center;

  a.page-link {
    text-decoration: none !important;
    color: #000000;
    display: grid;
    height: 100%;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  a.page-link.active-page {
    color: var(--blue) !important;
    font-weight: bold;
  }

  a.page-link:hover,
  &:hover {
    color: var(--blue) !important;
  }
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: centerl;
`;

const NavigationItem = ({ title, path, sections = [], external, disabled }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const openDropdown = () => {
    if (!showDropDown) setShowDropDown(true);
  };

  const closeDropdown = () => setShowDropDown(false);

  const hasDropDown = sections.length > 0;
  return (
    <Container onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
      {path !== '' && !external ? (
        <Link
          onClick={closeDropdown}
          partiallyActive
          activeClassName="active-page"
          className={`page-link ${disabled ? 'disable-link' : ''}`}
          to={path}
        >
          {title}
        </Link>
      ) : (
        <a href={external ? path : '#'} className="page-link">
          {title}
        </a>
      )}
      {hasDropDown && (
        <IconContainer>
          <ion-icon name="chevron-down"></ion-icon>
        </IconContainer>
      )}
      {hasDropDown && (
        <Dropdown
          show={showDropDown}
          dropDownList={sections}
          setShowDropDown={setShowDropDown}
        />
      )}
    </Container>
  );
};

export default memo(NavigationItem);
