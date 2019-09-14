import React, { useState } from 'react'

import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import styles from '../ClickedForSaleHostelStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const Facilities = ({ classes, hostelData }) => {
    const [checked, setChecked] = useState([0]);

    return (
        <List style={{ display: 'flex', flexWrap: 'wrap' }} >
            {Object.entries(hostelData.facilities).map(value => {
                const labelId = `checkbox-list-label-${value}`;
                return (
                    <ListItem style={{ width: '48%' }} key={value} role={undefined} dense >
                        <ListItemText id={labelId} primary={value[0]} />
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
    );
}

export default withStyles(styles)(Facilities)