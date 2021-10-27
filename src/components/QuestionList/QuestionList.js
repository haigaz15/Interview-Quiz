import React from 'react';
import { Typography,Box, ListItemButton,List, ListItemIcon,ListItemText,Button } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './QuestionList.module.css';
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect  } from 'react';
import Questions from './Questions/Questions';
import Candidates from './Candidates/Candidates';
import StartLiveQuiz from './StartLiveQuiz/StartLiveQuiz';

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
        question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
        level:"Intermediate",
        skill:"C#"
    }]



    const [open, setOpen] = useState(false);
    const [candidatesClicked,setCandidatesClicked] = useState(false);
    const [questionareClicked , setQuestionareClicked] = useState(false);
    const [level, setLevel] = useState(' ');
    const [skill, setSkill] = useState(' ');
    const [question,setQuestion] = useState(' ');
    const [questionData, setQuestionData] = useState(data)
    const [filteredData, setFilteredData] = useState(data);
    const [page, setPage] = useState(false);

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
    const handleQuestionChange = (e) => {
      setQuestion(e.target.value);
    }
    
    const handleChangeSkill = (event) => {
        setSkill(event.target.value);
    }
    const handleSubmit = (e) =>{
        setQuestionData(state=>{
            return [...state,{
                id:"kjsdfaaasd",
                question:question,
                level:level,
                skill:skill
            }]
        })
        setFilteredData(state=>{
          return [...state,{
            id:"kjsdfaaasd",
            question:question,
            level:level,
            skill:skill
         }]
       })
         setLevel('');
         setSkill('');
         setQuestion('');
    }

    const handleFilterdData = (filtered)=>{
      const newfiltered = filtered
      setFilteredData(newfiltered)
    }

    const handlePage = (value)=>{
      setPage(value);
    }

    useEffect(() => {
      console.log("Search message inside useEffect: ", filteredData);
    }, [filteredData]);

    const UI = ()=>{
      return(    <Box className = {styles.root}>
        <List className={styles.LeftMenu}>
        <Box className = {styles.Group134}>
            <Typography className = {styles.EasyIntr} >
                EASY INTERVIEW
                </Typography>
        </Box>
            <ListItemButton className= {styles.CandidatesCont} onClick={handleCandidates} >
                <ListItemIcon >
                    <GroupsIcon/>
                </ListItemIcon>
                <ListItemText primary= {"Candidates"}/> 
            </ListItemButton>
            <ListItemButton  className = {styles.QuestionarCont} onClick={handleQuestionare}>
                <ListItemIcon>
                    <QuestionAnswerIcon/>
                </ListItemIcon>
                <ListItemText primary={"Questionare"}/>
            </ListItemButton>
            <hr className = {styles.LineBreak}></hr>
            <ListItemButton  className = {styles.settingsCont}>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary={"Settings"}/>
            </ListItemButton>
          </List> 
          {questionareClicked ? <Questions
          className={styles.Questions} 
          open={open} 
          skills={skills}
          levels={levels}
          skill={skill}
          level={level}
          question= {question}
          handleQuestionChange = {handleQuestionChange}
          addQuestion = {addQuestion} 
          handleClose={handleClose}
          handleChangeLevel = {handleChangeLevel}
          handleChangeSkill = {handleChangeSkill}
          handleSubmit = {handleSubmit}
          data={questionData}
          filteredData={filteredData}
          handleFilterdData = {handleFilterdData}
          />:""}
          {
            candidatesClicked ? <Candidates
            open={open} 
            skills={skills}
            levels={levels}
            skill={skill}
            level={level}
            handleChangeLevel = {handleChangeLevel}
            handleChangeSkill = {handleChangeSkill}
            data={questionData}


            />:
            ""
          }
        </Box> )
    }
      return (
        <div>
          {UI()}
        </div>
      )
}

export default QuestionList