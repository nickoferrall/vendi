import React from 'react'

import Grid from '@material-ui/core/Grid'
import FaqSectionTitle from './FaqSectionTitle'
import Questions from '../Questions'

import styles from './unfiltered.jss'
import { withStyles } from '@material-ui/core/styles'

const UnfilteredContainer = () => {
    return (
        <Grid container justify="center">
            {Questions.map((section, index) => {
                return (
                    <FaqSectionTitle
                        childIndex={index}
                        key={`${index}-${section.title}`}
                        section={section}
                    />
                )
            })}
        </Grid>
    )
}

export default withStyles(styles)(UnfilteredContainer)
