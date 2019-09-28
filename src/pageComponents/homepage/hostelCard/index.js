import React from 'react';

import Img from 'gatsby-image'
import { navigate } from "gatsby"

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './hostelCardStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const HostelCard = ({ classes, hostelData }) => {
    const description = hostelData.description.description

    const handleClick = () => {
        navigate(`/for-sale/${hostelData.slug}`)
    }

    return (
        <Grid container justify="center" xs={12} md={4} >
            <Grid item xs={8.5}>
                <Card className={classes.card} onClick={() => handleClick()}>
                    <CardActionArea>
                        <Img className={classes.media} fluid={hostelData.image[0].fluid} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {hostelData.hostelName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description.length < 225 ?
                                    description :
                                    `${description.substring(0, 225)}...`}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button color="primary" size="small">
                            More Info
                        </Button>
                    </CardActions>
                </Card>
            </Grid >
        </Grid >
    );
}

export default withStyles(styles)(HostelCard)

