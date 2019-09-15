import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from '../ClickedForSaleHostelStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const Description = ({ hostelData, classes }) => {
    return (
        <Paper className={classes.paperContainer}>
            <Typography variant="h5">
                {hostelData.title}
            </Typography>
            <Typography variant="h6">
                {hostelData.price}
            </Typography>
            <Typography variant="body2">
                {hostelData.address}
            </Typography>
            <Box className={classes.box}>
                <Typography variant="body">
                    {hostelData.body}
                </Typography>
            </Box>
        </Paper>
    );
};

export default withStyles(styles)(Description)