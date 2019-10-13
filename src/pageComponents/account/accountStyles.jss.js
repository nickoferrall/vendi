const styles = theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(14)
  },
  errorMessage: {
    color: '#d32f2f'
  },
  header: {
    marginBottom: theme.spacing(2)
  },
  submitButtton: {
    margin: theme.spacing(2, 0)
  }
});

export default styles;
