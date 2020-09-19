import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      background: '#6c74cc',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      '&:disabled': { color: 'white' },
      '&:hover': { background: '#6c74cc', color: 'white' },
      alignSelf: 'center'
    },
  }),
);

export const DialogButton = ({
  onPress,
  text,
}) => {
  const classes = useStyles();
  return (
    <Button onClick={onPress} className={classes.button}>
      {text}
    </Button>
  );
};


