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
import { loginSchema } from '../helpers/Validations';
import { CopyrightDetails } from '../components/copyright/CopyrightDetails';
import { FormButton } from '../components/buttons/FormButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { StatusMessage } from '../components/status-messages/StatusMessage';

export const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log("should", shouldRedirect)
  // console.log("lS", localStorage.getItem('helsenaToken'))
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      submitForm(values.email, values.password);
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 700);
    },
    validationSchema: loginSchema,
  });

  let submitForm = (email, password) => {
    setIsSubmitted(true);
    if(email === "data@data.com" && password === "test"){
      setShouldRedirect(true);
      localStorage.setItem('helsenaToken', "passwordApproved");
    }
    else{
      setErrorMessage("Email or Password is Incorrect")
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
            id="email"
            fullWidth
            name="email"
            helperText={formik.touched.email ? formik.errors.email : ''}
            error={formik.touched.email && Boolean(formik.errors.email)}
            label="Email"
            value={formik.values.email}
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
            disabled={!formik.values.email || !formik.values.password}
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
