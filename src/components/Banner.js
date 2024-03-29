import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { CSSTransition } from 'react-transition-group';
import format from 'date-fns/format';

import '../styles/banner.css';

import banner1 from '../images/header-slide-1.jpg';
import banner2 from '../images/header-slide-2.jpg';
import Notice from './Notice';
import Navigation from './Navigation';
import LearnMore from './LearnMore';
import { getTemp } from '../helpers';

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
    height: 460px;
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
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 1.2rem;

  @media (max-width: 1280px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0px;
    margin-bottom: 20px;
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    margin-bottom: 5px;
    font-size: 3.9vw;
    line-height: 1.2;
  }
`;

const BannerTextBig = styled.h1`
  font-size: 49px;
  margin-bottom: 40px;
  color: #ffffff;
  line-height: 1.2;
  word-break: break-word;
  font-weight: 600;

  @media (max-width: 1280px) {
    font-size: 40px;
  }
  @media (max-width: 920px) {
    font-size: 36px;
  }
  @media (max-width: 576px) {
    font-size: 29px;
    margin-bottom: 20px;
  }

  @media (max-width: 400px) {
    font-size: 23px;
    margin-bottom: 18px;
  }
`;

const BannerTextsSection = styled.div`
  max-width: 48%;

  @media (max-width: 920px) {
    max-width: 100%;
  }
`;

const BannerTimeSection = styled.div`
  align-self: center;
  @media (max-width: 576px) {
    display: none;
  }
`;

const MobileTimeSection = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem !important;
  }
  h4 {
    @media (max-width: 576px) {
      font-size: 12px;
      line-height: 1.5;
    }
  }
`;

const ButtonCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  @media (max-width: 576px) {
    width: 100%;
    display: grid;
    grid-column-gap: 16px;
    grid-auto-flow: column;
    justify-content: start;
  }
  @media only screen and (min-width: 577px) and (max-width: 920px) {
    width: 95%;
    display: grid;
    grid-gap: 31px;
  }
`;

const BannerImg = styled.img`
  filter: brightness(0.7);
  position: absolute;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  opacity: ${props => (props.show ? 1 : 0)};
  left: 0;
  top: 0;
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
    banner: banner2
  },
  {
    banner: banner1
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
    small: 'The most difficult public health challenge of our lifetime',
    big: 'We will defeat COVID-19 together',
    btn: {
      text: 'LEARN MORE',
      path: '/covid'
    }
  }
];

const localTime = () => format(new Date(), 'H:mm ');

const LocalTime = ({ transitionFlag, temp }) => {
  return (
    <CSSTransition
      appear
      in={transitionFlag}
      classNames="banner-time"
      timeout={{ enter: 10000 }}
    >
      <BannerTimeSection>
        <div>
          <h4 className="time-section-weather">
            {temp} &#8451; <ion-icon name="sunny"></ion-icon>
          </h4>
          <h4 className="time-section-local">
            <span>{localTime()}</span>
            &nbsp; LOCAL TIME
          </h4>
        </div>
      </BannerTimeSection>
    </CSSTransition>
  );
};

const MobileLocalTime = ({ transitionFlag, temp }) => {
  return (
    <CSSTransition
      appear
      in={transitionFlag}
      classNames="banner-time"
      timeout={{ enter: 10000 }}
    >
      <MobileTimeSection>
        <h4 className="" style={{ margin: 0, fontWeight: 500 }}>
          {temp} &#8451; <ion-icon name="sunny"></ion-icon>
        </h4>
        <h4 className="" style={{ margin: 0, fontWeight: 500 }}>
          <span>{localTime()}</span>
          &nbsp; LOCAL TIME
        </h4>
      </MobileTimeSection>
    </CSSTransition>
  );
};

const Banner = () => {
  const interval = useRef(null);
  const [activeBanner, setActiveBanner] = useState(null);
  const [activeText, setActiveText] = useState(0);
  const [temp, setTemp] = useState(null);

  const getLocalWeather = async () => {
    const data = await getTemp();
    setTemp(data.main.feels_like);
  };

  useEffect(() => {
    window.setTimeout(() => {
      setActiveBanner(banner1);
    }, 400);
    getLocalWeather();
  }, []);

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
        <BannerImg
          width="100%"
          show={true}
          loading="lazy"
          src={banners[1].banner}
          alt={`banner-image-1`}
        />
        <BannerImg
          width="100%"
          show={activeBanner === banners[0].banner}
          loading="lazy"
          src={banners[0].banner}
          alt={`banner-image-0`}
        />

        {texts.map((t, idx) => (
          <BannerTexts key={idx} show={activeText === idx}>
            <BannerTextsSection>
              <CSSTransition
                appear
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
                appear
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
                {temp && (
                  <LocalTime temp={temp} transitionFlag={activeText === idx} />
                )}
                {temp && (
                  <MobileLocalTime
                    temp={temp}
                    transitionFlag={activeText === idx}
                  />
                )}
              </ButtonCon>
            </BannerTextsSection>
            <CSSTransition
              appear
              in={activeText === idx}
              classNames="banner-fade"
              timeout={{ enter: 10000 }}
            >
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
            </CSSTransition>
            <Progress />
          </BannerTexts>
        ))}
      </BannerCon>
    </Container>
  );
};

export default Banner;
