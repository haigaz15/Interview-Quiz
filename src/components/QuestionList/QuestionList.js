import React from 'react';
import { Typography,Box, ListItem,List, ListItemIcon,ListItemText,Button } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './QuestionList.module.css';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Questions from './Questions/Questions';


const QuestionList = () => {
    
    const levels = [
        {
          value: 'Junior',
          label: 'Junior',
        },
        {
          value: 'Intermediate',
          label: 'Intermediate',
        },
        {
          value: 'Senior',
          label: 'Senior',
        },
      ];
      
      const years = [
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
      ];
      
      const skills = [
        {
          value: 'C#',
          label: 'C#',
        },
        {
          value: 'ReactJs',
          label: 'ReactJs',
        },
        {
          value: 'OOP',
          label: 'OOP',
        },
      ];
    const data = [{
        id:"uuidv4()",
        question:"something to add",
        level:1,
        skill:"C#"
    }]
    
    const [open, setOpen] = useState(false);
    const [candidatesClicked,setCandidatesClicked] = useState(false);
    const [questionareClicked , setQuestionareClicked] = useState(false);
    const [level, setLevel] = useState(' ');
    const [skill, setSkill] = useState(' ');
    const [questionData, setQuestionData] = useState(data)

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
    const handleChangeLevel = (event) => {
        setLevel(event.target.value);
      };

    
    const handleChangeSkill = (event) => {
        setSkill(event.target.value);
    }
    const handleSubmit = (e) =>{
        setQuestionData(state=>{
            return [...state,{
                id:"kjsdfaaasd",
                question:"something to add new ",
                level:level,
                skill:skill
            }]
        })
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
      {questionareClicked ? <Questions
      className={styles.Questions} 
      open={open} 
      skills={skills}
      levels={levels}
      skill={skill}
      level={level}
      addQuestion = {addQuestion} 
      handleClose={handleClose}
      handleChangeLevel = {handleChangeLevel}
      handleChangeSkill = {handleChangeSkill}
      handleSubmit = {handleSubmit}
      data={questionData}
      />:""}
    </Box> 
    )
}

export default QuestionList