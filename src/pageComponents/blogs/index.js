import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './blogsStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const BlogCard = ({ classes, content }) => {
    const [elevation, setElevation] = useState(6)

    console.log("From blog card", content ? content : null)

    const imgData = useStaticQuery(graphql`
    query {
      homepageImage: file(relativePath: { eq: "hostel-homepage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <Grid container justify="center" xs={12} md={6} >
            <Grid item xs={8.5}>
                <Link
                    to={`/learn/${content.slug}`}
                    style={{ textDecoration: 'none' }}
                >
                    <Card
                        className={classes.card}
                        elevation={elevation}
                        onMouseEnter={() => setElevation(16)}
                        onMouseLeave={() => setElevation(6)}
                    >
                        <Img
                            className={classes.img}
                            fluid={imgData.homepageImage.childImageSharp.fluid}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {content.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {content.cardPreview}
                                {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica. Lizards are a widespread. */}

                                {/* {documentToReactComponents(content.body.json)} */}
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Box className={classes.readingTime} fontWeight="fontWeightLight" >
                                4 MIN READ
                        </Box>
                        </CardActions>
                    </Card>
                </Link>
            </Grid>
        </Grid >
    );
};

export default withStyles(styles)(BlogCard)
