import { Typography, makeStyles,TextField, Grid, Container, Checkbox, FormControlLabel, Button } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import React,{useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from 'react-redux';
import useForms from '../components/BookNow/useForms';
import validateInfo from '../components/Auth/InfoValidation';
import "./BookNow.css";
import Calendar from "../components/Calendar/Calendar"



const BookNow = ({submitForm}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const {handleChange, values,setValues, handleSubmit, errors} = useForms(submitForm, validateInfo);

  return (
    <div className="hero-container1">
        <div className="hero">
        <Typography className={classes.typo1}> Appointment Booking </Typography>
        </div>
    
        <form className={classes.root} onClick={handleSubmit}>
          <Grid  container  alignItems="flex-start">
            <Grid item xs={12} sm={6} container  direction="row" justifyContent="flex-start" alignItems="center">
              <TextField 
                required
                className={classes.inputText}
                name="lastName"
                label="Last Name"
                variant="outlined"
                style = {{width: 150}}
                value={ values.lastName}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
                onChange={handleChange}
                enabled={Boolean(false)}
              /> 
              <TextField 
                required
                className={classes.inputText}
                id="outlined-required"
                label="First Name"
                variant="outlined"
                style = {{width: 150}}
                value={values.firstName}
              />
              <TextField 
                required
                className={classes.inputText}
               name="middleName"
                label="Middle Initial"
                variant="outlined"
                style = {{width: 120}}
                value={values.middleName}
              />
              <TextField 
                required
                className={classes.inputText}
                name="suffx"
                label="Suffix"
                variant="outlined"
                style = {{width: 80}}
                value={values.suffix}
              />
              
              <TextField 
                required
                className={classes.inputText}
                name="email"
                label="Email Address"
                variant="outlined"
                style = {{width: 480}}
                value={values.email}
              /> 
            
              <TextField 
                required
                className={classes.inputText}
                name="contactNumber"
                label="Contact Number"
                variant="outlined"
                style = {{width: 480}}
                value={values.contactNumber}
              /> 

              <TextField 
                required
                className={classes.inputText}
               name="concern"
                label="Concern"
                variant="outlined"
                multiline
                maxRows={4}
                style = {{width: 480}} 
                value={values.concern}
                
                onChange={handleChange}
              /> 
              <Autocomplete
                disablePortal
                className={classes.combobox}
                
                options={consultation}
                
                renderInput={(params) => <TextField {...params} name="consultType" label="Type of Consultation" value={values.consultType} />}
              />
              
              </Grid>
              <Grid item xs={6}> 

            

                <h1 className={classes.typo2}> Select Date and Time </h1>
                <div className="calendarwidth">

               <Calendar/>
                </div>
              </Grid>

              <Grid item xs={12} sm={6} container direction="column" justifyContent="flex-start" alignItems="flex-start">
              
              <FormControlLabel control={<Checkbox color="primary"/>} label="I have verified the information stated herein" className={classes.checkbox}/>
              
              <Button type="submit" variant="contained" className={classes.button} color="primary">Save</Button>
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