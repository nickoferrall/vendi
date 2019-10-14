import React, { useEffect, useState } from 'react';

import { Link, navigate } from 'gatsby';
import { useMutation } from '@apollo/react-hooks';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';
import Snackbar from '../components/snackbar/index';
import { CREATE_USER } from '../gql/userMutations';

import styles from '../pageStyles/registerStyles.jss';
import { withStyles } from '@material-ui/core/styles';

const SignIn = ({ classes }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [fullName, setFullName] = useState('');
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [shortPassword, setShortPassword] = useState(false);

  const delay = 1000;

  const [createUser, { data }] = useMutation(CREATE_USER);

  const handleSubmit = async event => {
    event.preventDefault();

    if (password.length < 8) {
      setShortPassword(true);
    }

    try {
      createUser({
        variables: {
          name: fullName,
          email,
          password
        }
      });
    } catch (err) {
      // onError(({ graphQLErrors, networkError }) => {
      //   if (graphQLErrors)
      //     graphQLErrors.map(({ message, locations, path }) =>
      //       console.log(
      //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      //       )
      //     );

      //   if (networkError) console.log(`[Network error]: ${networkError}`);
      // });
      setError(true);
    }
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem('jwt', data.createUser.token);
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, delay);
    }
  }, [data]);

  return (
    <>
      <Layout />
      <Grid
        align="center"
        className={classes.container}
        container
        justify="center"
      >
        <Grid item xs={10} md={4}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.header}>
            Sign in
          </Typography>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              autoComplete="fname"
              autoFocus
              fullWidth
              id="fullname"
              label="Full Name"
              name="fullname"
              onChange={event => setFullName(event.target.value)}
              required
              variant="outlined"
            />
            <TextField
              autoComplete="email"
              autoFocus
              fullWidth
              id="email"
              onChange={event => setEmail(event.target.value)}
              margin="normal"
              name="email"
              placeholder="Email Address *"
              required
              variant="outlined"
            />
            <TextField
              autoComplete="current-password"
              fullWidth
              id="password"
              margin="normal"
              name="password"
              onChange={event => setPassword(event.target.value)}
              placeholder="Password *"
              required
              type="password"
              variant="outlined"
            />
            <Grid container direction="column" alignItems="flex-start">
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                {error ? (
                  <Typography className={classes.errorMessage}>
                    Unable to login. Try again.
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
            <Button
              color="primary"
              className={classes.submitButtton}
              fullWidth
              type="submit"
              variant="contained"
            >
              Sign In
            </Button>
            <Grid container justify="flex-end">
              {/* <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to={'/signup'}>Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Snackbar open={open} setOpen={setOpen} text={'Signed Up!'} />
      </Grid>
    </>
  );
};

export default withStyles(styles)(SignIn);
