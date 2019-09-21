import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ForSaleCard from './ForSaleCard'
import useForSaleHostels from '../../../../hostelsData/ForSaleHostelsData'

import styles from './forSaleHostelsStyles.jss'
import { withStyles } from '@material-ui/core/styles'


const ForSaleHostelsContainer = ({ classes }) => {
    const [forSaleHostelsArr] = useForSaleHostels()
    return (
        <>
            <Grid container justify="center">
                <Box className={classes.boxTitle}>
                    <Typography align="center" className={classes.title} variant="h4" >For Sale</Typography>
                    <Typography align="center" variant="h6">Find Hostels that are currently looking for buyers</Typography>
                </Box>
            </Grid>
            <Grid container justify="center">
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

