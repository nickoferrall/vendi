import React from 'react'

import QuestionAndAnswer from './QuestionAndAnswer'

import Box from '@material-ui/core/Box'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import styles from './Unfiltered.jss'
import { withStyles } from '@material-ui/core/styles'

const FaqSectionTitle = ({ childIndex, classes, section }) => {
    return (
        <Grid container justify="center">
            <ExpansionPanel
                className={classes.expansionPanel}
                defaultExpanded={childIndex === 0 ? true : false}
            >
                <ExpansionPanelSummary
                    aria-controls="faq-title"
                    expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                >
                    <Typography className={classes.title} variant="subtitle2">
                        {section.sectionTitle}
                    </Typography>
                </ExpansionPanelSummary>

                <Box className={classes.box}>
                    {section.questions.map((qAndAText, index) => {
                        return (
                            <QuestionAndAnswer
                                key={`${index}-${qAndAText.id}`}
                                qAndAText={qAndAText}
                            />
                        )
                    })}
                </Box>
            </ExpansionPanel>
        </Grid>
    )
}

export default withStyles(styles)(FaqSectionTitle)
