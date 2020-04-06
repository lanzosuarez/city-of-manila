import React, { useState, useEffect } from 'react';
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
  height: 900px;
`;

const OverlayNoticeAndNav = styled.div`
  width: 100%;
  position: absolute;
  z-index: 3;
`;

const BannerCon = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 300px 70px 50px;
`;

const BannerTexts = styled.div`
  position: relative;
  display: ${props => (props.show ? 'flex' : 'none')};
  z-index: 4;
  color: white;
  padding-bottom: 130px;

  &::after {
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
  }

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
`;

const BannerTextBig = styled.h1`
  font-size: 100px;
  margin-bottom: 40px;
  color: #ffffff;
`;

const BannerTextsSection = styled.div`
  flex: 2;
`;

const BannerTimeSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
`;

const BannerImg = styled.img`
  height: 100%;
  width: 100%;
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
    small: 'We Have Rich History And Culture',
    big: 'Visit Our Art Gallery'
  },
  {
    small: 'We Are Always Open To Thee World',
    big: 'Smart City For Life'
  }
];

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState(banner1);
  const [activeText, setActiveText] = useState(0);

  // useEffect(() => {
  //   window.setInterval(() => {
  //     setActiveBanner(prev => {
  //       if (prev !== banner1) {
  //         setActiveBanner(banner1);
  //         setActiveText(0);
  //         return;
  //       }
  //       setActiveBanner(banner2);
  //       setActiveText(1);
  //     });
  //   }, 10000);
  // }, []);

  return (
    <Container>
      <OverlayNoticeAndNav>
        <Notice />
        <Navigation />
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
              <LearnMore />
            </BannerTextsSection>

            <BannerTimeSection>
              <h4 className="time-section-weather">
                26 &#8451; <ion-icon name="sunny"></ion-icon>
              </h4>
              <h4 className="time-section-local">
                <span>14:12</span>
                &nbsp; LOCAL TIME
              </h4>
            </BannerTimeSection>
            <ArrowCon>
              <ion-icon
                style={{ cursor: 'pointer' }}
                name="arrow-back"
              ></ion-icon>
              <ion-icon
                style={{ cursor: 'pointer' }}
                name="arrow-forward"
              ></ion-icon>
            </ArrowCon>
          </BannerTexts>
        ))}
      </BannerCon>
    </Container>
  );
};

export default Banner;
