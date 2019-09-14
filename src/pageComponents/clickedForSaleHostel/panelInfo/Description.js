import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import styles from '../ClickedForSaleHostelStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const Description = ({ hostelData, classes }) => {
    return (
        <>
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

        </>
    );
};

export default withStyles(styles)(Description)