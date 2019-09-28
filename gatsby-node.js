const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const PostTemplate = path.resolve('./src/templates/forSale.js')

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = createFilePath({ node, getNode, basePath: 'posts' })
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug,
//         })
//     }
// }

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
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
    `)
    const posts = result.data.allContentfulAllHostels.edges
    posts.forEach(({ node: post }) => {
        createPage({
            path: `/for-sale/${post.slug}`,
            component: PostTemplate,
            context: {
                slug: post.slug
            }
        })
    })
}