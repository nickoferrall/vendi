import React from 'react'

import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

import styles from './Unfiltered.jss'
import { withStyles } from '@material-ui/core/styles'

const QuestionAndAnswer = ({ classes, qAndAText }) => {
    return (
        <>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <Typography className={classes.subtitle} variant={'subtitle2'}>
                    {qAndAText.question}
                </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <Typography className={classes.textBody} variant={'body1'}>
                    {qAndAText.answer}
                </Typography>
            </ExpansionPanelDetails>
        </>
    )
}

export default withStyles(styles)(QuestionAndAnswer)
