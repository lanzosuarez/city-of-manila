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

  a {
    text-decoration: none !important;
    color: #000000;
  }

  a:hover, &:hover {
    color: #04326a !important;
  }
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: centerl;
`;

const NavigationItem = ({ title, sections = [] }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropdown = () => setShowDropDown(l => !l);

  const hasDropDown = sections.length > 0;

  return (
    <Container onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <Link to="/">{title}</Link>
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
