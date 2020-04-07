import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { listItems } from './Navigation';
import { NavigationContext } from '../context/NavigationProvider';

const Container = styled.div`
  height: 100vh;
  width: 300px;
  transform: translateX(-400px);
  transition: transform 1s ease;
  position: absolute;
  display: none;
  background: white;
  top: 0;
  left: 0;
  padding: 40px 30px;
  z-index: 5;
  overflow: scroll;
  max-height: 100vh;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const NavList = styled.ul`
  list-style: none;
  width: 100%;
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
  margin-bottom: 30px;
  cursor: pointer;
`;

const NavItem = styled.li`
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => (props.show ? 'var(--blue)' : 'black')};
  &:hover {
    color: var(--blue);
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  position: absolute;
  top: 10px;
  right: 0px;
  color: black;
  z-index: 5;
  cursor: pointer;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PageName = styled.span`
  cursor: pointer;
  font-weight: bold;
`;

const SubPages = styled.ul`
  list-style: none;
  max-height: ${props => (props.show ? '400px' : '0px')};
  overflow: hidden;
  margin: 0;
  transition: max-height 400ms;
`;

const SubPagesItem = styled.li`
  padding: 10px 20px;
  color: black;
  font-weight: bold;
  &:first-child {
    padding-top: 20px;
  }
  &:hover {
    color: var(--blue);
  }
`;

const NavItemComponent = ({ title, sections = [] }) => {
  const [showSubPages, toggleSubPages] = useState(false);
  const { showNav } = useContext(NavigationContext);
  const rotate = showSubPages ? { transform: 'rotate(90deg)' } : {};

  useEffect(() => {
    if (!showNav) toggleSubPages(false);
  }, [showNav]);

  const highlight = () => {
    if (sections.length > 0) {
      toggleSubPages(l => !l);
    }
  };

  return (
    <NavItem show={showSubPages} onClick={highlight}>
      <Head>
        <PageName>{title}</PageName>
        {sections.length > 0 && (
          <ion-icon
            style={{
              cursor: 'pointer',
              transition: 'transform 300ms',
              ...rotate
            }}
            name="chevron-forward-outline"
          ></ion-icon>
        )}
      </Head>
      {sections.length > 0 ? (
        <SubPages show={showSubPages}>
          {sections.map(s => (
            <SubPagesItem>{s}</SubPagesItem>
          ))}
        </SubPages>
      ) : null}
    </NavItem>
  );
};

const SideNavigation = () => {
  const { showNav, toggleNav } = useContext(NavigationContext);
  return (
    <Container className={showNav ? 'showNav' : ''}>
      <CloseIcon onClick={() => toggleNav(false)}>
        <ion-icon name="close-outline" size="large"></ion-icon>
      </CloseIcon>
      <Logo>logo .</Logo>
      <NavList>
        {listItems.map(i => (
          <NavItemComponent {...i} />
        ))}
      </NavList>
    </Container>
  );
};

export default SideNavigation;
