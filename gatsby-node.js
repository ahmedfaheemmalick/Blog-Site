const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const query = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            content {
              content
            }
            slug
            author
            title
            publishedDate
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  query.data.allContentfulPost.edges.map((edge) => {
    actions.createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve(`./src/pages/blog/index.tsx`),
      context: {
        data: edge.node,
      },
    });
  });
};
