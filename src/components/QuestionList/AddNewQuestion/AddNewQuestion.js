import React from 'react'
import { Button, TextField,Paper, TextareaAutosize } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import BootstrapDialog from '@mui/material/Dialog';
import FormControl from '@material-ui/core/FormControl';
import DialogContentText from '@material-ui/core/DialogContentText';
import { DialogTitle } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Select,Box,OutlinedInput } from '@material-ui/core';
import styles from './AddNewQuestion.module.css'


const AddNewQuestion = (props) => {
    return(
    <Dialog open={props.open} onClose={props.handleClose} >
        <Box className={styles.title}>
        <DialogTitle >Add new question</DialogTitle>
        </Box>
        <DialogContent className = {styles.rootDialog}>
        <FormControl fullWidth>
        <Box className={styles.selectblocks}>
        <InputLabel id="demo-simple-select-label">Technical Skills</InputLabel>
        <Select
          input={<OutlinedInput />}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Technical Skill"}
          label="Technical Skills"
          className={styles.technicaskills}
          
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Box>
        <Box className={styles.selectblocks}>
        <InputLabel id="demo-simple-select-label">Expertise Level</InputLabel>
        <Select
          className={styles.expertiselevel}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Technical Skill"}
          label="Technical Skills"
          input={<OutlinedInput />}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Box>
      </FormControl>
      <Box className={styles.selectblocks}>
      <InputLabel id="demo-simple-select-label">Question</InputLabel>
      <TextareaAutosize minRows={9}className={styles.textArea}/>
      <Button 
      variant="contained" 
      style={{width:"110px" ,marginTop:"50px", backgroundColor:"#4B63CB"}}
      >
      Add
      </Button>
      </Box>

        </DialogContent>
  </Dialog>)
}

export default AddNewQuestion