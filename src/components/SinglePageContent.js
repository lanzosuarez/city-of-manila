import React from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';
import ImagePlaceholder from '../images/news-image-placeholder.png';
import Quote from '../images/quote-blue.png';
import line from '../images/blue-line.png';
import ImagePost from '../images/section-9-img-2.png';

const Section = styled.div`
  padding: 4rem 0;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px;
  }
`;

const ContainerWrap = styled.div`
  display:flex;
  flex-wrap: wrap:
  height:100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;
const LeftContainer = styled.div`
  width: 76%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const RightContainer = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const HeaderText = styled.h2`
  line-height: 1.3;
  font-weight: 600;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  margin: 0.5rem 0 1.5rem;
`;
const QuoteContent = styled.div`
  display: flex;
`;
const QuoteImage = styled.img`
  align-self: flex-start;
  width: 25px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 12px;
    margin-right: 9px;
  }
`;
const QuoteText = styled.div`
  display: block;
`;
const QuoteHeader = styled.p`
  font-size: 26px;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;
const QuoteSign = styled.p`
  font-size: 26px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const RecentPostHeader = styled.div`
  text-align: center;
  h3 {
    color: #05326b;
    margin-bottom: 1rem;
  }
`;
const Post = styled.div``;
const PostsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PostImg = styled.img`
  width: 30%;
  align-self: flex-start;
`;
const PostContent = styled.div`
  width: 65%;
`;
const PostHeader = styled.h3`
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const PostDate = styled.p`
  font-size: 14px;
`;
const Border = styled.div`
  height: 10px;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const BorderLine = styled.hr`
  border-top: 1px solid #e4e4e4;
  /* margin: 0px 15px; */
  background: white;
`;

const SinglePageContent = () => {
  return (
    <PageContainer>
      <Section>
        <ContainerWrap>
          <LeftContainer>
            <HeaderText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </HeaderText>
            <ImageContainer src={ImagePlaceholder} alt="Image Placeholder" />
            <QuoteContent>
              <QuoteImage src={Quote} alt="Quotation" />
              <QuoteText>
                <QuoteHeader>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </QuoteHeader>
                <QuoteSign>Mayor Isko Moreno</QuoteSign>
              </QuoteText>
            </QuoteContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </LeftContainer>
          <RightContainer>
            <RecentPostHeader>
              <h3>Recent Posts</h3>
              <img src={line} alt="blue line" className="line" />
            </RecentPostHeader>
            <Post>
              <PostsWrap>
                <PostImg src={ImagePost} alt="Post Image Header" />
                <PostContent>
                  <PostHeader>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </PostHeader>
                  <PostDate>April 11, 2020</PostDate>
                </PostContent>
              </PostsWrap>
              <Border>
                <BorderLine />
              </Border>
            </Post>
            <Post>
              <PostsWrap>
                <PostImg src={ImagePost} alt="Post Image Header" />
                <PostContent>
                  <PostHeader>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </PostHeader>
                  <PostDate>April 11, 2020</PostDate>
                </PostContent>
              </PostsWrap>
              <Border>
                <BorderLine />
              </Border>
            </Post>
            <Post>
              <PostsWrap>
                <PostImg src={ImagePost} alt="Post Image Header" />
                <PostContent>
                  <PostHeader>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </PostHeader>
                  <PostDate>April 11, 2020</PostDate>
                </PostContent>
              </PostsWrap>
              <Border>
                <BorderLine />
              </Border>
            </Post>
          </RightContainer>
        </ContainerWrap>
      </Section>
    </PageContainer>
  );
};

export default SinglePageContent;
