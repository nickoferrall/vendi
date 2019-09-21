import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import AllHostelsCard from './AllHostelsCard'
import useAllHostelsData from '../../../../hostelsData/AllHostelsData'

import styles from './AllHostelsStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const AllHostelsContainer = ({ classes }) => {
    const [allHostelsArr] = useAllHostelsData()

    return (
        <>
            <Grid container justify="center">
                <Box className={classes.boxTitle}>
                    <Typography align="center" className={classes.title} variant="h4" >All Hostels</Typography>
                    <Typography align="center" variant="h6">Browse all the hostels in Colombia</Typography>
                </Box>
            </Grid>
            <Grid container justify="center">
                {allHostelsArr.map(hostel => {
                    return (
                        <AllHostelsCard hostelData={hostel} />
                    )
                })}
            </Grid>
        </>
    );
}

export default withStyles(styles)(AllHostelsContainer)

