import React from 'react';

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from '../ClickedForSaleHostelStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const Description = ({ hostelData, classes }) => {
    console.log("hostelData..", hostelData)
    if (hostelData.hostelName) {
        return (
            <Paper className={classes.paperContainer}>
                <Typography variant="h5">
                    {hostelData.hostelName}
                </Typography>
                <Typography variant="h6">
                    {hostelData.price ? `$${hostelData.price}` : null}
                </Typography>
                <Typography variant="body2">
                    {hostelData.address}
                </Typography>
                <Box className={classes.box}>
                    <Typography variant="body">
                        {documentToReactComponents(hostelData.longDescription.json)}
                    </Typography>
                </Box>
            </Paper>
        );
    }
};

export default withStyles(styles)(Description)