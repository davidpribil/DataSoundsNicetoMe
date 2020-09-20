import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  Grid,
  Checkbox,
  TextField,
  FormControlLabel,
  CssBaseline,
  Avatar,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { CopyrightDetails } from '../components/copyright/CopyrightDetails';
import { FormButton } from '../components/buttons/FormButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { StatusMessage } from '../components/status-messages/StatusMessage';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: 60,
    },
    signInText: {
      fontSize: 25,
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    forgotLink: {
      textDecoration: 'none',
      color: '#6c74cc',
    },
    copyrightBox: {
      marginTop: 35,
    },
  }),
);

export const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      userid: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      submitForm(values.userid, values.password);
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 700);
    },
  });

  let submitForm = (userid, password) => {
    setIsSubmitted(true);
    if(password === "test"){
      localStorage.setItem('helsenaToken', "passwordApproved");
      localStorage.setItem('userid', userid);
      setShouldRedirect(true);
    }
    else{
      setErrorMessage("Password is Incorrect")
    }
  };

  if (shouldRedirect || localStorage.getItem('helsenaToken')) {
    return <Redirect to="/home" />;
  }

  return (
    <Container className={classes.container} maxWidth="xs">
      <CssBaseline />
      <div className={classes.formContainer}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.signInText}>Sign In</Typography>
        <form
          onSubmit={e => {
            e.preventDefault();
            formik.handleSubmit();
          }}>
          <TextField
            variant="outlined"
            margin="normal"
            id="userid"
            fullWidth
            name="userid"
            helperText={formik.touched.userid ? formik.errors.userid : ''}
            error={formik.touched.userid && Boolean(formik.errors.userid)}
            label="User ID"
            value={formik.values.userid}
            onChange={props => {
              formik.handleChange(props);
              formik.handleBlur(props);
            }}
            onBlur={formik.handleBlur}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            name="password"
            helperText={formik.touched.password ? formik.errors.password : ''}
            error={formik.touched.password && Boolean(formik.errors.password)}
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={props => {
              formik.handleChange(props);
              formik.handleBlur(props);
            }}
            onBlur={formik.handleBlur}
          />
          {isSubmitted && (
            <StatusMessage
              shouldRedirect={shouldRedirect}
              errorMessage={errorMessage}
            />
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <br />
          <FormButton
            disabled={false}
            text={'Submit'}
          />
          <br />
          <Grid container>
            <Grid item xs>
              <Link className={classes.forgotLink} to={'/'}>
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className={classes.copyrightBox}>
        <CopyrightDetails
          link={'https://www.helsana.ch'}
          text={'WEBSITE'}
        />
      </div>
    </Container>
  );
};


