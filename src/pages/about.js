import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import '../styles/about.css';

import line from '../images/blue-line.png';
import imgSection2 from '../images/about-section-2.png';
import imgSection2Quote from '../images/about-section-2-quote-box.png';
import section3Bg from '../images/about-section-3.png';
import itemImg from '../images/team-placeholder.png';
import section5Bg from '../images/about-section-5.png';
import section5Img from '../images/about-section-5-img.png';
import whiteline from '../images/white-line.png';

import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import Layout from '../components/Layout';
import NavigationProvider from '../context/NavigationProvider';
import SEO from '../components/seo';

const Wrapper = styled.div`
  width: 100%;
`;

const LeftContainer = styled.div`
  width: 39%;
  padding: 15px;
  margin: 0px 30px 0px 0px;
  text-align: left;
  align-self: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;
const RightContainer = styled.div`
  width: 61%;
  min-height: 1px;
  padding: 15px;
  align-self: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const QuoteStyle = styled.img`
  position: relative;
  width: 100%;
  max-width: 450px;
  @media only screen and (max-width: 425px) {
    max-width: 100%;
  }
`;

const QuoteStyleBox = styled.img`
  position: absolute;
  top: 184px;
  right: 0px;
  max-width: 300px;
  width: 100%;
  @media only screen and (max-width: 425px) {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    top: 14px;
    right: 0;
    display: block;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    top: 32rem;
    bottom: 40rem;
    width: 100%;
    right: 15px;
  }
`;

const Section3Container = styled.div`
  background-image: url(${section3Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
`;

const Section32Container = styled.div`
  background-color: white;
`;
const Section33Container = styled.div`
  background-color: #fcfcfc;
`;

const textWidth = {
  paddingRight: '15px',
  paddingLeft: '15px'
};

const Section3 = styled.div`
  padding: 4rem 0;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px;
  }
`;

const Section4Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 0px;
  @media only screen and (max-width: 425px) {
    justify-content: center;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    justify-content: space-evenly;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    justify-content: space-evenly;
    margin: 0px 15px;
  }
`;

const Section4Item = styled.div`
  display: block;
  width: 260px;
  background-color: white;
  box-shadow: 6px 5px 14px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  margin-top: 20px;

  @media only screen and (min-width: 426px) and (max-width: 1024px) {
    width: 336px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1439px) {
    width: 236px;
  }
`;

const ItemWrap = styled.div`
  padding: 30px 30px 10px 30px;
`;

const ItemText = styled.p`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 700;
  color: #e21130;
  text-transform: uppercase;
`;

const ItemTextHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 20px;
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
  fontSize: '40px',
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
  padding: 100px;
  @media only screen and (max-width: 425px) {
    padding: 1rem 15px 4rem;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    padding: 20px 50px 50px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 20px 20px 50px 0px;
  }
`;

const AboutPage = ({ location }) => {
  useEffect(() => {
    const { hash } = location;
    if (hash.length) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <NavigationProvider>
      <Layout>
        <SEO title="About" />
        <Wrapper>
          <PageHeader name="About" />
          <PageContainer>
            <div className="section">
              <div className="section-container">
                <LeftContainer>
                  <h1> Meet Mayor Isko </h1>
                  <img src={line} alt="blue line" className="line" />
                  <p>
                    Mayor Francisco “Isko Moreno” Domagoso (born October 24,
                    1974) – popularly known as "Isko Moreno" and colloquially as
                    Yorme Isko – has served as the 27th Mayor of Manila since 1
                    July 2019.
                  </p>
                  <p>
                    His elevation to Manila’s Mayoralty occurred via a historic
                    election: defeating an incumbent Mayor – a former Philippine
                    President – on broad hopes of generational and
                    transformative change for the 449 year old Philippines
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
                  <QuoteStyle
                    src={imgSection2}
                    alt="Meet The Man Who Care About Our City"
                  />
                  <QuoteStyleBox src={imgSection2Quote} alt="From Mayor Isko" />
                </RightContainer>
              </div>
            </div>
          </PageContainer>
          <Section3Container>
            <PageContainer id="background">
              <Section3>
                <h1> Background </h1>
                <img src={line} alt="blue line" className="line" />
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
                  going house-to-house to collect newspapers, glass bottles and
                  other recyclables, which he would resell to a junk dealer. He
                  also salvaged in restaurant garbage bins for leftovers which
                  were repurposed by his practical mother into the family
                  dinner.
                </p>

                <p>
                  In 1993, the fair-skinned Domagoso caught the attention of
                  Filipino talent scout Wowie Roxas who was attending a funeral
                  in Tondo. Persuaded to enter Philippine show business and
                  under a new screen name, “Isko Moreno” soon emerged a popular
                  host of then daily entertainment variety show, “That’s
                  Entertainment”, produced by the late German Moreno, a pillar
                  of the local entertainment industry.
                </p>

                <p>
                  However, Domagoso’s newfound affluence and public popularity
                  could never take him far from his roots in Tondo.
                </p>

                <p>
                  He ran for and won a City Council seat in 1998, representing
                  Manila’s first district. Was reelected in 2001 and 2004 and in
                  2007 won his firm term as Manila’s Vice Mayor.
                </p>

                <p>
                  To ensure he could craft and deliver the right policies to his
                  constituents, Domagoso undertook courses in Municipal
                  Legislation and Finance at University of the Philippines. He
                  studied Public Administration in Pamantasan ng Lungsod ng
                  Maynila (University of the City of Manila) and Law at Arellano
                  University. Domagoso undertook further education modules at
                  Harvard University’s Kennedy School of Government and at the
                  Said Busines School at Oxford.
                </p>

                <p>
                  In 2013, in a controversial election, former Philippine
                  President Joseph Estrada was elected 26th Mayor of Manila. In
                  2016, Domagoso ran for the Philippines’ Senate – all 24
                  Philippine Senators are elected nationally, 12 every 3 year
                  election cycle – and narrowly missed his opportunity to sit in
                  the legislative upper house. In 2017 Domagoso was appointed
                  Chairman of the Board of then North Luzon Railways
                  Corporation. In 2018 he was appointed Undersecretary for Luzon
                  Affairs of the Department of Social Welfare.
                </p>

                <p>
                  However, Domagoso’s heart has never strayed from Manila’s
                  dynamic, colourful streets and in 2019 he ran for City Mayor,
                  achieving an outstanding electoral victory. For the people of
                  Manila, one of their very own – a &ldquo; Batang Manila
                  &rdquo; – had finally become their leader.
                </p>
              </Section3>
            </PageContainer>
          </Section3Container>
          <Section32Container>
            <PageContainer>
              <Section3>
                <h1> Education </h1>
                <img src={line} alt="blue line" className="line" />
                <div>
                  <ul className="timeline timeline-split">
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>College | Harvard University</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content tlTitles">
                        <h3 className="timeline-title">
                        Executive Education Program
                        </h3>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>College | Oxford University</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content tlTitles">
                        <h3 className="timeline-title">
                          Strategic Leadership Program
                        </h3>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>
                          College | University of the Philippines DILIMAN
                        </span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content tlTitles">
                        <h3 className="timeline-title">
                          Local Legislation and Local Finance
                        </h3>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>College | Pamantasan ng Lungsod ng Maynila</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content tlTitles">
                        <h3 className="timeline-title">
                          Public Administration
                        </h3>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>College | Pamantasan ng Lungsod ng Maynila</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content tlTitles">
                        <h3 className="timeline-title">Bachelor of Laws</h3>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>College | Pamantasan ng Lungsod ng Maynila</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content tlTitles">
                        <h3 className="timeline-title">Bachelor of Laws</h3>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>High School</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content tlTitles">
                        <h3 className="timeline-title">
                          Tondo High School, Tondo, Manila{' '}
                        </h3>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>Elementary</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content tlTitles">
                        <h3 className="timeline-title">
                          Rosauro Alamario Elementary School, Tondo, Manila{' '}
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </Section3>
            </PageContainer>
          </Section32Container>
          <Section33Container>
            <PageContainer>
              <Section3>
                <h1> Personal </h1>
                <img src={line} alt="blue line" className="line" />
                <p>
                He is married to Diana Lynn Ditan. They have five children, Vincent Patrick , Frances Diane, Joaquín André, Franco Dylan, and Drake Marcus.
                </p>
              </Section3>
            </PageContainer>
          </Section33Container>
          <PageContainer id="leadership-team">
            <div className="section">
              <div className="center">
                <h1 style={textWidth}> His Leadership Team </h1>
                <img src={line} alt="blue line" className="line" />
                <p style={textWidth}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{' '}
                </p>
              </div>
              <Section4Container>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
                <Section4Item>
                  <img src={itemImg} alt="Team" />
                  <ItemWrap>
                    <ItemTextHeader>First Last Name</ItemTextHeader>
                    <ItemText>City Councilor, District 1</ItemText>
                  </ItemWrap>
                </Section4Item>
              </Section4Container>
            </div>
          </PageContainer>
          <Section5Container>
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
                      <a href="https://www.facebook.com/iskomorenodomagoso/ "><ion-icon
                        style={iconStyle}
                        name="logo-facebook"
                      ></ion-icon></a>
                      <a href="https://twitter.com/IskoMoreno"><ion-icon
                        style={iconStyle}
                        name="logo-twitter"
                      ></ion-icon></a>
                      <a href="https://www.youtube.com/iskoverychannel"><ion-icon
                        style={iconStyle}
                        name="logo-youtube"
                      ></ion-icon></a>
                      <a href="https://www.instagram.com/iskomorenodomagoso"><ion-icon
                        style={iconStyle}
                        name="logo-instagram"
                      ></ion-icon></a>
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
