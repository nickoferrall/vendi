import React, { useState } from 'react';
import { Link } from "gatsby"
import Img from 'gatsby-image'

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './blogsContainerStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const HeaderCard = ({ classes, content }) => {
    const [elevation, setElevation] = useState(6)
    return (
        <Grid item xs={8.5} >
            <Link
                to={`/learn/${content.slug}`}
                style={{ textDecoration: 'none' }}
            >
                <Card className={classes.headerCard}
                    elevation={elevation}
                    onMouseEnter={() => setElevation(16)}
                    onMouseLeave={() => setElevation(6)}
                >
                    <Grid container>
                        <Grid item xs={8}>
                            <Img
                                className={classes.headerImg}
                                fluid={content.image[0].fluid}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CardContent className={classes.headerCardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {content.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {content.cardPreview}
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Box className={classes.readingTimeHeader} fontWeight="fontWeightLight" >
                                    {content.readingTime} MIN READ
                                </Box>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Link>
        </Grid >
    );
};

export default withStyles(styles)(HeaderCard)