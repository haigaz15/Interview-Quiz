import React, { useState } from 'react';
import { Button, TextField, Paper, TextareaAutosize } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import BootstrapDialog from '@mui/material/Dialog';
import FormControl from '@material-ui/core/FormControl';
import DialogContentText from '@material-ui/core/DialogContentText';
import { DialogTitle } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Select, Box, OutlinedInput } from '@material-ui/core';
import styles from './AddNewQuestion.module.css';

const AddNewQuestion = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
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
                value={'Technical Skill'}
                label="Technical Skills"
                className={styles.technicaskills}
                value={props.skill}
                onChange={props.handleChangeSkill}
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
                value={'Technical Skill'}
                label="Technical Skills"
                input={<OutlinedInput />}
                value={props.level}
                onChange={props.handleChangeLevel}
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
            <TextareaAutosize minRows={9} className={styles.textArea} />
            <Button
              variant="contained"
              style={{
                width: '110px',
                marginTop: '50px',
                backgroundColor: '#4B63CB',
              }}
              onClick={props.handleSubmit}
            >
              Add
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default AddNewQuestion;
