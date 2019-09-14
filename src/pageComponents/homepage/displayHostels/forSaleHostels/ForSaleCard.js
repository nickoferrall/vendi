import React from 'react';

import Img from 'gatsby-image'
import { Link } from "gatsby"

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './forSaleHostels.jss'
import { withStyles } from '@material-ui/core/styles'

const ForSaleCard = ({ hostelData, classes }) => {

    return (
        <Grid container justify="center" xs={12} md={4}>
            <Grid className={classes.gridItem} item xs={12} md={10} >
                <Link
                    to="/for-sale"
                    style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Img className={classes.media} fluid={hostelData.image} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {hostelData.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {hostelData.shortDescription.length < 250 ? hostelData.shortDescription :
                                        `${hostelData.shortDescription.substring(0, 250)}...`}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                color="primary"
                                size="small" >
                                Learn More
                        </Button>
                        </CardActions>
                    </Card>
                </Link>
            </Grid >
        </Grid >
    );
}

export default withStyles(styles)(ForSaleCard)

