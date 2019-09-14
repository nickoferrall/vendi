const styles = theme => ({
  searchIcon: {
    color: theme.palette.secondary.main
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderWidth: '1px !important',
      borderColor: `${theme.palette.secondary.main} !important`
    }
  },
  cssFocused: {
    borderWidth: '1px'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: `${theme.palette.secondary.main} !important`
  }
})

export default styles
