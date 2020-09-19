import React from 'react';
import {
  Toolbar,
  List,
  CssBaseline,
  AppBar,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@material-ui/core';
import {
  Mail,
  Timeline,
  Settings,
  Notifications,
  ExitToApp,
  Home,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    panelheaderRight: {
      marginRight: 0,
      right: 0,
    },
    toolbar: {
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
    },
    link: {
      textDecoration: 'none',
      color: 'black',
    },
  }),
);


export const LeftDrawer = () => {
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem('helsanaToken');
    setTimeout(() => {
      history.push('/');
    }, 500);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title}>My Helsana</Typography>
          <div className="panelheaderRight">
            <Notifications />
            &nbsp;&nbsp;
            <ExitToApp onClick={logout} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <div className="toolbar" />
        <Divider />
        <List>
          {[
            { text: 'Home', url: '/home', icon: <Home /> },
            { text: 'Inbox', url: '/inbox', icon: <Mail /> },
            { text: 'History', url: '/history', icon: <Timeline /> },
          ].map((item, index) => (
            <Link to={item.url} className={classes.link} key={index}>
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: 'Settings', url: '/settings', icon: <Settings /> },
          ].map((item, index) => (
            <Link to={item.url} key={index} className={classes.link}>
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

