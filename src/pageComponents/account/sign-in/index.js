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

import { LOGIN } from '../../../gql/userMutations';

import styles from '../accountStyles.jss';
import { withStyles } from '@material-ui/core/styles';

const SignIn = ({ classes }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [password, setPassword] = useState('');

  const [login, { data }] = useMutation(LOGIN);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await login({
        variables: {
          email,
          password
        }
      });
    } catch (err) {
      if (err) {
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem('jwt', data.login.token);
      navigate('/');
    }
  }, [data]);

  return (
    <>
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
      </Grid>
    </>
  );
};

export default withStyles(styles)(SignIn);
