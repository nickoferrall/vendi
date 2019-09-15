import React, { useContext } from 'react';

import Img from 'gatsby-image'
import { navigate } from "gatsby"

import { HostelDataContext } from '../../../../context/HostelDataContext'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './forSaleHostelsStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const ForSaleCard = ({ hostelData, classes }) => {

    const { clickedHostelData, setClickedHostelData } = useContext(HostelDataContext)

    const handleClick = () => {
        setClickedHostelData(hostelData)
        navigate("/for-sale")
    }

    return (
        <Grid container justify="center" xs={12} md={4} >
            <Grid item xs={8.5}>
                <Card className={classes.card} onClick={() => handleClick()}>
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
                        <Button color="primary" size="small">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid >
        </Grid >
    );
}

export default withStyles(styles)(ForSaleCard)

