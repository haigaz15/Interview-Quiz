import React from 'react';
import { Typography,Box, ListItem,List, ListItemIcon,ListItemText, } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './Questions.module.css'
import AddIcon from '@mui/icons-material/Add';
import AddNewQuestion from '../AddNewQuestion/AddNewQuestion'

const Questions = (props) => {
    return(
    <div>
      <Box className = {styles.AddCircle} onClick={props.addQuestion} >
      <AddIcon fontSize="large" sx={{ color: "#FFFFFF" }} className = {styles.AddIcond}/> 
      </Box>
      <AddNewQuestion open = {props.open} handleClose={props.handleClose}/>
    </div>
    )
}

export default Questions;