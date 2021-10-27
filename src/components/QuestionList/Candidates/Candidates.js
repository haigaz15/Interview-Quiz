import React from 'react';
import { Typography,Box, Grid, CardContent, Card, CardHeader, Avatar,Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './Candidates.module.css';
import AddNewCandidate from '../AddNewCandidate/AddNewCandidate'
const Candidates = (props) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = React.useState(false);
   return( 
   <div>
       <Box style = {{width:"800px",marginLeft:"40px"}}>
        <Grid container  rowSpacing={3} sx={{ml:32, mt:-10}}> 
            {props.data.map((d,index) =>             
            <Grid item xs={3} sm={4} md={8} lg={8} xl={12}>
                <Card>
                <CardHeader
                avatar={<Box className={styles.innerCircul}></Box>}
                title="Example Candidates"
                subheader="Senior.net developer"
                action={
                    <Button aria-label="settings"
                    style={{backgroundColor: "#CEE3BC", color:"black", width:"100px",marginTop:"15px"}}>
                     Yes
                    </Button>
                  }
                > 
                </CardHeader>
                <CardContent>
                     <Box className={styles.content}>
                         <Typography style={{marginLeft:"10px"}}>Score</Typography> 
                         <Typography style={{marginLeft:"50px"}}>95%</Typography> 
                    </Box>
                     <Box className={styles.content}>
                         <Typography style={{marginLeft:"10px"}}>FeedBack</Typography> 
                         <Typography style={{marginLeft:"20px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</Typography>
                     </Box>
                     <Box className={styles.content}>
                         <Typography style={{marginLeft:"10px"}}>Experience</Typography> 
                         <Typography style={{marginLeft:"12.5px"}}>7 years</Typography>
                     </Box>
                </CardContent>
                </Card>
            </Grid>
            
        )}
        </Grid>
       </Box>
      <Box className = {styles.AddCircle} onClick={handleOpen} position="fixed">
      <AddIcon fontSize="large" sx={{ color: "#FFFFFF" }} className = {styles.AddIcond}/> 
      </Box>
      <AddNewCandidate 
      open = {open}
      handleClose = {handleClose}/>
    </div>)
}

export default Candidates;