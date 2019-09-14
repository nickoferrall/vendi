import React from 'react'

import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import withWidth from '@material-ui/core/withWidth'

import styles from './Filter.jss'
import { withStyles } from '@material-ui/core/styles'

const Filter = ({ classes, filterQuestions, width }) => {
  return (
    <Grid xs={12} style={{ padding: '5% 0%' }}>
      <TextField
        autoFocus
        fullWidth
        id="search-filter"
        onChange={event => filterQuestions(event.target.value)}
        placeholder={
          width === 'xl' || width === 'lg'
            ? 'What can we help you with? Search for a question or topic...'
            : 'Search for a question or topic...'
        }
        variant="outlined"
        classes={{
          root: {
            color: 'red',
            backgroundColor: 'red',
            borderRadius: 0
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={classes.searchIcon} />
            </InputAdornment>
          ),
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
      />
    </Grid>
  )
}

export default withStyles(styles)(withWidth()(Filter))
