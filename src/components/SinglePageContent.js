import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useFadeIn from '../hooks/useFadeIn';
import PageContainer from '../components/PageContainer';
import Quote from '../images/quote-blue.png';
import line from '../images/blue-line.png';
import { formatDate } from '../helpers';
import { Link } from 'gatsby';
import GalleryVideo from './GalleryVideo';
import { navigate } from 'gatsby';

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
const HeaderText = styled.p`
  font-weight: 700;
`;
const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  margin: 0.5rem 0 1.5rem;
`;
const AssetContainer = styled.div`
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
      margin-bottom: 1px;
    }
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

const Tag = styled.div`
  background-color: #dfeaf1;
  width: inherit;
  padding: 5px 23px;
  text-align: center;
  cursor: pointer;

  p {
    color: #417190;
    font-size: 0.8rem;
    margin-bottom: 0rem;
  }

  @media (max-width: 1035px) {
    display: inline;
    margin-right: 5px;
    margin-bottom: 5px;
    width: unset;
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.9rem;
    }
  }
`;

const TagCon = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 61px;
  p {
    margin-bottom: 0px;
  }
  @media (max-width: 1035px) {
    grid-auto-flow: row;
    grid-template-columns: unset;
    grid-gap: 5px;
  }
`;

const TagList = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 9px;

  p {
    margin-bottom: 0rem;
  }

  @media (max-width: 1035px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
`;

const SinglePageContent = ({ data, recentPosts, tagNames }) => {
  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('content-section1', { delay: '300ms' });
    addElement('content-section2', { delay: '300ms' });
    addElement('content-section3', { delay: '300ms' });
    addElement('content-section4', { delay: '300ms' });
    addElement('content-section5', { delay: '300ms' });
    addElement('content-section6', { delay: '300ms' });
  }, []);

  const tags = tagNames.split(',');

  const navigateOnClick = tag => () =>
    navigate(`/news-room?q=${tag}#news-list`);

  return (
    <PageContainer>
      <Section>
        <ContainerWrap>
          <LeftContainer>
            <HeaderText data-usefadein="content-section1">
              {data.body1.body1}
            </HeaderText>
            <AssetContainer data-usefadein="content-section2">
              {data.youtubeLink ? (
                <GalleryVideo url={data.youtubeLink} />
              ) : (
                <ImageContainer src={data.photoLink} alt="Image Placeholder" />
              )}
            </AssetContainer>
            {data.quote && (
              <QuoteContent data-usefadein="content-section3">
                <QuoteImage src={Quote} alt="Quotation" />
                <QuoteText>
                  <QuoteHeader>{data.quote.quote}</QuoteHeader>
                  <QuoteSign>{data.quoteFrom}</QuoteSign>
                </QuoteText>
              </QuoteContent>
            )}
            <p
              dangerouslySetInnerHTML={{
                __html: data.body2.childMarkdownRemark.html
              }}
              data-usefadein="content-section4"
            ></p>
            <TagCon data-usefadein="content-section5">
              <p>Tags: </p>
              <TagList>
                {tags.map((t, idx) => (
                  <Tag onClick={navigateOnClick(t)} key={idx}>
                    <p>{t}</p>
                  </Tag>
                ))}
              </TagList>
            </TagCon>
          </LeftContainer>
          <RightContainer data-usefadein="content-section6">
            <RecentPostHeader>
              <h3>Latest Stories</h3>
              <img src={line} alt="blue line" className="line" />
            </RecentPostHeader>
            {recentPosts.map(({ node }, idx) => (
              <Post key={idx}>
                <PostsWrap>
                  <PostImg src={node.photo.file.url} alt="Post Image Header" />
                  <PostContent>
                    <Link to={`/news-room/${node.id}`}>{node.heading1}</Link>
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
