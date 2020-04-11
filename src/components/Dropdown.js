import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { CSSTransition } from 'react-transition-group';

import { getHash } from '../helpers';

const Container = styled.ul`
  list-style: none;
  margin: 0;
  position: absolute;
  top: 100px;
  left: -20px;
  background: white;
  width: 200px;
  opacity: 1;
  transform: translateY(20px);
  display: none;
  cursor: default;
`;

const Item = styled.li`
  text-align: left;
  color: #000000;
  position: relative;
  z-index: 1;

  a {
    z-index: 1;
    padding: 10px 15px;
    display: block !important;
    width: 100% !important;
    text-decoration: none !important;
    color: black;
  }

  a.active-dropdown-item {
    color: white;
    background: var(--blue);
    font-weight: bold;
  }

  a:hover {
    color: white !important;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, white 50%, var(--blue) 50%);
    transition: background-position 300ms;
  }

  &:hover::after {
    background-position: 0 -100%;
  }
`;

const Dropdown = ({ show, dropDownList = [] }) => {
  const close = e => e.stopPropagation();

  const isPartiallyActive = path => ({ location: { hash, pathname } }) => {
    if (hash && hash === getHash(path)) {
      return {
        className: 'active-dropdown-item'
      };
    } else if (path === pathname)
      return {
        className: 'active-dropdown-item'
      };
    return {};
  };

  return (
    <CSSTransition
      in={show}
      classNames="nav-dropdown"
      unmountOnExit
      timeout={500}
    >
      <Container onMouseEnter={close}>
        {dropDownList.map((i, idx) => (
          <Item key={idx}>
            <Link getProps={isPartiallyActive(i.path)} to={i.path}>
              {i.title}
            </Link>
          </Item>
        ))}
      </Container>
    </CSSTransition>
  );
};

export default Dropdown;
