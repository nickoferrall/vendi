import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import styles from './blogStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const BlogCard = ({ classes }) => {
    const [elevation, setElevation] = useState(6)

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
                <Card
                    className={classes.card}
                    elevation={elevation}
                    onMouseEnter={() => setElevation(20)}
                    onMouseLeave={() => setElevation(6)}
                >
                    <Img
                        className={classes.img}
                        fluid={imgData.homepageImage.childImageSharp.fluid}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                                </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica. Lizards are a widespread.
                            </Typography>
                    </CardContent>
                    <CardActions >
                        <Box className={classes.readingTime} fontWeight="fontWeightLight" >
                            4 MIN READ
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
        </Grid >
    );
};

export default withStyles(styles)(BlogCard)
