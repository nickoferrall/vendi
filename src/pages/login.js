import React, { useEffect, useState } from 'react';

import { Link, navigate } from 'gatsby';
import { useMutation } from '@apollo/react-hooks';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { LOGIN } from '../gql/userMutations';
import Layout from '../components/layout';
import Snackbar from '../components/snackbar/index';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  errorMessage: {
    color: '#d32f2f',
    marginTop: theme.spacing(2)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [shortPassword, setShortPassword] = useState(false);

  const [login, { data }] = useMutation(LOGIN);

  const delay = 1000;

  const classes = useStyles();

  const handleSubmit = async event => {
    event.preventDefault();

    if (password.length < 8) {
      setShortPassword(true);
    }

    try {
      login({
        variables: {
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
      localStorage.setItem('jwt', data.login.token);
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, delay);
    }
  }, [data]);

  return (
    <>
      <Layout />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  autoFocus
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={event => setEmail(event.target.value)}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="password"
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  onChange={event => setPassword(event.target.value)}
                  required
                  variant="outlined"
                />
              </Grid>
            </Grid>
            {error ? (
              <Typography className={classes.errorMessage}>
                Unable to login
              </Typography>
            ) : null}
            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to={'/sign-up'}>Don't have an account? Sign-up</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Snackbar open={open} setOpen={setOpen} text={'Success!'} />
      </Container>
    </>
  );
};

export default Login;

// import React, { useEffect, useState } from 'react';

// import { Link, navigate } from 'gatsby';
// import { useMutation } from '@apollo/react-hooks';

// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import LockIcon from '@material-ui/icons/Lock';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';

// import Layout from '../components/layout';
// import { LOGIN } from '../gql/userMutations';
// import Snackbar from '../components/snackbar/index';

// import styles from '../pageStyles/registerStyles.jss';
// import { withStyles } from '@material-ui/core/styles';

// const SignIn = ({ classes }) => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [password, setPassword] = useState('');

//   const delay = 1000;

//   const [login, { data }] = useMutation(LOGIN);

//   const handleSubmit = async event => {
//     event.preventDefault();
//     try {
//       await login({
//         variables: {
//           email,
//           password
//         }
//       });
//     } catch (err) {
//       if (err) {
//         setError(true);
//       }
//     }
//   };

//   useEffect(() => {
//     if (data) {
//       console.log('TCL: SignIn -> data', data);
//       localStorage.setItem('jwt', data.login.token);
//       setOpen(true);
//       setTimeout(() => {
//         navigate('/');
//       }, delay);
//     }
//   }, [data]);

//   return (
//     <>
//       <Layout />
//       <Grid
//         align="center"
//         className={classes.container}
//         container
//         justify="center"
//       >
//         <Grid item xs={10} md={4}>
//           <Avatar className={classes.avatar}>
//             <LockIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5" className={classes.header}>
//             Sign in
//           </Typography>
//           <form noValidate onSubmit={handleSubmit}>
//             <TextField
//               autoComplete="email"
//               autoFocus
//               fullWidth
//               id="email"
//               onChange={event => setEmail(event.target.value)}
//               margin="normal"
//               name="email"
//               placeholder="Email Address *"
//               required
//               variant="outlined"
//             />
//             <TextField
//               autoComplete="current-password"
//               fullWidth
//               id="password"
//               margin="normal"
//               name="password"
//               onChange={event => setPassword(event.target.value)}
//               placeholder="Password *"
//               required
//               type="password"
//               variant="outlined"
//             />
//             <Grid container direction="column" alignItems="flex-start">
//               <Grid item>
//                 <FormControlLabel
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                 />
//               </Grid>
//               <Grid item>
//                 {error ? (
//                   <Typography className={classes.errorMessage}>
//                     Unable to login. Try again.
//                   </Typography>
//                 ) : null}
//               </Grid>
//             </Grid>
//             <Button
//               color="primary"
//               className={classes.submitButtton}
//               fullWidth
//               type="submit"
//               variant="contained"
//             >
//               Sign In
//             </Button>
//             <Grid container justify="flex-end">
//               {/* <Grid item xs>
//                 <Link to="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid> */}
//               <Grid item>
//                 <Link to={'/signup'}>Don't have an account? Sign Up</Link>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
//       <Snackbar open={open} setOpen={setOpen} text={'Success'} />
//     </>
//   );
// };

// export default withStyles(styles)(SignIn);
