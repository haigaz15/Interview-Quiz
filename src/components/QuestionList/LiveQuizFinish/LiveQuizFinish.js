import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from './LiveQuizFinish.module.css';

export default function LiveQuizFinish() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <div>
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
              <span className={styles.header}>Finish Interview</span>
            </Typography>
            <InputLabel shrink htmlFor="totalScore" sx={{ mt: 3 }}>
              <span className={styles.totalScore}>Total score</span>
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
                id="totalScore"
                name="totalScore"
                autoComplete="totalScore"
                autoFocus
              />
            </Grid>

            <InputLabel shrink htmlFor="feedback" sx={{ mt: 3 }}>
              <span className={styles.feedback}>Interviewer Feedback</span>
            </InputLabel>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                id="feedback"
                style={{ width: 380 }}
                multiline
                rows={4}
              />
            </Grid>

            <Box>
              <FormControl component="fieldset" sx={{ mt: 3 }}>
                <FormLabel component="legend">
                  <span className={styles.recommend}>
                    Do you recommend this candidate?
                  </span>
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="reccomend"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Box>

            <Button
              style={{ backgroundColor: '#4B63CB' }}
              type="submit"
              size="large"
              variant="contained"
              sx={{ mt: 4 }}
            >
              <span className={styles.btn}>Submit</span>
            </Button>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
