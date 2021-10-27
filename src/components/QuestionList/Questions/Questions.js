import React, { useState} from 'react';
import { Typography,Box, Grid, CardContent,Card,InputLabel,TextField,Select,MenuItem,InputAdornment, FormControl } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './Questions.module.css'
import AddIcon from '@mui/icons-material/Add';
import AddNewQuestion from '../AddNewQuestion/AddNewQuestion'



const Questions = (props) => {
  const [level,setLevel] = useState("");
  const [skill, setSkill] = useState("");
  
  
  const handleLevel = (e) =>{
    setLevel(e.target.value);
    const filtered = props.data.filter(i => i.level === level)
    props.handleFilterdData(filtered)
    
  }
  const handleSkill = (e) =>{ 
    setSkill(e.target.value);

  }
  
    return(
    <div>
      <Box className = {styles.header}>
        <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={level}
          label="level"
          onChange={handleLevel}
          style={{width:115,height:30,borderRadius:"4%",backgroundColor:"#D5E1FD"}}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {props.levels.map(level =>
            <MenuItem value={level.value}>{level.label}</MenuItem>
          )}
        </Select>
        </FormControl>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={skill}
          label="Age"
          variant="standard"
          onChange={handleSkill}
          style={{width:191,height:30,marginLeft:"20px",borderRadius:"4%",backgroundColor:"#D5E1FD"}}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {props.skills.map(skill =>
            <MenuItem value={skill.value}>{skill.label}</MenuItem>
          )}
        </Select>
      </Box>
      <Box style={{width:"800px",marginTop:"70px",marginLeft:"40px"}}>
      <Grid container  rowSpacing={4} sx={{ml:32, mt:-10}}>
      {props.filteredData.map((d,index) =>
      <Grid item xs={3} sm={4} md={8} lg={8} xl={12} key={d.id}>
                <Card>
                  <CardContent>
                   <Box className={styles.content} style={{marginTop:"10px"}}>
                     <Typography>Question </Typography>
                     <Typography style={{marginLeft:"20px"}}>{d.question}</Typography>
                   </Box>
                   <Box className={styles.content}>
                     <Box 
                     style={{display:"flex"}}

                     >
                       <Typography>Level </Typography>
                       <Typography  style={{marginLeft:"47px"}}>{d.level}</Typography>
                     </Box>
                     <Box 
                     style={{display:"flex",marginLeft:"500px"}}
                     >
                       <Typography>Skills</Typography>
                       <Typography style={{marginLeft:"10px"}}>{d.skill}</Typography>
                     </Box>
                   </Box>
                   </CardContent>
                 </Card>
        </Grid>
        )}
     </Grid>
     </Box>
      <Box className = {styles.AddCircle} onClick={props.addQuestion} position="fixed" >
      <AddIcon fontSize="large" sx={{ color: "#FFFFFF" }} className = {styles.AddIcond}/> 
    </Box>
      <AddNewQuestion 
      open = {props.open} 
      handleClose={props.handleClose}
      skills={props.skills}
      levels={props.levels}
      skill={props.skill}
      level={props.level}
      question = {props.question}
      addquestion= {props.AddCirclequestion}
      handleQuestionChange = {props.handleQuestionChange}
      handleChangeLevel = {props.handleChangeLevel}
      handleChangeSkill = {props.handleChangeSkill}
      handleSubmit={props.handleSubmit}
      />
    </div>
    )
}

export default Questions;