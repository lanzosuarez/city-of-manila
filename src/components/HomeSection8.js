import React, { useState } from 'react';
import styled from '@emotion/styled';

import section8Bg from '../images/section-8-bg.jpg';

import PageContainer from '../components/PageContainer';
import HomeVideo from '../components/HomeVideo';

const Wrapper = styled.div`
  width: 100%;
`;

const SectionContainer = styled.div`
  background-image: url(${section8Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top;
`;

const Section = styled.div`
  color: white;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  padding: 125px 30px;
`;

const SectionHeader = styled.h1`
  color: white;
  font-size: 42px;
  line-height: 1.4;
  @media only screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

const iconStyle = {
  color: 'white',
  fontSize: '25px',
  marginTop: '25%'
};

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffa537;
  border-radius: 50px;
  margin-top: 10px;
  margin: auto;
  transition: all 1s ease 0s;
  cursor: pointer;
  :hover {
    border: 2px solid #ffffff;
    background-color: transparent;
  }
`;
const scrollToItem = () => {
  const el = document.getElementById("video-section");
  if (el) {
    window.setTimeout(() => {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }, 500);
  }
};

const HomeSection8 = () => {
  const [watchVideo, setWatchVideo] = useState(false);
  const handleWatchVideo = e => {
    setWatchVideo(true);
    scrollToItem();
  };
  return (
    <Wrapper id="video-section">
      <SectionContainer>
        <PageContainer>
          <div className={watchVideo ? 'display-block' : 'display-none'}>
            <HomeVideo
              url="https://www.youtube.com/watch?v=ci3kxhSgk1E"
              playing={watchVideo}
            />
          </div>
          <Section className={watchVideo ? 'display-none' : 'display-block'}>
            <SectionHeader>
              Feeding a city of 1.8 million during a crisis
            </SectionHeader>
            <p>
              We committed to delivering food packs to close to 600,000
              families. It was challenging, we had our shortcomings, but we will
              not stop until we reach every single family.
            </p>
            <div>
              <IconBox onClick={handleWatchVideo}>
                <ion-icon
                  style={iconStyle}
                  name="caret-forward-outline"
                ></ion-icon>
              </IconBox>
            </div>
          </Section>
        </PageContainer>
      </SectionContainer>
    </Wrapper>
  );
};

export default HomeSection8;
