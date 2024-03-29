import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import format from 'date-fns/format';
import { useStaticQuery, graphql, Link } from 'gatsby';
import useFadeIn from '../hooks/useFadeIn';
import line from '../images/blue-line.png';
import PageContainer from '../components/PageContainer';
import { formatDate } from '../helpers';

const Wrapper = styled.div`
  width: 100%;
`;

const H1Style = {
  lineHeight: '1'
};

const LeftContainer = styled.div`
  width: 90%;
  @media only screen and (max-width: 425px) {
    display: block;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    width: 72%;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 80%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const RightContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 425px) {
    display: -webkit-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    width: 23%;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 20%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 425px) {
    display: block;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 426px) and (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 425px) {
    display: block;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 426px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const iconStyle = {
  color: '#01bcb1',
  fontSize: '20px',
  marginRight: ' 0.5rem',
  marginTop: '3px'
};

const pStyle = {
  fontWeight: '800',
  marginBottom: '3px'
};

const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 327px;
  position: relative;
  width: 270px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.5s ease;
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.24), 0 6px 6px rgba(0, 0, 0, 0.06);
  }
  @media only screen and (max-width: 425px) {
    margin: 20px auto;
    height: 277px;
  }
  @media only screen and (min-width: 426px) and (max-width: 728px) {
    margin: 20px auto;
  }
  @media only screen and (min-width: 729px) and (max-width: 1024px) {
    margin: 30px auto;
  }
`;

const CardContent = styled.div`
  width: 100%;
  margin: 0 auto;
  height: inherit;
  min-height: 100px;
  overflow-y: hidden;
  padding: 1rem;
`;

const CardHeader = styled.h3`
  line-height: 1.3;
  color: #2d2d2d;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0px;
  a {
    color: var(--blue);
  }
`;

const DateContent = styled.div`
  align-self: center;
  height: 50px;
  display: flex;
  padding: 15px 1rem;
  border-top: 1px solid #e1e1e1;
  width: 100%;
`;

const DateStyle = styled.p`
  margin-bottom: 0px;
  align-self: center;
  color: #04326a;
  font-weight: 600;
  font-size: 1rem;
`;

const Avatar = styled.div`
  background: ${props => `url(${props.imgUrl})`};
  height: 450px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const HomeSection9 = () => {
  const { allContentfulNewsroom } = useStaticQuery(
    graphql`
      query {
        allContentfulNewsroom(
          sort: { fields: [date], order: DESC }
          limit: 4
        ) {
          edges {
            node {
              id
              heading1
              date
              photo {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  );

  const [addElement] = useFadeIn();

  useEffect(() => {
    addElement('home-section9', { delay: '400ms' });
  }, []);

  return (
    <Wrapper data-usefadein="home-section9">
      <PageContainer>
        <div className="section">
          <Section>
            <LeftContainer>
              <h1 style={H1Style}>Newsroom</h1>
              <img src={line} alt="blue line" className="line" />
            </LeftContainer>
            <RightContainer>
              <span>
                <ion-icon style={iconStyle} name="apps"></ion-icon>
              </span>
              <p style={pStyle}>
                <Link to="news-room">View All</Link>
              </p>
            </RightContainer>
          </Section>
          <CardContainer>
            {allContentfulNewsroom.edges.map(({ node }, idx) => (
              <Card key={idx}>
                <Avatar imgUrl={node.photo.file.url} />
                <CardContent>
                  <CardHeader>
                    <Link to={`/news-room/${node.id}`}>{node.heading1}</Link>
                  </CardHeader>
                </CardContent>
                <DateContent>
                  <DateStyle>{formatDate(node.date)}</DateStyle>
                </DateContent>
              </Card>
            ))}
          </CardContainer>
        </div>
      </PageContainer>
    </Wrapper>
  );
};

export default HomeSection9;
