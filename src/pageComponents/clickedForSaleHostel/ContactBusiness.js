import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import styles from './ClickedForSaleHostelStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const ContactBusiness = ({ classes, hostelData }) => {
    const [open, setOpen] = useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Contact Owner
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Message Owner</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Send an email to the owner of {hostelData.hostelName}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        fullWidth
                        label="Your email address..."
                        margin="dense"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label={`Write your email to ${hostelData.hostelName}...`}
                        margin="normal"
                        multiline
                        rows="6"
                        type="email"
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default withStyles(styles)(ContactBusiness)