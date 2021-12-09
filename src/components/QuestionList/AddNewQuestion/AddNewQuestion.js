import React from 'react';
import { Button,TextareaAutosize } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import { DialogTitle } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Select, Box, OutlinedInput } from '@material-ui/core';
import styles from './AddNewQuestion.module.css';
import {  useDispatch, useSelector } from 'react-redux'
import {handleLevel,handleSkill,handleQuestion,setOpen,setQuestionData,setFilteredData} from '../../../redux/questions-slice';
import nextId from "react-id-generator";

const AddNewQuestion = (props) => {

const dispatch = useDispatch();
const open = useSelector(state=> state.question.open)

const handleChangeLevel = (event) => {
  dispatch(handleLevel(event.target.value));
};

const handleQuestionChange = (event) => {
dispatch(handleQuestion(event.target.value));
};

const handleChangeSkill = (event) => {
  dispatch(handleSkill(event.target.value));
};


const questionData = useSelector(state=>state.question.questionData);
const level = useSelector(state=>state.question.level);
const skill = useSelector(state=>state.question.skill);
const question = useSelector(state=>state.question.question);
const filteredData = useSelector(state=>state.question.filteredData);
const filteredLevel = useSelector(state=>state.question.filteredLevel);
const filteredSkill = useSelector(state=>state.question.filteredSkill);
const handleSubmit = (e) =>{
  let temp = questionData
  let addedData = {
    id:nextId(),
    question:question,
    level:level,
    skill:skill
    }
    let newtemp = [...temp,addedData];
    dispatch(setQuestionData(newtemp));
    dispatch(setOpen(false));
   if(filteredLevel !== 'All' ){
    if(addedData.level === filteredLevel && filteredSkill === addedData.skill){
      const  temp2 = filteredData
      dispatch(setFilteredData([...temp2,addedData]));
    }
  } 
  else{
    dispatch(setFilteredData(newtemp))
  }
  if(filteredSkill !== 'All' ){
    if(addedData.skill === filteredSkill && filteredLevel === addedData.level){
      const  temp2 = filteredData
      dispatch(setFilteredData([...temp2,addedData]));
    }
  } 
  else{
    dispatch(setFilteredData(newtemp))
  }
}


  return (
    <Dialog open={open}>
      <Box className={styles.rootDialog}>
        <DialogContent className={styles.contentDialog}>
          <DialogTitle>Add new question</DialogTitle>
          <FormControl fullWidth>
            <Box className={styles.selectblocks}>
              <InputLabel id="demo-simple-select-label">
                Technical Skills
              </InputLabel>
              <Select
                input={<OutlinedInput />}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Technical Skills"
                className={styles.technicaskills}
                value={props.skill}
                onChange={handleChangeSkill}
              >
                {props.skills.map((options) => (
                  <MenuItem key={options.value} value={options.value}>
                    {options.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box className={styles.selectblocks}>
              <InputLabel id="demo-simple-select-label">
                Expertise Level
              </InputLabel>
              <Select
                className={styles.expertiselevel}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Technical Skills"
                input={<OutlinedInput />}
                value={props.level}
                onChange={handleChangeLevel}
              >
                {props.levels.map((options) => (
                  <MenuItem key={options.value} value={options.value}>
                    {options.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </FormControl>
          <Box className={styles.selectblocks}>
            <InputLabel id="demo-simple-select-label">Question</InputLabel>
            <TextareaAutosize minRows={9} className={styles.textArea} onChange={handleQuestionChange}/>
            <Button
              variant="contained"
              style={{
                width: '110px',
                marginTop: '50px',
                backgroundColor: '#4B63CB',
              }}
              onClick={handleSubmit}
            >
              Add
            </Button>
            <Button
              variant="contained"
              style={{
                width: '110px',
                marginTop: '50px',
                marginLeft:'20px',
                backgroundColor: '#4B63CB',
              }}
              onClick={() => dispatch(setOpen(false))}
            >
              cancel
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};


export default AddNewQuestion;
