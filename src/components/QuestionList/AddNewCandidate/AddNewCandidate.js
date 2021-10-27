import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import styles from './AddNewCandidate.module.css';
import Modal from '@mui/material/Modal'
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

export default function AddNewCandidate(props) {
  // {
  //   handleChangeFullname,
  //   handleChangeEmail,
  //   handleChangeLevel,
  //   handleChangeYear,
  //   handleChangeSkill,
  //   handleChangeNotes,
  //   fullName,
  //   email,
  //   level,
  //   year,
  //   skill,
  //   notes,
  // }

  const [fullName, setFullname] = React.useState(' ');
  const [email, setEmail] = React.useState(' ');
  const [level, setLevel] = React.useState(' ');
  const [year, setYear] = React.useState(' ');
  const [skill, setSkill] = React.useState(' ');
  const [notes, setNotes] = React.useState(' ');

  const handleChangeFullname = (event) => {
    setFullname(event.target.value);
    console.log(`${event.target.value}`);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    console.log(`${event.target.value}`);
  };

  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
    console.log(`${event.target.value}`);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
    console.log(`${event.target.value}`);
  };

  const handleChangeSkill = (event) => {
    setSkill(event.target.value);
    console.log(`${event.target.value}`);
  };

  const handleChangeNotes = (event) => {
    setNotes(event.target.value);
    console.log(`${event.target.value}`);
  };

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());
    history.push({pathname:'/StartLiveQuiz/',state:values});
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       >
      <Box className={styles.contMain}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography sx={{ mt: 3, mb: 2 }}>
              <span className={styles.header}>Add new candidate</span>
            </Typography>
            <InputLabel shrink htmlFor="fullName" sx={{ mt: 3 }}>
              <span className={styles.fullName}>Full Name</span>
            </InputLabel>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                size="small"
                required
                style={{ width: 380 }}
                id="fullName"
                name="fullName"
                autoComplete="fullName"
                autoFocus
                value={fullName}
                onChange={handleChangeFullname}
              />
            </Grid>
            <InputLabel shrink htmlFor="email" sx={{ mt: 3 }}>
              <span className={styles.email}>Email address</span>
            </InputLabel>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                size="small"
                style={{ width: 380 }}
                required
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid>
                <InputLabel shrink htmlFor="level" sx={{ mt: 3 }}>
                  <span className={styles.level}>Expertise level</span>
                </InputLabel>
                <TextField
                  size="small"
                  style={{ width: 180 }}
                  id="level"
                  select
                  name="level"
                  value={level}
                  onChange={handleChangeLevel}
                >
                  {levels.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid>
                <InputLabel shrink htmlFor="year" sx={{ mt: 3 }}>
                  <span className={styles.year}>Years of experience</span>
                </InputLabel>
                <TextField
                  size="small"
                  style={{ width: 180 }}
                  id="year"
                  select
                  name="year"
                  value={year}
                  onChange={handleChangeYear}
                >
                  {years.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <InputLabel shrink htmlFor="skill" sx={{ mt: 3 }}>
              <span className={styles.skill}>Technical Skills</span>
            </InputLabel>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                size="small"
                style={{ width: 380 }}
                id="skill"
                select
                name="skill"
                value={skill}
                onChange={handleChangeSkill}
              >
                {skills.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <InputLabel shrink htmlFor="notes" sx={{ mt: 3 }}>
              <span className={styles.note}>Notes</span>
            </InputLabel>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                id="notes"
                style={{ width: 380 }}
                multiline
                rows={4}
                value={notes}
                name="notes"
                onChange={handleChangeNotes}
              />
            </Grid>
            <Box>
              <Button
                style={{ backgroundColor: '#4B63CB' }}
                type="submit"
                size="large"
                variant="contained"
                sx={{ mt: 4 }}
              >
                <span className={styles.btn}>Start Quiz</span>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
      </Modal>
    </div>
  );
}
