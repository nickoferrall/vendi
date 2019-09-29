import React from "react"
import { graphql } from 'gatsby'

import Blog from '../pageComponents/blogs/index'
import Header from '../components/Header'
import HeaderCard from '../pageComponents/blogs/headerCard'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Grid from '@material-ui/core/Grid'

const Learn = ({ data: { allContentfulBlog } }) => {
    // console.log("allContentfulBlog", allContentfulBlog ? allContentfulBlog.edges : null)
    if (allContentfulBlog) {
        return (
            <Layout>
                heyyyy
                <Header title="Learn about running a hostel" />
                <SEO title="Learn" />
                <Grid container justify="center">
                    <HeaderCard />
                </Grid>
                <Grid container justify="center" >
                    {allContentfulBlog.edges.map(val => {
                        return (<Blog />)
                    })}
                </Grid>
            </Layout>
        )
    }
}

export const query = graphql`
query blog {
    allContentfulBlog {
        edges {
            node {
                id
                slug 
                createdAt
                body {
                    id
                    body
                }
                title
                image {
                   fluid(maxWidth: 800) {
                      ...GatsbyContentfulFluid
              }
          }
            }
            }
    }
  }
`

export default Learn
