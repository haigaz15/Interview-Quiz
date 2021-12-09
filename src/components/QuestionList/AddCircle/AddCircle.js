
import React from 'react';
import { Box} from '@mui/material';
import styles from './AddCircle.module.css';
import AddIcon from '@mui/icons-material/Add';
const AddCircle = (props) => {
    return(
    <Box className = {styles.AddCircle} onClick={ () => props.handleOpen()} position="fixed">
        <AddIcon fontSize="large" sx={{ color: "#FFFFFF" }} className = {styles.AddIcond}/> 
    </Box>
    )
}

export default AddCircle;