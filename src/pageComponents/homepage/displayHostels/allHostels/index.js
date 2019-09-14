import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
                <Paper align="center" className={classes.paperTitle}>
                    <Typography align="center" className={classes.title} variant="h4" >All Hostels</Typography>
                    <Typography align="center" variant="h6">Browse all the hostels in Colombia</Typography>
                </Paper>
            </Grid>
            <Grid container className={classes.gridContainer} >
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

