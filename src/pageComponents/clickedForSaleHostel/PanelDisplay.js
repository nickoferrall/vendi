import React, { useState } from 'react';

import BusinessImages from './panelInfo/BusinessImages'
import Description from './panelInfo/Description'
import Facilities from './panelInfo/Facilities'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ContactBusiness from './ContactBusiness'

import styles from './ClickedForSaleHostelStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const PanelDisplay = ({ classes, hostelData }) => {
    const [value, setValue] = useState(0);

    let panelInfo;
    if (value === 0) {
        panelInfo = <Description hostelData={hostelData} />
    }
    else if (value === 1) {
        panelInfo = <BusinessImages hostelData={hostelData} />
    }
    else if (value === 2) {
        panelInfo = <Facilities hostelData={hostelData} />
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper>
                    {hostelData.facilities ?
                        <>
                            <Tabs
                                centered
                                indicatorColor="primary"
                                onChange={(event, newValue) => setValue(newValue)}
                                textColor="primary"
                                value={value}
                            >
                                <Tab label="Description" />
                                <Tab label="Images" />
                                <Tab label="Facilities" />
                            </Tabs>
                        </>
                        : null
                    }
                </Paper>
            </Grid>
            <Grid container justify="center">
                <Grid item xs={8} className={classes.panelInfoGrid}>
                    {panelInfo}
                    <Grid className={classes.contactButtonGrid} container justify="flex-end" >
                        {/* <ContactBusiness hostelData={hostelData} /> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(PanelDisplay)
