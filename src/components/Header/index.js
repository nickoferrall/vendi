import React from "react"

import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import styles from './headerStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const Header = ({ classes, imageHeight = "300px", imgData, title }) => {
  const data = useStaticQuery(graphql`
    query {
      homepageImage: file(relativePath: { eq: "headers/colombia-flag-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={imgData ? imgData : data.homepageImage.childImageSharp.fluid}
      style={{ opacity: 0.99 }}
    >
      <Grid container alignItems="center" justify="center" style={{ height: imageHeight }}>
        <Grid item xs={4} justify="center" className={classes.headerContainer}>
          <Typography align="center" className={classes.headlineText} variant="h2">{title}</Typography>
        </Grid>
      </Grid >
    </BackgroundImage >
  )
}

export default withStyles(styles)(Header)
