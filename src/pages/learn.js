import React from "react"

import Blog from '../pageComponents/blogs/index'
import Header from '../components/Header'
import HeaderCard from '../pageComponents/blogs/headerCard'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Grid from '@material-ui/core/Grid'
import withWidth from '@material-ui/core/withWidth';

const Learn = ({ data: { allContentfulBlog }, width }) => {

  if (allContentfulBlog) {
    return (
      <Layout>
        <Header imageHeight={'400px'} title="Learn about running a hostel" />
        <SEO title="Learn" />
        <Grid container justify="center" >
          {allContentfulBlog.edges.map((blog, index) => {
            return index === 0 && width !== 'xs' ?
              <HeaderCard content={blog.node} /> :
              <Blog content={blog.node} />
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
        readingTime
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

export default withWidth()(Learn)

