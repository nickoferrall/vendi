import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HostelCard from './HostelCard'

import styles from './hostelCardStyles.jss'
import { withStyles } from '@material-ui/core/styles'


const DisplayHostelsContainer = ({ classes, hostelData, subtitle, title }) => {
    return (
        <>
            <Grid container justify="center">
                <Box className={classes.boxTitle}>
                    <Typography align="center" className={classes.title} variant="h4" >{title}</Typography>
                    <Typography align="center" variant="h6">{subtitle}</Typography>
                </Box>
            </Grid>
            <Grid container justify="center">
                {hostelData.map(hostel => {
                    return (
                        <HostelCard hostelData={hostel.node} />
                    )
                })}
            </Grid>
        </>
    );
}

export default withStyles(styles)(DisplayHostelsContainer)

