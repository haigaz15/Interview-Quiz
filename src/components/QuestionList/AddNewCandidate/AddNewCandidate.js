import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import styles from './AddNewCandidate.module.css';

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

export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const [level, setLevel] = React.useState(' ');
  const [year, setYear] = React.useState(' ');
  const [skill, setSkill] = React.useState(' ');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChangeSkill = (event) => {
    setSkill(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
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
              <InputLabel shrink htmlFor="FullName" sx={{ mt: 3 }}>
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
                  id="FullName"
                  name="FullName"
                  autoComplete="FullName"
                  autoFocus
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
                />
              </Grid>

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
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
