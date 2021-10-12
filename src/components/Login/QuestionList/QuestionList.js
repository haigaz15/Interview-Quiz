import React from 'react';
import { Typography,Box, ListItem,List, ListItemIcon,ListItemText } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './QuestionList.module.css';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

import { Button, TextField,Paper } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import BootstrapDialog from '@mui/material/Dialog';
import FormControl from '@material-ui/core/FormControl';

const QuestionList = () => {
    
    const [open, setOpen] = useState(false);

    const addQuestion = () => {
        setOpen(true)
        console.log(open)
    }

    return(
    <Box className = {styles.Candidates}>   
    <List className={styles.LeftMenu}>
    <Box className = {styles.Group134}>
        <Typography className = {styles.EasyIntr} >
            EASY INTERVIEW
            </Typography>

    </Box>
        <ListItem className= {styles.CandidatesCont} >
            <ListItemIcon >
                <GroupsIcon/>
            </ListItemIcon>
            <ListItemText primary= {"Candidates"}/> 
        </ListItem>
        <ListItem className = {styles.QuestionarCont}>
            <ListItemIcon>
                <QuestionAnswerIcon/>
            </ListItemIcon>
            <ListItemText primary={"Questionare"}/>
        </ListItem>
        <hr className = {styles.LineBreak}></hr>
        <ListItem className = {styles.settingsCont}>
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary={"Settings"}/>
        </ListItem>
      </List>
      <Box className = {styles.AddCircle} onClick={addQuestion}>
      <AddIcon fontSize="large" sx={{ color: "#FFFFFF" }} className = {styles.AddIcond}/> 
      </Box>

      <Dialog  aria-labelledby="customized-dialog-title" open={open}>
      <DialogContent dividers>
        <FormControl>
          <TextField
            id="first"
            label="name"
            variant="filled"
            margin="normal"
            color="#553E93"
          />

          <TextField
            id="first"
            label="lastName"
            variant="filled"
            margin="normal"
            color="#553E93"
          />
        </FormControl>
      </DialogContent>    
    </Dialog>
    </Box> 
    )
}

export default QuestionList