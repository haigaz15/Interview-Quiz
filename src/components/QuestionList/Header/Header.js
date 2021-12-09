import React from "react";
import styles from './Header.module.css';
import {
    Typography,
    Box,
  } from '@mui/material';

const Header = () => {
  return(
  <>
    <Box className= {styles.container} style = {{marginLeft:'40px', marginTop:'40px',}}>
     <Typography className={styles.EasyIntr}>EASY </Typography><Typography className={styles.EasyIntr1}>INTERVIEW </Typography>
    </Box>
  </>
  )
}

export default Header;