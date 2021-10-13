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
import { Select } from '@material-ui/core';



const AddNewQuestion = (props) => {
    return(
    <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Add new question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Technical Skills</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Technical Skill"}
          label="Technical Skills"
          
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <InputLabel id="demo-simple-select-label">Expertise Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Technical Skill"}
          label="Technical Skills"
          
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextareaAutosize row = {4}/>
        </DialogContent>
   
  </Dialog>)
}

export default AddNewQuestion