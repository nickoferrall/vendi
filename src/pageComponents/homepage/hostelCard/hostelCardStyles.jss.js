const styles = theme => ({
  boxTitle: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    width: theme.spacing(100)
  },
  card: {
    marginBottom: theme.spacing(9),
    padding: 0,
    width: theme.spacing(42),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(6)
    }
  },
  content: {
    height: theme.spacing(25)
  },
  gridContainer: {
    padding: theme.spacing(4)
  },
  media: {
    height: theme.spacing(28)
  },
  title: {
    padding: theme.spacing(2)
  }
});

export default styles;
