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
import styles from './Login.module.css';

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <Box className={styles.contMain}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <TextField
              className={styles.emailField}
              required
              style={{ width: 380 }}
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
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
            <TextField
              style={{ width: 380 }}
              required
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <FormControlLabel
            sx={{ mt: 1.5, mb: 1.5 }}
            control={<Checkbox value="remember" color="primary" />}
            label={<span style={{ fontSize: '14px' }}>{'Remember me'}</span>}
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
            style={{ backgroundColor: '#4B63CB' }}
            type="submit"
            size="large"
            variant="contained"
            sx={{ mt: 4 }}
          >
            <span className={styles.btn}>Log In</span>
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
