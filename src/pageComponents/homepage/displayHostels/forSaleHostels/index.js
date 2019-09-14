import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ForSaleCard from './ForSaleCard'
import useForSaleHostels from '../../../../hostelsData/ForSaleHostelsData'

import styles from './forSaleHostels.jss'
import { withStyles } from '@material-ui/core/styles'


const ForSaleHostelsContainer = ({ classes }) => {
    const [forSaleHostelsArr] = useForSaleHostels()
    return (
        <>
            <Grid container justify="center">
                <Paper align="center" className={classes.paperTitle}>
                    <Typography align="center" className={classes.title} variant="h4" >For Sale</Typography>
                    <Typography align="center" variant="h6">Find Hostels that are currently looking for buyers</Typography>
                </Paper>
            </Grid>
            <Grid container justify="center" style={{ padding: '2%' }}>
                {forSaleHostelsArr.map(hostel => {
                    return (
                        <ForSaleCard hostelData={hostel} />
                    )
                })}
            </Grid>
        </>
    );
}

export default withStyles(styles)(ForSaleHostelsContainer)

