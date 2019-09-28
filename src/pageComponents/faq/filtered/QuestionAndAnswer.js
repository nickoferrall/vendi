import React from 'react'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import styles from './filteredStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const QuestionAndAnswer = ({ classes, qAndA }) => {

    return (
        <Grid xs={12}>
            <List>
                <ListItem alignItems="center" className={classes.listItem}>
                    <ListItemText
                        className={classes.listItemText}
                        primary={
                            <Typography className={classes.subtitle} variant="subtitle2">
                                {qAndA.question}
                            </Typography>
                        }
                        secondary={
                            <Typography className={classes.textBody} variant="body2">
                                {qAndA.answer}
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
        </Grid>
    )
}

export default withStyles(styles)(QuestionAndAnswer)
