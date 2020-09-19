import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const CopyrightDetails = ({
  link,
  text,
}) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" href={link}>
        {text}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
