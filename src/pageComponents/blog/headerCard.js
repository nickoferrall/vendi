import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './blogStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const HeaderCard = ({ classes }) => {
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
        <Grid item xs={8.5} >
            <Card className={classes.headerCard}
                elevation={elevation}
                onMouseEnter={() => setElevation(20)}
                onMouseLeave={() => setElevation(6)}
            >
                <Grid container>
                    <Grid item xs={8}>
                        <Img
                            fluid={imgData.homepageImage.childImageSharp.fluid}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CardContent className={classes.headerCardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                            </Typography>
                            <CardActions >
                                <Box className={classes.readingTimeHeader} fontWeight="fontWeightLight" >
                                    4 MIN READ
                                </Box>
                            </CardActions>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Grid >
    );
};

export default withStyles(styles)(HeaderCard)