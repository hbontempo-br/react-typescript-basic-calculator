import React from 'react';
import { Calculator } from '../../components/Calculator/Loadable';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export function HomePage(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Calculator />
    </div>
  );
}
