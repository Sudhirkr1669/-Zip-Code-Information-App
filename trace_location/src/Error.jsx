import React from 'react';
import { Typography } from '@mui/material';

const Error = ({ error }) => (
  <Typography variant="body2" color="error">
    {error}
  </Typography>
);

export default Error;
