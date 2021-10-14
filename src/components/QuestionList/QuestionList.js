import React from 'react';
import { Typography,Box, ListItem,List, ListItemIcon,ListItemText, } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './QuestionList.module.css';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Candidates from './Candidates/Candidates'
import Questions from './Questions/Questions';


const QuestionList = () => {
    
    const [open, setOpen] = useState(false);
    const [candidatesClicked,setCandidatesClicked] = useState(false);
    const [questionareClicked , setQuestionareClicked] = useState(false);

    const addQuestion = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleQuestionare = () => {
      setQuestionareClicked(true)
      setCandidatesClicked(false)
    }

    const handleCandidates = () => {
      setCandidatesClicked(true)
      setQuestionareClicked(false)
    }

    return(
    <Box className = {styles.Candidates}>   
    <List className={styles.LeftMenu}>
    <Box className = {styles.Group134}>
        <Typography className = {styles.EasyIntr} >
            EASY INTERVIEW
            </Typography>
    </Box>
        <ListItem className= {styles.CandidatesCont} onClick={handleCandidates}>
            <ListItemIcon >
                <GroupsIcon/>
            </ListItemIcon>
            <ListItemText primary= {"Candidates"}/> 
        </ListItem>
        <ListItem className = {styles.QuestionarCont} onClick={handleQuestionare}>
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


      {questionareClicked ? <Questions open={open} addQuestion = {addQuestion} handleClose={handleClose}/>:""}
      {candidatesClicked ? <Candidates/>:""}
      
      
    </Box> 
    )
}

export default QuestionList