import React from 'react';
import {
  Typography,
  Box,
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './QuestionList.module.css';
import Questions from './Questions/Questions';
import Candidates from './Candidates/Candidates';
import { useSelector, useDispatch } from 'react-redux';
import {
  setQuestionareClicked,
  setCandidatesClicked,
} from '../../redux/questionList-slice';
import { levels, skills } from '../../datas/datas';

const QuestionList = () => {
  const candidatesClicked = useSelector(
    (state) => state.questionList.candidatesClicked
  );
  const questionareClicked = useSelector(
    (state) => state.questionList.questionareClicked
  );
  const questionData = useSelector((state) => state.question.questionData);

  const dispatch = useDispatch();

  const handleQuestionare = () => {
    dispatch(setQuestionareClicked(true));
    dispatch(setCandidatesClicked(false));
  };

  const handleCandidates = () => {
    dispatch(setCandidatesClicked(true));
    dispatch(setQuestionareClicked(false));
  };

  const UI = () => {
    return (
      <Box className={styles.root}>
        <List className={styles.LeftMenu}>
          <Box className={styles.Group134}>
            <Typography className={styles.EasyIntr}>EASY INTERVIEW</Typography>
          </Box>
          <ListItemButton
            className={styles.CandidatesCont}
            onClick={handleCandidates}
          >
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary={'Candidates'} />
          </ListItemButton>
          <ListItemButton
            className={styles.QuestionarCont}
            onClick={handleQuestionare}
          >
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary={'Questionare'} />
          </ListItemButton>
          <hr className={styles.LineBreak}></hr>
          <ListItemButton className={styles.settingsCont}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'Settings'} />
          </ListItemButton>
        </List>
        {questionareClicked ? (
          <Questions
            className={styles.Questions}
            skills={skills}
            levels={levels}
          />
        ) : (
          ''
        )}
        {candidatesClicked ? (
          <Candidates skills={skills} levels={levels} data={questionData} />
        ) : (
          ''
        )}
      </Box>
    );
  };
  return <div>{UI()}</div>;
};

export default QuestionList;
