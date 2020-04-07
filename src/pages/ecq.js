import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import NavigationProvider from '../context/NavigationProvider';

const ECQPage = ({ data }) => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="ECQ" />
        <div>
          <h1>Amazing Pandas Eating Things</h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </div>
      </Layout>
    </NavigationProvider>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default ECQPage;
