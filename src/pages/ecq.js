import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import NavigationProvider from '../context/NavigationProvider';

const ECQPage = () => {
  return (
    <NavigationProvider>
      <Layout>
        <SEO title="ECQ" />
        <div></div>
      </Layout>
    </NavigationProvider>
  );
};

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;

export default ECQPage;
