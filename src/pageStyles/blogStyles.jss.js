const styles = theme => ({
  container: {
    backgroundColor: '#F5F7F9'
  },
  blogItem: {
    backgroundColor: '#FFFF',
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(15),
    paddingTop: theme.spacing(9),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3)
    }
  }
});

export default styles;
