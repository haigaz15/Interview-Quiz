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
import styles from './StartLiveQuiz.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import {
  setArrOfOptions,
  setOpen,
  setScore,
  setScores,
  setChangeQuestions,
} from '../../../redux/startLiveQuiz-slice';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 250,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function StartLiveQuiz( ) {
  const open = useSelector((state) => state.startLiveQuiz.open);
  const arrOfOptions = useSelector((state) => state.startLiveQuiz.arrOfOptions);
  const questions = useSelector((state) => state.startLiveQuiz.questions);
  const dispatch = useDispatch();

  const level = useSelector((state) => state.candidates.level);
  const fullName = useSelector((state) => state.candidates.fullName);
  const email = useSelector((state) => state.candidates.email);
  const year = useSelector((state) => state.candidates.year);
  const notes = useSelector((state) => state.candidates.notes);
  const scores = useSelector((state) => state.startLiveQuiz.scores);

  const handleOpen = () => dispatch(setOpen(true));
  const handleClose = () => dispatch(setOpen(false));

  const handleChangeQuestion = (event) => {
    let temp = [...arrOfOptions, event.target.value];
    dispatch(setArrOfOptions(temp));
  };

  const handleChangeScore = (event) => {
    dispatch(setScore(event.target.value));
    dispatch(setScores([...scores, event.target.value]));
    console.log(scores);
  };

  function addQuestionAnswer() {
    let temp = [
      ...questions,
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
    ];
    dispatch(setChangeQuestions(temp));
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
                            value={arrOfOptions[i]}
                            onChange={handleChangeQuestion}
                            style={{ width: '90%' }}
                          >
                            {ques.map((option) => (
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
                            onInput={(e) => {
                              if (e.target.value > 6) {
                                e.target.value = 6;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            // InputProps={{ inputProps: { min: 1, max: 6 } }}
                            onChange={handleChangeScore}
                            type="number"
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
                <Grid className={styles.info}>
                  Full Name:
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{ fontFamily: 'Robot', color: '#484848' }}
                  >
                    {fullName}
                  </Typography>
                </Grid>
                <Grid></Grid>
                <Grid className={styles.info} sx={{ mt: 3 }}>
                  {' '}
                  Email:
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{ fontFamily: 'Robot', color: '#484848' }}
                  >
                    {email}
                  </Typography>
                </Grid>
                <Grid> </Grid>
                <Grid className={styles.info} sx={{ mt: 3 }}>
                  Expertise Level:
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{ fontFamily: 'Robot', color: '#484848' }}
                  >
                    {level}
                  </Typography>
                </Grid>
                <Grid></Grid>
                <Grid className={styles.info} sx={{ mt: 3 }}>
                  Years of Experience:
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{ fontFamily: 'Robot', color: '#484848' }}
                  >
                    {year}
                  </Typography>
                </Grid>
                <Grid></Grid>
                <Grid className={styles.info} sx={{ mt: 3 }}>
                  Notes:
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{ fontFamily: 'Robot', color: '#484848' }}
                  >
                    {notes}
                  </Typography>
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

      <Box sx={{ mt: 3, mr: 6 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid onClick={addQuestionAnswer}>
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
