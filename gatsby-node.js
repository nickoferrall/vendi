const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const BlogTemplate = path.resolve('./src/templates/blog.js')
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
    `)

    const hostels = result.data.allContentfulAllHostels.edges
    hostels.forEach(({ node: hostel }) => {
        createPage({
            path: `/${hostel.slug}`,
            component: PostTemplate,
            context: {
                slug: hostel.slug
            }
        })
    })

    const blogs = blogResult.data.allContentfulBlog.edges
    blogs.forEach(({ node: blog }) => {
        createPage({
            path: `/learn/${blog.slug}`,
            component: BlogTemplate,
            context: {
                slug: blog.slug
            }
        })
    })
}
