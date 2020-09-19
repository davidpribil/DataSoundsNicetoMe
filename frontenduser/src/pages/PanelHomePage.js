import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { LeftDrawer } from '../components/drawer/LeftDrawer';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export const PanelHomePage = () => {
  const classes = useStyles();
  return (
    <div>
      < LeftDrawer/>
      <div className={classes.container}>
        <Typography paragraph>
          Here will be the main text. Here will be the main text. Here will be
          the main text.Here will be the main text. Here will be the main text.
          Here will be the main text. Here will be the main text.Here will be
          the main text.
        </Typography>
      </div>
    </div>
  );
};

export default PanelHomePage;

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingLeft: 280,
      paddingTop: 100,
    },
  }),
);
