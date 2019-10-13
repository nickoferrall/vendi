import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const SimpleSnackbar = ({ colour = '#43A047', open, setOpen, text }) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        autoHideDuration={6000}
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <SnackbarContent
          message={<span id="client-snackbar">{text}</span>}
          style={{ backgroundColor: colour }}
        />
      </Snackbar>
    </>
  );
};

export default SimpleSnackbar;
