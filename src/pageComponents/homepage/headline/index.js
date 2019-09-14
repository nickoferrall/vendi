import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import BackgroundImage from 'gatsby-background-image'

import styles from './headline.jss'
import { withStyles } from '@material-ui/core/styles'

const Headline = ({ classes }) => {
    const data = useStaticQuery(graphql`
    query {
      homepageImage: file(relativePath: { eq: "hostel-homepage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <BackgroundImage
            fluid={data.homepageImage.childImageSharp.fluid}
            style={{ opacity: 0.99 }}
        >
            <Grid container alignItems="center" justify="center" style={{ height: '600px' }}>
                <Grid item xs={4} className={classes.headlineText}>
                    <Typography variant="h2">Buy, sell and learn how to run a hostel</Typography>
                </Grid>
            </Grid >
        </BackgroundImage >
    )
}

export default withStyles(styles)(Headline)