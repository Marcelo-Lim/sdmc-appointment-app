import { Typography, makeStyles,TextField, Grid, Container, Checkbox, FormControlLabel, Button } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import React from "react";
import "./BookNow.css";
import Calendar from "../components/Calendar/Calendar"

const BookNow = () => {
  const classes = useStyles();
  return (
    <div className="hero-container">
        <div className="hero">
        <Typography className={classes.typo1}> Appointment Booking </Typography>
        </div>
  
        <form className={classes.root}>
          <Grid  container  alignItems="flex-start">
            <Grid item xs={12} sm={6} container  direction="row" justifyContent="flex-start" alignItems="center">
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Last Name"
                variant="outlined"
                style = {{width: 150}}
              /> 
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="First Name"
                variant="outlined"
                style = {{width: 150}}
              />
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Middle Initial"
                variant="outlined"
                style = {{width: 120}}
              />
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Suffix"
                variant="outlined"
                style = {{width: 80}}
              />
              
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Email Address"
                variant="outlined"
                style = {{width: 480}}
              /> 
            
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="Contact Number"
                variant="outlined"
                style = {{width: 480}}
              /> 

              <TextField 
                required
                className={classes.inputText}
                id="outlined-multiline-flexible-required"
                label="Concern"
                variant="outlined"
                multiline
                maxRows={4}
                style = {{width: 480}} 
              /> 
              <Autocomplete
                disablePortal
                className={classes.combobox}
                id="combo-box-consultation"
                options={consultation}
                renderInput={(params) => <TextField {...params} label="Type of Consultation" />}
              />
              
              </Grid>
              <Grid item xs={12} sm={6} className={classes.calendar1}>
                <h1 className={classes.typo2}> Select Date and Time </h1>
                <Calendar className={classes.calendar1}/>
              </Grid>

              <Grid item xs={12} sm={6} container direction="column" justifyContent="flex-start" alignItems="flex-start">
              
              <FormControlLabel control={<Checkbox color="primary"/>} label="I have verified the information stated herein" className={classes.checkbox}/>
              
              <Button variant="contained" className={classes.button} color="primary">Save</Button>
              </Grid>

              </Grid>
            </form>
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
  
  root: {
    '& .MuiFormControl-root': {
      width: '30%',
      margin: theme.spacing(2.5),

    }
  },

  typo1: {
    textAlign:"center",
    fontSize: "30px",
    fontWeight: "bold",
  },

  typo2: {
    textAlign:"center",
    fontSize: "50px",
    fontWeight: "bold",
    marginTop: "150px",
    fontFamily: "Montserrat",
  },

  inputText: {
    
    
  },

  combobox: {
    width: '100%',
  },

  checkbox: {
    marginTop: "50px",
    marginLeft: "110px",
    marginBottom: "40px",
    width: "50%",
  },

  button: {
    marginLeft: "150px",
    width: "35%",
    marginBottom: "150px",
  },

  calendar1: {
    
      
  },

}))

export default BookNow;