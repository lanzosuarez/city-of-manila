const path = require('path');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   if (node.internal.type === 'MarkdownRemark') {
//     const { createNodeField } = actions;
//     const slug = createFilePath({ node, getNode, basePath: `pages` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug
//     });
//   }
// };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulPrograms {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  result.data.allContentfulPrograms.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/program.js`),
      context: {
        slug: node.slug
      }
    });
  });

  const latestUpdates = await graphql(`
    query {
      allContentfulNewsroom {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  latestUpdates.data.allContentfulNewsroom.edges.forEach(({ node }) => {
    createPage({
      path: `/news-room/${node.id}`,
      component: path.resolve(`./src/templates/latest-update.js`),
      context: {
        id: node.id
      }
    });
  });
};
