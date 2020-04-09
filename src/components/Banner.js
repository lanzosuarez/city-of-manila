import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { CSSTransition } from 'react-transition-group';

import '../styles/banner.css';

import banner1 from '../images/header-slide-1-1440px.jpg';
import banner2 from '../images/header-slide2.jpg';
import Notice from './Notice';
import Navigation from './Navigation';
import LearnMore from './LearnMore';

const Container = styled.div`
  position: relative;
  display: flex;
`;

const OverlayNoticeAndNav = styled.div`
  width: 100%;
  position: absolute;
  z-index: 5;
`;

const BannerCon = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;

  /* padding: 300px 70px 50px; */
`;

const BannerTexts = styled.div`
  position: relative;
  display: ${props => (props.show ? 'flex' : 'none')};
  z-index: 4;
  color: white;
  margin: 250px 88px 70px 88px;
  height: 500px;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    margin-top: 150px;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    margin-top: 70px;
    margin-left: 50px;
    margin-right: 30px;
  }

  @media (max-width: 576px) {
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
    height: 450px;
  }

  /* &::after {
    z-index: 3;
    content: '';
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
    animation: progress 10s;
    animation-iteration-count: infinite;
    animation-delay: 2000ms;
  } */
`;

const Progress = styled.div`
  z-index: 3;
  content: '';
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: white;
  animation: progress 10s;
  animation-iteration-count: infinite;
  animation-delay: 2000ms;

  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

const BannerTextSmall = styled.h3`
  margin-bottom: 30px;
  font-weight: 400;

  @media (max-width: 768px) {
    margin-bottom: 0px;
    margin-bottom: 20px;
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    margin-bottom: 20px;
    font-size: 0.95rem;
  }
`;

const BannerTextBig = styled.h1`
  max-width: 500px;
  font-size: 50px;
  margin-bottom: 40px;
  color: #ffffff;
  line-height: 1.2;
  word-break: break-word;
  font-weight: 600;
  margin-right: 30px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 576px) {
    font-size: 40px;
  }

  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

const BannerTextsSection = styled.div`
  flex: 2;

  @media (max-width: 576px) {
    padding-top: 30px;
  }
`;

const BannerTimeSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  justify-content: center;
  flex: 1;

  @media (max-width: 576px) {
    display: none;
  }
`;

const MobileTimeSection = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: grid;
    grid-gap: 10px;
    justify-content: space-between;
    font-size: 0.8rem !important;
  }
`;

const ButtonCon = styled.div`
  @media (max-width: 576px) {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1.5fr 1fr;
  }
`;

const BannerImg = styled.div`
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${props => props.zIndex};
`;

const ArrowCon = styled.div`
  position: absolute;
  left: 0;
  bottom: 15px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px;
`;

const banners = [
  {
    banner: banner1,
    zIndex: 2
  },
  {
    banner: banner2,
    zIndex: 1
  }
];

const texts = [
  {
    banner: banner1,
    small: 'Welcome to the office of the Mayor of Manila',
    big: 'Our minds and hearts united towards returning Manila to greatness. ',
    btn: {
      text: 'ABOUT',
      path: '/about#mayor-profile'
    }
  },
  {
    banner: banner2,
    small: 'We will defeat Covid-19 together',
    big: 'The most challenging public health challenge of our lifetimes',
    btn: {
      text: 'LEARN MORE',
      path: '/covid'
    }
  }
];

const LocalTime = ({ transitionFlag }) => {
  return (
    <CSSTransition
      mountOnEnter
      in={transitionFlag}
      classNames="banner-time"
      timeout={{ enter: 10000 }}
    >
      <BannerTimeSection>
        <h4 className="time-section-weather">
          26 &#8451; <ion-icon name="sunny"></ion-icon>
        </h4>
        <h4 className="time-section-local">
          <span>14:12</span>
          &nbsp; LOCAL TIME
        </h4>
      </BannerTimeSection>
    </CSSTransition>
  );
};

const MobileLocalTime = ({ transitionFlag }) => {
  return (
    <CSSTransition
      mountOnEnter
      in={transitionFlag}
      classNames="banner-time"
      timeout={{ enter: 10000 }}
    >
      <MobileTimeSection>
        <h4 className="" style={{ margin: 0, fontWeight: 500 }}>
          26 &#8451; <ion-icon name="sunny"></ion-icon>
        </h4>
        <h4 className="" style={{ margin: 0, fontWeight: 500 }}>
          <span>14:12</span>
          &nbsp; LOCAL TIME
        </h4>
      </MobileTimeSection>
    </CSSTransition>
  );
};

const Banner = () => {
  const interval = useRef(null);
  const [activeBanner, setActiveBanner] = useState(banner1);
  const [activeText, setActiveText] = useState(1);

  const setActiveInterval = () => {
    setActiveBanner(prev => {
      if (prev !== banner1) {
        setActiveBanner(banner1);
        setActiveText(0);
        return;
      }
      setActiveBanner(banner2);
      setActiveText(1);
    });
  };
  useEffect(() => {
    interval.current = window.setInterval(setActiveInterval, 10000);
    return () => {
      window.clearInterval(interval.current);
    };
  }, []);

  const setActive = () => {
    setActiveInterval();
    window.clearInterval(interval.current);
    interval.current = window.setInterval(setActiveInterval, 10000);
  };

  return (
    <Container>
      <OverlayNoticeAndNav>
        <Notice maxWidth="1200px" />
        <Navigation maxWidth="1200px" />
      </OverlayNoticeAndNav>

      <BannerCon>
        {banners.map(b => (
          <CSSTransition
            unmountOnExit
            in={activeBanner === b.banner}
            classNames="banner-fade"
            timeout={{ enter: 10000, exit: 10000 }}
          >
            <BannerImg src={b.banner} zIndex={b.zIndex} />
          </CSSTransition>
        ))}
        {texts.map((t, idx) => (
          <BannerTexts show={activeText === idx}>
            <BannerTextsSection>
              <CSSTransition
                unmountOnExit
                in={activeText === idx}
                classNames="banner-text-small-move"
                timeout={{ enter: 10000 }}
              >
                <BannerTextSmall className="banner-text-small">
                  {t.small}
                </BannerTextSmall>
              </CSSTransition>
              <CSSTransition
                mountOnEnter
                in={activeText === idx}
                classNames="banner-text-big-move"
                timeout={{ enter: 10000 }}
              >
                <BannerTextBig className="banner-text-small">
                  {t.big}
                </BannerTextBig>
              </CSSTransition>
              <ButtonCon>
                <LearnMore
                  to={t.btn.path}
                  text={t.btn.text}
                  transition
                  transitionFlag={activeText === idx}
                />
                <MobileLocalTime transitionFlag={activeText === idx} />
              </ButtonCon>
            </BannerTextsSection>
            <LocalTime transitionFlag={activeText === idx} />
            <ArrowCon>
              <ion-icon
                onClick={setActive}
                style={{ cursor: 'pointer' }}
                name="arrow-back"
                size="large"
              ></ion-icon>
              <ion-icon
                onClick={setActive}
                style={{ cursor: 'pointer' }}
                name="arrow-forward"
                size="large"
              ></ion-icon>
            </ArrowCon>
            <Progress />
          </BannerTexts>
        ))}
      </BannerCon>
    </Container>
  );
};

export default Banner;
