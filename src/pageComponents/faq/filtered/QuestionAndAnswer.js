import React from 'react'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'

import styles from './filtered.jss'
import { withStyles } from '@material-ui/core/styles'

const QuestionAndAnswer = ({ classes, qAndA }) => {
    // const svgIconPath =
    // 'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z'

    return (
        <Grid xs={12}>
            <List>
                <ListItem alignItems="center" className={classes.listItem}>
                    {/* <ListItemIcon>
            <SvgIcon className={classes.icon} fontSize="large">
              <path d={svgIconPath} />
            </SvgIcon>
          </ListItemIcon> */}

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
