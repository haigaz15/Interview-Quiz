import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LiveQuizFinish from '../LiveQuizFinish/LiveQuizFinish';
import AddIcon from '@mui/icons-material/Add';
import Link from '@mui/material/Link';
import AddNewCandidate from '../AddNewCandidate/AddNewCandidate';
import styles from './StartLiveQuiz.module.css';
import { useHistory } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 250,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

const questions = [
  {
    value: 'What is Js',
    label: 'What is Js',
  },
  {
    value: 'What is ReactJs',
    label: 'What is ReactJs',
  },
  {
    value: 'What is OOP',
    label: 'What is OOP',
  },
];

export default function StartLiveQuiz() {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [questions, setQuestions] = React.useState([
    [
      {
        value: 'What is Js',
        label: 'What is Js',
      },
      {
        value: 'What is ReactJs',
        label: 'What is ReactJs',
      },
      {
        value: 'What is OOP',
        label: 'What is OOP',
      },
    ],
  ]);

  const handleChangeQuestion = (event) => {
    setQuestions(event.target.value);
  };

  function addQuestionAnswer() {
    setQuestions([
      ...questions,
      {
        answer: '',
        score: '',
      },
    ]);
  }

  function questionAnswerUI() {
    return questions.map((ques, i) => (
      <>
        {[lightTheme].map((theme, index) => (
          <Grid item key={index}>
            <ThemeProvider theme={theme}>
              <Box sx={{ mb: 3 }}>
                {[4].map((elevation) => (
                  <Item key={elevation} elevation={elevation}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-end"
                      >
                        <Grid xs={6} sm={7} md={9} lg={9}>
                          <TextField
                            sx={{ mt: 3, ml: 2 }}
                            size="small"
                            id="question"
                            select
                            value={questions}
                            onChange={handleChangeQuestion}
                            style={{ width: '90%' }}
                          >
                            {questions.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid xs={6} sm={5} md={3} lg={3}>
                          {' '}
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-end"
                      >
                        <Grid xs={6} sm={7} md={9} lg={9}>
                          <TextField
                            style={{ width: '90%' }}
                            sx={{ mt: 2, ml: 2 }}
                            id="answer"
                            multiline
                            rows={5}
                            placeholder="Answer"
                          />
                        </Grid>

                        <Grid
                          container
                          direction="column"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          xs={6}
                          sm={5}
                          md={3}
                          lg={3}
                        >
                          <InputLabel
                            shrink
                            htmlFor="outlined-basic"
                            sx={{ ml: 3 }}
                          >
                            <span className={styles.outlined}>Score</span>
                          </InputLabel>
                          <TextField
                            size="small"
                            style={{ width: '60%' }}
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ mt: 1, ml: 3 }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </>
    ));
  }

  return (
    <>
      <Box sx={{ mt: 10, mr: 6, ml: 6 }}>
        <Grid container spacing={10}>
          <Grid item xs={5} sm={4} md={3} lg={3}>
            <Box className={styles.boxHeader} p={1}>
              Personal Info
            </Box>
          </Grid>
          <Grid item xs={7} sm={8} md={9} lg={9}>
            <Box className={styles.boxHeader} p={1}>
              Questions
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 3, mr: 6, ml: 6 }}>
        <Grid container spacing={10}>
          <Grid item xs={5} sm={4} md={3} lg={3}>
            <Box>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid className={styles.info}>Full Name:</Grid>
                <Grid>{email}</Grid>
                <Grid className={styles.info} sx={{ mt: 3 }}>
                  {' '}
                  Email:
                </Grid>
                <Grid></Grid>
                <Grid className={styles.info} sx={{ mt: 3 }}>
                  Expertise Level
                </Grid>
                <Grid></Grid>
                <Grid className={styles.info} sx={{ mt: 3 }}>
                  Years of Experience:
                </Grid>
                <Grid></Grid>
                <Grid className={styles.info} sx={{ mt: 3 }}>
                  Notes:
                </Grid>
                <Grid></Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={7} sm={8} md={9} lg={9}>
            {questionAnswerUI()}
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 3, mr: 6 }} onClick={addQuestionAnswer}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid>
            <Link
              component="button"
              style={{ color: '#4B63CB', fontSize: '16px' }}
              underline="none"
            >
              {' '}
              {'Add Question'}
            </Link>
          </Grid>
          <Grid>
            <Link component="button" style={{ color: '#4B63CB' }}>
              <AddIcon />
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 40, mr: 6 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            style={{ backgroundColor: '#4B63CB' }}
            type="submit"
            size="large"
            variant="contained"
            sx={{ mb: 10 }}
            onClick={handleOpen}
          >
            <span className={styles.btn}>Finish</span>
          </Button>
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LiveQuizFinish />
      </Modal>
    </>
  );
}
