import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import '../styles/about.css';

import line from '../images/blue-line.png';
import whiteline from '../images/white-line.png';
import imgSection2 from '../images/about-section-2-img.jpg';
import imgSection2Quote from '../images/about-section-2-quote-box.png';
import section3Bg from '../images/about-section-3.png';
import section5Bg from '../images/about-section-5.png';
import section5Img from '../images/about-section-5-img-2.jpg';

import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';
import SEO from '../components/SEO';
import Notice from '../components/Notice';
import Navigation from '../components/Navigation';
import scrollToSection from '../hooks/scrollToSection';
import useSlideIn from '../hooks/useSlideIn';
import { CSSTransition } from 'react-transition-group';
import useFadeIn from '../hooks/useFadeIn';

const Wrapper = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1010px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const LeftContainer = styled.div`
  width: 39%;
  padding: 15px;
  margin: 0px 30px 0px 0px;
  text-align: left;
  align-self: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1082px) {
    p.text-break {
      margin-bottom: 0px;
    }
  }
`;
const RightContainer = styled.div`
  width: 61%;
  min-height: 1px;
  padding: 15px;
  align-self: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const QuoteStyle = styled.img`
  position: relative;
  width: 100%;
  max-width: 450px;
  transform: translateX(200%);
  transition: transform 600ms ease-in-out;
  @media only screen and (max-width: 425px) {
    max-width: 100%;
  }
`;

const QuoteStyleBox = styled.img`
  position: absolute;
  top: 206px;
  right: 0px;
  max-width: 300px;
  width: 100%;
  transform: translateX(200%);
  transition: transform 500ms ease-in-out 300ms;
  @media only screen and (max-width: 480px) {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    top: 14px;
    right: 0;
    display: block;
  }
  @media only screen and (min-width: 481px) and (max-width: 650px) {
    top: 136vh;
    bottom: 49rem;
    width: 250px;
    right: 15px;
  }
  @media only screen and (min-width: 651px) and (max-width: 768px) {
    top: 136vh;
    bottom: 49rem;
    width: 250px;
    right: 5rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    top: 22rem;
    bottom: 49rem;
    width: 12rem;
    right: 0px;
  }
`;

const Section3Container = styled.div`
  background-image: url(${section3Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
`;
const Text = styled.div`
  text-align: justify;
  @media only screen and (max-width: 424px) {
    text-align: center;
  }
`;

const Section32Container = styled.div`
  background-color: white;
`;
const Section33Container = styled.div`
  background-color: #fcfcfc;
`;

const Section3PageContainer = styled.div`
  max-width: 1200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Section3 = styled.div`
  padding: 4rem 0;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px;
  }
`;

const Section5Container = styled.div`
  background-image: url(${section5Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
`;

const iconStyle = {
  color: 'white',
  fontSize: '2rem',
  marginRight: '30px'
};

const Section5ImgContent = styled.div`
  padding: 4rem 0px;

  @media only screen and (max-width: 425px) {
    padding: 4rem 0px 0 0;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    padding: 50px 10px 0px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const Section5Social = styled.div`
  padding: 100px 50px;
  h1 {
    margin-bottom: 1.5rem;
  }
  p {
    color: white;
  }
  @media only screen and (max-width: 425px) {
    padding: 1rem 15px 4rem;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    padding: 20px 50px 50px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 20px 20px 50px 0px;
  }
  ion-icon:hover {
    color: #ffa537 !important;
  }
`;

const MobileContent = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    display: none;
  }
`;
const PhotoCredit = styled.div`
  p {
    font-size: 9px;
    text-align: right;
    color: #b2b2b2;
    padding-bottom: 5px;
  }
`;

const items = [
  {
    date: 'Elementary',
    school: 'Tondo, Manila',
    course: 'Rosauro Alamario Elementary School'
  },
  { date: 'High School', school: 'Tondo, Manila', course: 'Tondo High School' },
  {
    date: 'College',
    school: 'Pamantasan ng Lungsod ng Maynila',
    course: 'Public Administration'
  },
  {
    date: 'College',
    school: 'Arellano University',
    course: 'Bachelor of Laws'
  },
  {
    date: 'College',
    school: 'University of the Philippines, Diliman',
    course: 'Local Legislation and Local Finance'
  },
  {
    date: 'College',
    school: 'Harvard Univesity',
    course: 'Executive Education Program '
  },
  {
    date: 'College',
    school: 'Oxford University',
    course: 'Strategic Leadership Program'
  }
];

const MobileTimeline = () => {
  return (
    <MobileContent data-usefadein="about-section4">
      <ul className="timeline2 timeline-split">
        <li className="timeline-item">
          <div className="timeline-content tlTitles">
            <span>Elementary</span>
            <h3 className="timeline-title">
              Rosauro Alamario Elementary School, Tondo, Manila
            </h3>
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content tlTitles"></div>
        </li>
        <li className="timeline-item">
          <div className="timeline-content tlTitles">
            <span>High School</span>
            <h3 className="timeline-title">Tondo High School, Tondo, Manila</h3>
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content tlTitles"></div>
        </li>
        <li className="timeline-item">
          <div className="timeline-content tlTitles">
            <span>Pamantasan ng Lungsod ng Maynila</span>
            <h3 className="timeline-title">Public Administration</h3>
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content tlTitles"></div>
        </li>
        <li className="timeline-item">
          <div className="timeline-content tlTitles">
            <span>Arellano University</span>
            <h3 className="timeline-title">Bachelor of Laws</h3>
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content tlTitles"></div>
        </li>
        <li className="timeline-item">
          <div className="timeline-content tlTitles">
            <span>University of the Philippines, Diliman</span>
            <h3 className="timeline-title">
              Local Legislation and Local Finance
            </h3>
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content tlTitles"></div>
        </li>
        <li className="timeline-item">
          <div className="timeline-content tlTitles"></div>
          <div className="timeline-marker"></div>
          <div className="timeline-content tlTitles">
            <span>Harvard University</span>
            <h3 className="timeline-title">Executive Education Program</h3>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-content tlTitles"></div>
          <div className="timeline-marker"></div>
          <div className="timeline-content tlTitles">
            <span>Oxford University</span>
            <h3 className="timeline-title">Strategic Leadership Program</h3>
          </div>
        </li>
      </ul>
    </MobileContent>
  );
};

const AboutPage = ({ location }) => {
  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('about-section2', { delay: '300ms' });
    addElement('about-section3', { delay: '300ms' });
    addElement('about-section4', { delay: '300ms' });
    addElement('about-section5', { delay: '300ms' });
    addElement('about-section6', { delay: '400ms' });
  }, []);

  const [slideIn, setSlideIn] = useState(false);
  useSlideIn(() => setSlideIn(true), 'mayor-profile');

  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  return (
    <NavigationProvider>
      <Layout>
        <SEO title="About" />
        <Notice />
        <Navigation />
        <Wrapper>
          <PageHeader name="About" />
          <PageContainer id="mayor-profile">
            <div className="section">
              <div className="section-container">
                <LeftContainer data-usefadein="about-section2">
                  <h1> Meet Mayor Isko </h1>
                  <img src={line} alt="blue line" className="line" />
                  <p className="text-break">
                    Mayor Francisco “Isko Moreno” Domagoso
                  </p>
                  <p>
                    (born October 24, 1974) – popularly known as "Isko Moreno"
                    and colloquially as Yorme Isko – has served as the 27th
                    Mayor of Manila since 1 July 2019.
                  </p>
                  <p>
                    His elevation to Manila’s Mayoralty occurred via a historic
                    election: defeating an incumbent Mayor – a former Philippine
                    President – on broad hopes of generational and
                    transformative change for the 449 year old Philippine
                    capital city.
                  </p>
                  <p>
                    Prior to becoming mayor, Mayor Domagoso was Manila’s Vice
                    Mayor from 2007 – 2016 and served in Manila’s City Council
                    representing the ancient, densely populated and economically
                    challenged urban district of Tondo. He was first elected to
                    Manila’s City Council in 1998.
                  </p>
                </LeftContainer>
                <RightContainer>
                  <CSSTransition classNames="homeSection5-slideIn" in={slideIn}>
                    <QuoteStyle
                      src={imgSection2}
                      alt="Meet The Man Who Care About Our City"
                    />
                  </CSSTransition>
                  <CSSTransition classNames="homeSection5-slideIn" in={slideIn}>
                    <QuoteStyleBox
                      src={imgSection2Quote}
                      alt="From Mayor Isko"
                    />
                  </CSSTransition>
                </RightContainer>
              </div>
            </div>
          </PageContainer>
          <Section3Container>
            <ContentContainer id="background" data-usefadein="about-section3">
              <Section3>
                <h1> Background </h1>
                <img src={line} alt="blue line" className="line" />
                <Text>
                  <p>
                    Francisco Moreno Domagoso is the only child of Joaquin
                    Domagoso, from Tondo, Manila and Rosario Moreno, from Allen,
                    Northern Samar.
                  </p>

                  <p>
                    His father was a stevedore who worked at Manila’s North
                    Harbour, also in Tondo; Moreno’s mother managed to keep a
                    loving household for the precocious Domagoso.
                  </p>

                  <p>
                    As a child, the young Domagoso learned the ways of Tondo’s
                    hardscrabble streets and contributed to the family’s tight
                    budget. He became a young entrepreneur, pushing a streetcart
                    going house-to-house to collect newspapers, glass bottles
                    and other recyclables, which he would resell to a junk
                    dealer. He also salvaged in restaurant garbage bins for
                    leftovers which were repurposed by his practical mother into
                    the family dinner.
                  </p>

                  <p>
                    In 1993, the fair-skinned Domagoso caught the attention of
                    Filipino talent scout Wowie Roxas who was attending a
                    funeral in Tondo. Persuaded to enter Philippine show
                    business and under a new screen name, “Isko Moreno” soon
                    emerged a popular host of then daily entertainment variety
                    show, “That’s Entertainment”, produced by the late German
                    Moreno, a pillar of the local entertainment industry.
                  </p>

                  <p>
                    However, Domagoso’s newfound affluence and public popularity
                    could never take him far from his roots in Tondo.
                  </p>

                  <p>
                    He ran for and won a City Council seat in 1998, representing
                    Manila’s first district. Was reelected in 2001 and 2004 and
                    in 2007 won his first term as Manila’s Vice Mayor.
                  </p>

                  <p>
                    To ensure he could craft and deliver the right policies to
                    his constituents, Domagoso undertook courses in Municipal
                    Legislation and Finance at University of the Philippines. He
                    studied Public Administration in Pamantasan ng Lungsod ng
                    Maynila (University of the City of Manila) and Law at
                    Arellano University. Domagoso undertook further education
                    modules at Harvard University’s Kennedy School of Government
                    and at the said Busines School at Oxford.
                  </p>

                  <p>
                    In 2013, in a controversial election, former Philippine
                    President Joseph Estrada was elected 26th Mayor of Manila.
                    In 2016, Domagoso ran for the Philippines’ Senate – all 24
                    Philippine Senators are elected nationally, 12 every 3 year
                    election cycle – and narrowly missed his opportunity to sit
                    in the legislative upper house. In 2017, Domagoso was
                    appointed Chairman of the Board of then North Luzon Railways
                    Corporation. In 2018, he was appointed Undersecretary for
                    Luzon Affairs of the Department of Social Welfare.
                  </p>

                  <p>
                    However, Domagoso’s heart has never strayed from Manila’s
                    dynamic, colourful streets and in 2019 he ran for City
                    Mayor, achieving an outstanding electoral victory. For the
                    people of Manila, one of their very own – a
                    &ldquo;&nbsp;Batang Manila&nbsp;&rdquo; – had finally become
                    their leader.
                  </p>
                </Text>
              </Section3>
            </ContentContainer>
            <PhotoCredit>
              <p>Background Photo Credit: Esquire Philippines</p>
            </PhotoCredit>
          </Section3Container>
          <Section32Container>
            <Section3PageContainer data-usefadein="about-section4">
              <Section3>
                <h1> Education </h1>
                <img src={line} alt="blue line" className="line" />
                <MobileTimeline />
                <SwiperContainer className="swiper-container">
                  <div className="swiper-wrapper timeline">
                    {items.map(i => (
                      <div className="swiper-slide">
                        <div className="status">
                          <span>{i.course}</span>
                        </div>
                        <div class="timestamp">
                          <span className="school">{i.school}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperContainer>
              </Section3>
            </Section3PageContainer>
          </Section32Container>
          <Section33Container data-usefadein="about-section5">
            <ContentContainer>
              <Section3>
                <h1> Personal </h1>
                <img src={line} alt="blue line" className="line" />
                <p>
                  He is married to Diana Lynn Ditan. They have five children,
                  Vincent Patrick , Frances Diane, Joaquín André, Franco Dylan,
                  and Drake Marcus.
                </p>
              </Section3>
            </ContentContainer>
          </Section33Container>
          <Section5Container data-usefadein="about-section6">
            <PageContainer id="links-to-social-media">
              <div className="section-last">
                <div className="section-container">
                  <LeftContainer>
                    <Section5ImgContent>
                      <img
                        src={section5Img}
                        alt="blue line"
                        className="Mayor Isko Moreno"
                      />
                    </Section5ImgContent>
                  </LeftContainer>
                  <RightContainer>
                    <Section5Social>
                      <h1 className="white">Connect with Mayor Isko</h1>
                      <img src={whiteline} alt="blue line" className="line" />
                      <p>I'm on social media and I want to hear from you!</p>
                      <a href="https://www.facebook.com/iskomorenodomagoso/ ">
                        <ion-icon
                          style={iconStyle}
                          name="logo-facebook"
                        ></ion-icon>
                      </a>
                      <a href="https://twitter.com/IskoMoreno">
                        <ion-icon
                          style={iconStyle}
                          name="logo-twitter"
                        ></ion-icon>
                      </a>
                      <a href="https://www.youtube.com/iskoverychannel">
                        <ion-icon
                          style={iconStyle}
                          name="logo-youtube"
                        ></ion-icon>
                      </a>
                      <a href="https://www.instagram.com/iskomorenodomagoso">
                        <ion-icon
                          style={iconStyle}
                          name="logo-instagram"
                        ></ion-icon>
                      </a>
                    </Section5Social>
                  </RightContainer>
                </div>
              </div>
            </PageContainer>
          </Section5Container>
        </Wrapper>
      </Layout>
    </NavigationProvider>
  );
};

export default AboutPage;
