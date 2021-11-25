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
import Modal from '@mui/material/Modal';
import { useSelector,useDispatch } from 'react-redux';
import { handleName,handleMail,handleLevel,handleYear,handleSkill,handleNotes } from '../../../redux/candidates-slice'
import {skills,levels,years} from '../../../datas/datas'


export default function AddNewCandidate(props) {

  const fullName = useSelector(state=>state.candidates.fullName);
  const email = useSelector(state=>state.candidates.email);
  const level = useSelector(state=>state.candidates.level);
  const year  = useSelector(state=>state.candidates.year);
  const skill = useSelector(state=>state.candidates.skill);
  const notes = useSelector(state=>state.candidates.notes);
  const dispatch = useDispatch();

  const handleChangeFullname = (event) => {
    dispatch(handleName(event.target.value))
    console.log(`${event.target.value}`);
  };

  const handleChangeEmail = (event) => {
    dispatch(handleMail(event.target.value))
    console.log(`${event.target.value}`);
  };

  const handleChangeLevel = (event) => {
    dispatch(handleLevel(event.target.value))
    console.log(`${event.target.value}`);
  };

  const handleChangeYear = (event) => {
    dispatch(handleYear(event.target.value))
    console.log(`${event.target.value}`);
  };

  const handleChangeSkill = (event) => {
    dispatch(handleSkill(event.target.value))
    console.log(`${event.target.value}`);
  };

  const handleChangeNotes = (event) => {
    dispatch(handleNotes(event.target.value))
    console.log(`${event.target.value}`);
  };

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());
    history.push('/StartLiveQuiz/');
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
