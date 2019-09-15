import React from 'react'

import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import styles from './FacilitiesStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const Facilities = ({ classes, hostelData }) => {

    return (
        <Paper className={classes.paperContainer}>
            <List style={{ display: 'flex', flexWrap: 'wrap' }} >
                {Object.entries(hostelData.facilities).map(value => {
                    return (
                        <ListItem className={classes.listItem} key={value} role={undefined} dense >
                            <ListItemText primary={value[0]} />
                            <ListItemIcon>
                                <Checkbox
                                    checked={value[1]}
                                    disableRipple
                                    edge="start"
                                />
                            </ListItemIcon>
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );
}

export default withStyles(styles)(Facilities)