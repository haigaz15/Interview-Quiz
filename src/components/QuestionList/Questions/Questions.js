import React from 'react';
import { Typography,Box, Grid } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './Questions.module.css'
import AddIcon from '@mui/icons-material/Add';
import AddNewQuestion from '../AddNewQuestion/AddNewQuestion'
import { Grid3x3TwoTone } from '@mui/icons-material';

const Questions = (props) => {

    return(
    <div >
      {props.data.map((d,index) =>
      <Box key={index} className = {styles.questionList}>
                <Box  className={styles.questions}>
                  <Typography className={styles.questionheader}>Questions</Typography> 
                  <Typography className={styles.question}>{d.question}</Typography>
                   <Box >
                     <Typography>{d.skill}</Typography>
                     <Typography>{d.level}</Typography>
                   </Box>
                 </Box>
        </Box>
        )}
     
      <Box className = {styles.AddCircle} onClick={props.addQuestion} >
      <AddIcon fontSize="large" sx={{ color: "#FFFFFF" }} className = {styles.AddIcond}/> 
      </Box>
      <AddNewQuestion 
      open = {props.open} 
      handleClose={props.handleClose}
      skills={props.skills}
      levels={props.levels}
      skill={props.skill}
      level={props.level}
      handleChangeLevel = {props.handleChangeLevel}
      handleChangeSkill = {props.handleChangeSkill}
      handleSubmit={props.handleSubmit}
      />
    </div>
    )
}

export default Questions;