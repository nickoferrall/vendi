const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const PostTemplate = path.resolve('./src/templates/forSale.js')

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
            path: `/${post.slug}`,
            component: PostTemplate,
            context: {
                slug: post.slug
            }
        })
    })
}
