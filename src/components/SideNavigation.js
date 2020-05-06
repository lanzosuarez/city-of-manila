import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { listItems } from './Navigation';
import { NavigationContext } from '../context/NavigationProvider';
import { getHash } from '../helpers';
import ManilaLogo from '../images/manila-logo-90x90px.png';

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
  display: grid;
  grid-gap: 10px;
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
    a.main-page {
      color: var(--blue) !important;
    }
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
  &:first-of-type {
    padding-top: 20px;
  }

  &:hover {
    a {
      color: var(--blue) !important;
    }
  }
`;

const LogoItem = styled.img`
  display: flex;
  align-items: center;
`;

const NavItemComponent = ({ title, path, sections = [], disabled }) => {
  const [showSubPages, toggleSubPages] = useState(false);
  const { showNav, toggleNav } = useContext(NavigationContext);
  const rotate = showSubPages ? { transform: 'rotate(90deg)' } : {};

  useEffect(() => {
    if (!showNav) toggleSubPages(false);
  }, [showNav]);

  const highlight = () => {
    if (sections.length > 0) {
      toggleSubPages(l => !l);
    }
  };

  const isPartiallyActive = path => ({ location: { hash } }) => {
    if (hash === getHash(path)) {
      return {
        className: 'side-nav-active-route'
      };
    }
    return {};
  };

  const onClickLink = () => {
    if (!disabled) {
      toggleNav(false);
    }
  };

  return (
    <NavItem show={showSubPages} onClick={highlight}>
      <Head>
        <PageName>
          <Link
            onClick={onClickLink}
            className={`main-page ${disabled ? 'disable-link' : ''}`}
            activeClassName="side-nav-active-route"
            partiallyActive
            to={path}
          >
            {title}
          </Link>
        </PageName>
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
          {sections.map((s, idx) => (
            <SubPagesItem key={idx}>
              <Link
                onClick={() => toggleNav(false)}
                getProps={isPartiallyActive(s.path)}
                to={s.path}
              >
                {s.title}
              </Link>
            </SubPagesItem>
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
      <Logo>
        <Link to="/">
          <LogoItem src={ManilaLogo} alt="City of Manila logo" />
        </Link>
      </Logo>
      <NavList>
        {listItems.map((i, idx) => (
          <NavItemComponent key={idx} {...i} />
        ))}
      </NavList>
    </Container>
  );
};

export default SideNavigation;
