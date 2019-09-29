import React from "react"
import { graphql } from 'gatsby'

import Blog from '../pageComponents/blogs/index'
import Header from '../components/Header'
import HeaderCard from '../pageComponents/blogs/headerCard'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from '../pageStyles/blogStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const Learn = ({ classes, data: { contentfulBlog } }) => {
    console.log("blog contentfulBlog", contentfulBlog ? contentfulBlog : null)
    if (contentfulBlog) {
        return (
            <>
                <Layout />
                <Header title={contentfulBlog.title} />
                <SEO title={contentfulBlog.slug} />
                <Grid className={classes.container} container justify="center" >
                    <Grid item xs={7} className={classes.blogItem}>
                        <Typography style={{ fontFamily: 'Roboto', fontWeight: '100' }}>
                            {documentToReactComponents(contentfulBlog.body.json)}
                        </Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export const query = graphql`
query blog($slug: String!) {
    contentfulBlog(slug: {eq: $slug}) {
                id
                slug 
                createdAt
                body {
                    id
                    json
                }
                title
                image {
                   fluid(maxWidth: 800) {
                      ...GatsbyContentfulFluid
              }
          }
    }
  }
`

export default withStyles(styles)(Learn)
