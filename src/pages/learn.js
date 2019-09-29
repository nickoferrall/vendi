import React from "react"

import Blog from '../pageComponents/blogs/index'
import Header from '../components/Header'
import HeaderCard from '../pageComponents/blogs/headerCard'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Grid from '@material-ui/core/Grid'

const Learn = ({ data: { allContentfulBlog } }) => {


  if (allContentfulBlog) {
    return (
      <Layout>
        <Header title="Learn about running a hostel" />
        <SEO title="Learn" />
        <Grid container justify="center">
          <HeaderCard />
        </Grid>
        <Grid container justify="center" >
          {allContentfulBlog.edges.map(blog => {
            return <Blog content={blog.node} />
          })}
        </Grid>
      </Layout>
    )
  }
}

export const query = graphql`
query blogs {
  allContentfulBlog {
    edges {
      node {
        id
        slug 
        createdAt
        cardPreview
        title
        image {
              fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid
              }
          }
        body {
          id
          json
    }
  }
}
  }
}
`

export default Learn

