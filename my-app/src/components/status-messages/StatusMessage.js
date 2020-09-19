import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const StatusMessage = ({
  shouldRedirect,
  errorMessage,
}) => {
    return (
        <ThemeProvider theme={colortheme}>
          <Typography color="primary">Incorrect Password</Typography>
        </ThemeProvider>
      );
};

const colortheme = createMuiTheme({
  palette: {
    primary: { main: '#e02822', contrastText: '#fff' },
    secondary: { main: '#e02822', contrastText: '#fff' },
  },
});


