import { Typography, makeStyles,TextField, Grid, Container, Checkbox, FormControlLabel, Button } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import React,{useEffect, useState} from "react";
import {useDispatch} from 'react-redux';
import "./BookNow.css";

const BookNow = () => {
  const classes = useStyles();
  return (
    <div className="body">
      <div className="heading">
        <Typography className={classes.typo1}>Appointment Booking</Typography>
      </div>
      <div className="reg_form">
        <Container component="main" maxWidth="lg">
          <Grid 
            container
            direction="row"
          >
            <Grid item>
             <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="First Name"
                variant="outlined"
              /> 
            </Grid>
            <Grid item>
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Middle Initial"
                variant="outlined"
                style = {{width: 120}}
              />
            </Grid>
            <Grid item>
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Suffix"
                variant="outlined"
                style = {{width: 80}}
              />
            </Grid>
          </Grid>

          <Grid 
              container
              direction="column"
          >
            <Grid item>
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Email Address"
                variant="outlined"
              /> 
            </Grid>
            <Grid item>
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Contact Number"
                variant="outlined"
              /> 
            </Grid>
            <Grid item>
              <TextField 
                required
                className={classes.inputText}
                id="outlined-multiline-flexible-required"
                label="Concern"
                variant="outlined"
                multiline
                
                maxRows={4}
                style = {{width: 740}} 
              /> 
            </Grid>
            <Grid item>
              <Autocomplete
                disablePortal
                className={classes.inputText}
                id="combo-box-consultation"
                options={consultation}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Type of Consultation" />}
              />
            </Grid>
          </Grid>

          <Grid 
            container
            direction="column"
          >
            <Grid item>
              <FormControlLabel control={<Checkbox color="primary"/>} label="I have verified the information stated herein" className={classes.checkbox}/>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.button} color="primary">Save</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
};

const consultation = [
  {label: "Check-up"},
  {label: "Blood Test"},
  {label: "Ultrasound"},
  {label: "Complete Blood Count (CBC)"},
  {label: "Urinalysis"},
]

const useStyles = makeStyles((theme) => ({

  typo1: {
    marginTop: "100px",
    fontSize: "30px",
    fontWeight: "bold",
  },

  inputText: {
    marginTop: "20px",
    marginRight: "30px",
  },

  combo: {
    marginTop: "30px"
  },

  checkbox: {
    marginTop: "20px",
    marginLeft: "200px"
  },

  button: {
    marginLeft: "350px"
  },

}))

export default BookNow;