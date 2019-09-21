import React from 'react';

import Img from 'gatsby-image'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './AllHostelsStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const AllHostelsCard = ({ hostelData, classes }) => {

    return (
        <Grid container justify="center" xs={12} md={4}>
            <Grid className={classes.gridItem} item xs={8.5}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <Img className={classes.media} fluid={hostelData.image} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {hostelData.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {hostelData.body.length < 250 ? hostelData.body :
                                    `${hostelData.body.substring(0, 250)}...`}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid >
        </Grid>
    );
}

export default withStyles(styles)(AllHostelsCard)

