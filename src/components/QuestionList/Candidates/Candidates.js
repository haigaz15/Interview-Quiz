import React from 'react';
import {
  Typography,
  Box,
  Grid,
  CardContent,
  Card,
  CardHeader,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './Candidates.module.css';
import AddNewCandidate from '../AddNewCandidate/AddNewCandidate';
import { useSelector } from 'react-redux';
import AddCircle from '../AddCircle/AddCircle'
const Candidates = (props) => {
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const candidatesData = useSelector(state => state.liveQuizFinish.candidatesData)
  return (
    <div>
      {console.log(candidatesData)}
      <Box style={{ width: '800px', marginTop:'-8.5%' }}>
        <Grid container rowSpacing={3} sx={{ ml: 32, mt: -10 }}>
          {candidatesData.map((d, index) => (
            <Grid item xs={3} sm={4} md={8} lg={8} xl={12}>
              <Card>
                <CardHeader
                  avatar={<Box className={styles.innerCircul}></Box>}
                  title={d.name}
                  subheader={d.skill}
                  action={
                    d.radioButtons === 'Yes' ?
                    <Button
                      aria-label="settings"
                      style={{
                        backgroundColor: '#CEE3BC',
                        color: 'black',
                        width: '100px',
                        marginTop: '15px',
                      }}
                    >
                      Yes
                    </Button> :
                     <Button
                      aria-label="settings"
                      style={{
                        backgroundColor: '#EFA5A5',
                        color: 'black',
                        width: '100px',
                        marginTop: '15px',
                      }}
                    >
                      No
                    </Button>

                  }
                ></CardHeader>
                <CardContent>
                  <Box className={styles.content}>
                    <Typography style={{ marginLeft: '10px' }}>
                      score
                    </Typography>
                    <Typography style={{ marginLeft: '50px' }}>{d.totalScore}</Typography>
                  </Box>
                  <Box className={styles.content}>
                    <Typography style={{ marginLeft: '10px' }}>
                      FeedBack
                    </Typography>
                    <Typography style={{ marginLeft: '20px' }}>
                      {' '}
                      {d.feedback}
                    </Typography>
                  </Box>
                  <Box className={styles.content}>
                    <Typography style={{ marginLeft: '10px' }}>
                      Experience Years
                    </Typography>
                    <Typography style={{ marginLeft: '12.5px' }}>
                      {d.year}
                      
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Box className={styles.AddCircle} onClick={handleOpen} position="fixed">
        <AddIcon
          fontSize="large"
          sx={{ color: '#FFFFFF' }}
          className={styles.AddIcond}
        />
      </Box> */}
      <AddCircle handleOpen={handleOpen}/>
      <AddNewCandidate open={open} handleClose={handleClose} />
    </div>
  );
};

export default Candidates;
