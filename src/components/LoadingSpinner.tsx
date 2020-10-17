import React, { FC } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loading: { display: 'flex', justifyContent: 'center' },
});

const LoadingSpinner: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loading}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
