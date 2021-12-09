import {React,useState} from 'react';
import { Typography,Box, Grid, CardContent,Card,Select,MenuItem,FormControl } from '@mui/material';
import styles from './Questions.module.css'
import AddIcon from '@mui/icons-material/Add';
import AddNewQuestion from '../AddNewQuestion/AddNewQuestion'
import { useDispatch, useSelector } from 'react-redux';
import {setFilteredLevel,setFilteredData,setOpen,setFilteredSkill} from '../../../redux/questions-slice'
import AddCircle from '../AddCircle/AddCircle'


const Questions = (props) => {

  const filteredData = useSelector(state=>state.question.filteredData);
  const questionData = useSelector(state=>state.question.questionData);
  const filteredLevel = useSelector(state=>state.question.filteredLevel);
  const filteredSkill = useSelector(state=>state.question.filteredSkill);

  const dispatch = useDispatch();

  const handleLevel = (e) =>{
    
    const filtered = questionData.filter(i => i.level === e.target.value && filteredSkill === i.skill);
      if(filtered.length === 0){
        dispatch(setFilteredData(questionData))
        dispatch(setFilteredLevel(e.target.value));
      }else{
      dispatch(setFilteredData(filtered));
      dispatch(setFilteredLevel(e.target.value));
      }
    
  }

  const handleSkill = (e) =>{ 

      const filtered = questionData.filter(i => i.skill === e.target.value && filteredLevel === i.level);

      if(filtered.length === 0){
        dispatch(setFilteredData(questionData))
        dispatch(setFilteredSkill(e.target.value));
      }else{
      dispatch(setFilteredData(filtered));
      dispatch(setFilteredSkill(e.target.value));
      }
    
  }

    return(
    <div style={{marginTop:"-7%"}}>
      {/* <Box className = {styles.header}> */}
      <Grid container  sx={{ml:32, mt:-10}} xs={4} sm={4}>
        {/* <FormControl variant="standard"> */}
        <Grid item xs= {6}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          //value={level}
          label="level"
          onChange={handleLevel}
          style={{width:"40%",height:"50%",borderRadius:"4%",backgroundColor:"#D5E1FD"}}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {props.levels.map(level =>
            <MenuItem value={level.value}>{level.label}</MenuItem>
          )}
        </Select>
        </Grid>
        {/* </FormControl> */}
        <Grid item  xs= {6}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          //value={skill}
          label="Age"
          variant="standard"
          onChange={handleSkill}
          style={{width:"60%",height:"50%",borderRadius:"4%",marginLeft:"-50%",backgroundColor:"#D5E1FD"}}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {props.skills.map(skill =>
            <MenuItem value={skill.value}>{skill.label}</MenuItem>
          )}
        </Select>
        </Grid>
        </Grid>
      {/* </Box> */}
      <Box>
      <Grid container  rowSpacing={7} sx={{ml:32, mt:-10}} xs={5} sm={5} md={7}>
      {filteredData.map((d,index) =>
      <Grid item xs={12}  key={d.id}>
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