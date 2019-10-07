const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const BlogTemplate = path.resolve('./src/templates/blog.js');
const PostTemplate = path.resolve('./src/templates/forSale.js');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulAllHostels {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  const blogResult = await graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  const posts = result.data.allContentfulAllHostels.edges;
  posts.forEach(({ node: post }) => {
    createPage({
      path: `/${post.slug}`,
      component: PostTemplate,
      context: {
        slug: post.slug
      }
    });
  });

  const blogs = blogResult.data.allContentfulBlog.edges;
  blogs.forEach(({ node: blog }) => {
    createPage({
      path: `/learn/${blog.slug}`,
      component: BlogTemplate,
      context: {
        slug: blog.slug
      }
    });
  });
};
