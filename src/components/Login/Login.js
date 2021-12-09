import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import { Field, Form, Formik, useFormik } from 'formik';
import { object, string } from 'yup';
import styles from './Login.module.css';
import { useHistory } from 'react-router-dom';
import Header from '../QuestionList/Header/Header';
import users from '../../users/users'
export default function SignIn() {


  const history = useHistory();

  const initialValues =  {
     email: '',
     password: '',
  }
  
  
  return (
    <div>
    <Header/>
    <Box className={styles.contMain}>
      <Formik
        initialValues={initialValues}
        validationSchema={object({
          email: string().required('Please enter email').email('Invalid email'),
          password: string()
            .required('Please enter password')
            .min(7, 'Password should be minimum 7 characters long'),
        })}
        onSubmit={(values, formikHelpers) => {
          formikHelpers.resetForm();
          if(users[0].email === values.email && users[0].password === values.password){
            history.push('/QuestionList')
          }else{
            alert('Wrong admin!!')
          }
        }}
        
      >
        
        {({ errors, isValid, touched, dirty,handleSubmit,handleChange }) => (
          <Form>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                component="form" 
                noValidate
                sx={{ mt: 1 }}
              >
                <Typography sx={{ mt: 3, mb: 2 }}>
                  <span className={styles.header}>Log In</span>
                </Typography>
                <InputLabel shrink htmlFor="email" sx={{ mt: 3 }}>
                  <span className={styles.email}>Email Address</span>
                </InputLabel>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Field
                    className={styles.emailField}
                    required
                    style={{ width: 380 }}
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    type="email"
                    as={TextField}
                    error={Boolean(errors.email) && Boolean(touched.email)}
                    helperText={Boolean(touched.email) && errors.email}
                    onChange={handleChange}
                  />
                </Grid>
                <InputLabel shrink htmlFor="password" sx={{ mt: 3 }}>
                  <span className={styles.password}>Password</span>
                </InputLabel>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Field
                    style={{ width: 380 }}
                    required
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    as={TextField}
                    error={
                      Boolean(errors.password) && Boolean(touched.password)
                    }
                    helperText={Boolean(touched.password) && errors.password}
                    onChange={handleChange}
                  />
                </Grid>
                <FormControlLabel
                  sx={{ mt: 1.5, mb: 1.5 }}
                  control={<Checkbox value="remember" color="primary" />}
                  label={
                    <span style={{ fontSize: '14px' }}>{'Remember me'}</span>
                  }
                />
                <Box>
                  <span className={styles.createAcc}>
                    {"Don't have an account. Create account "}
                  </span>

                  <Link
                    href="#"
                    variant="body2"
                    style={{ textDecoration: 'none', color: '#4B63CB' }}
                  >
                    {' here'}
                  </Link>
                </Box>

                <Button
                onClick = {handleSubmit}
                  style={{ backgroundColor: '#4B63CB' }}
                  type="submit"
                  size="large"
                  variant="contained"
                  sx={{ mt: 4 }}
                  disabled={!isValid || !dirty}
                >
                  <span className={styles.btn}>Log In</span>
                </Button>
              </Box>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
    </div>
  );
}
