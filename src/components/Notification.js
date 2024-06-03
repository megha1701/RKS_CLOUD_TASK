
import React from 'react';
import { Snackbar } from '@material-ui/core';

const Notification = ({ message, open, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      onClose={onClose}
      message={message}
      autoHideDuration={3000}
    />
  );
};

export default Notification;
