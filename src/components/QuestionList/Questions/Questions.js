import React from 'react';
import { Typography,Box, Grid, CardContent,Card,Select,MenuItem,FormControl } from '@mui/material';
import styles from './Questions.module.css'
import AddIcon from '@mui/icons-material/Add';
import AddNewQuestion from '../AddNewQuestion/AddNewQuestion'
import { useDispatch, useSelector } from 'react-redux';
import {setFilteredLevel, setOpen,setFilteredData} from '../../../redux/questions-slice'


const Questions = (props) => {

  const filteredData = useSelector(state=>state.question.filteredData);
  const questionData = useSelector(state=>state.question.questionData);
  
  const dispatch = useDispatch();

  const handleLevel = (e) =>{
    if(e.target.value !== 'All'){
    const filtered = questionData.filter(i => i.level === e.target.value);
    dispatch(setFilteredData(filtered));
    dispatch(setFilteredLevel(e.target.value));
    }
    else{
      dispatch(setFilteredData(questionData));
      dispatch(setFilteredLevel(e.target.value));
    }
  }

  // const handleSkill = (e) =>{ 
  //   setSkill(e.target.value);
  // }

    return(
    <div>
      <Box className = {styles.header}>
        <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          //value={level}
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
          //value={skill}
          label="Age"
          variant="standard"
          //onChange={handleSkill}
          style={{width:191,height:30,marginLeft:"20px",borderRadius:"4%",backgroundColor:"#D5E1FD"}}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {/* {props.skills.map(skill =>
            <MenuItem value={skill.value}>{skill.label}</MenuItem>
          )} */}
        </Select>
      </Box>
      <Box style={{width:"800px",marginTop:"70px",marginLeft:"40px"}}>
      <Grid container  rowSpacing={4} sx={{ml:32, mt:-10}}>
      {filteredData.map((d,index) =>
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
      <Box className = {styles.AddCircle} onClick={ () => {dispatch(setOpen(true))} } position="fixed">
      <AddIcon fontSize="large" sx={{ color: "#FFFFFF" }} className = {styles.AddIcond}/> 
    </Box>
      <AddNewQuestion 
      skills={props.skills}
      levels={props.levels}
      />

    </div>
    )
}

export default Questions;