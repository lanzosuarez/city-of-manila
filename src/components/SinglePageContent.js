import React from 'react';
import styled from '@emotion/styled';

import PageContainer from '../components/PageContainer';
import ImagePlaceholder from '../images/news-image-placeholder.png';
import Quote from '../images/quote-blue.png';
import line from '../images/blue-line.png';
import ImagePost from '../images/section-9-img-2.png';
import { formatDate } from '../helpers';
import { Link } from 'gatsby';

const Section = styled.div`
  padding: 4rem 0;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 15px;
  }
`;

const ContainerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
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

  a {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    color: var(--blue);
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;
// const PostHeader = styled.h3`
//   font-size: 20px;
//   line-height: 1.3;
//   margin-bottom: 0.5rem;
//   @media (max-width: 768px) {
//     font-size: 18px;
//   }
// `;
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

const SinglePageContent = ({ data, recentPosts }) => {
  return (
    <PageContainer>
      <Section>
        <ContainerWrap>
          <LeftContainer>
            <HeaderText>{data.body1.body1}</HeaderText>
            <ImageContainer src={ImagePlaceholder} alt="Image Placeholder" />
            {data.quote && (
              <QuoteContent>
                <QuoteImage src={Quote} alt="Quotation" />
                <QuoteText>
                  <QuoteHeader>{data.quote.quote}</QuoteHeader>
                  <QuoteSign>Mayor Isko Moreno</QuoteSign>
                </QuoteText>
              </QuoteContent>
            )}
            <p>{data.body2.body2}</p>
          </LeftContainer>
          <RightContainer>
            <RecentPostHeader>
              <h3>Recent Posts</h3>
              <img src={line} alt="blue line" className="line" />
            </RecentPostHeader>
            {recentPosts.map(({ node }, idx) => (
              <Post key={idx}>
                <PostsWrap>
                  <PostImg src={node.photo.file.url} alt="Post Image Header" />
                  <PostContent>
                    <Link to={`/latest-updates/${node.id}`}>
                      {node.heading1}
                    </Link>
                    <PostDate>{formatDate(node.date)}</PostDate>
                  </PostContent>
                </PostsWrap>
                <Border>
                  <BorderLine />
                </Border>
              </Post>
            ))}
          </RightContainer>
        </ContainerWrap>
      </Section>
    </PageContainer>
  );
};

export default SinglePageContent;
