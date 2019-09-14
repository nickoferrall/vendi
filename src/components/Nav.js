import React from 'react';

import { Link } from "gatsby"

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navItemContainer: {
    marginRight: theme.spacing(15),
  },
  navItem: {
    marginRight: theme.spacing(10),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.nav} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Vendi
          </Typography>
        <Box className={classes.navItemContainer} >
          <Link
            to={'/'}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <Button className={classes.navItem} color="inherit">Buy / Sell</Button>
          </Link>
          <Link
            to={'/learn'}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <Button color="inherit">Learn</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}