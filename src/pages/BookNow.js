import { Typography, makeStyles,TextField, Grid, Container, Checkbox, FormControlLabel, Button, Paper } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import React,{useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from 'react-redux';
import { COLORS } from "../Styles/colors";
import useForms from '../components/BookNow/useForms';
import validateInfo from '../components/Auth/InfoValidation';
import "./BookNow.css";
import Calendar from "../components/Calendar/Calendar"
import ConsultationType from "../components/BookNow/ConsultationType";

import doc from "../assets/Images/doctorsImages/doc.jpg"
import doc1 from "../assets/Images/doctorsImages/doc1-crop.jpg"


const BookNow = ({submitForm}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const {handleChange, values,setValues, handleSubmit, errors} = useForms(submitForm, validateInfo);

  const [disButton, setDisButton] = useState(false);
  const handleDisable=()=>{
    setDisButton(true)
  }

  return (
    <div className="hero-container1">
        <div className="hero">
        <Typography className={classes.typo1}> Appointment Booking </Typography>
        </div>
    
        <form className={classes.root} onSubmit={handleSubmit}>
          <Grid  container  alignItems="flex-start">
            <Grid item xs={12} sm={5} container  direction="row" justifyContent="flex-start" alignItems="center">
              <TextField 
                
                className={classes.inputText}
                name="lastName"
                label="Last Name"
                variant="standard"
                style = {{width: 150}}
                value={ values.lastName}
                
                onChange={handleChange}
                //enabled={Boolean(false)}
                
              /> 
              <TextField 
                
                className={classes.inputText}
                name="firstName"
                id="outlined-required"
                label="First Name"
                variant="standard"
                style = {{width: 150}}
                value={values.firstName}
                onChange={handleChange}
              />
              <TextField 
                
                className={classes.inputText}
                name="middleName"
                label="Middle Initial"
                variant="standard"
                style = {{width: 120}}
                value={values.middleName}
                onChange={handleChange}
              />
              <TextField 
                className={classes.inputText}
                name="suffx"
                label="Suffix"
                variant="standard"
                style = {{width: 80}}
                value={values.suffix}
                onChange={handleChange}
              />
              
              <TextField 
                
                className={classes.inputText}
                name="email"
                label="Email Address"
                variant="standard"
                style = {{width: 620}}
                value={values.email}
                onChange={handleChange}
              /> 
            
              <TextField 
                
                className={classes.inputText}
                name="contactNumber"
                label="Contact Number"
                variant="standard"
                style = {{width: 620}}
                value={values.contactNumber}
                onChange={handleChange}
              /> 

              <TextField 
                
                className={classes.inputText}
                name="concerns"
                label="Concern"
                variant="standard"
                multiline
                maxRows={4}
                style = {{width: 620}} 
                value={values.concerns}
                
                onChange={handleChange}
              /> 

              <ConsultationType

                  inputValue={values.concernType}
                  onInputChange={(evt, value) => setValues(prev=>({...prev,concernType:value}))}
                />

              </Grid>
              <Grid item xs={12} sm={6} container direction="column" justifyContent="center" alignItems="center"> 

                <h1 className={classes.typo2}> Select Date and Time </h1>
                <div className="calendarwidth">

              <Calendar onChange={date=> setValues(prev =>({...prev, dateAndTime:date}))} selected={values.dateAndTime}/>
                </div>
              </Grid>

              <Grid item xs={12} sm={5} container direction="column" justifyContent="flex-start" alignItems="flex-start">
              
              
              <FormControlLabel control={<Checkbox color="primary"/>} label="I have verified the information stated herein" className={classes.checkbox} onClick={handleDisable}/>
              
              {/* <input type="checkbox" onClick={handleDisable}/>
              <em>I have verified the information stated herein.</em> */}
              <Button type="submit" variant="contained" className={classes.button} color="primary" disabled={!disButton}>Save</Button> 
              
              </Grid>

              <Grid item xs={12} sm={6} container direction="row" justifyContent="flex-start" alignItems="flex-start">
                
              <Paper className={classes.doctorpaper} elevation={1}>
                    <img className="aboutus-img" src={doc}></img>
                    <Typography className={classes.doctor}>Dr. Teodulo Santos</Typography>
                    <Typography className={classes.doctorspecial}>Specializes in Internal Medicine</Typography>
                </Paper>
                <Paper className={classes.doctorpaper} elevation={1}>
                    <img className="aboutus-img" src={doc1}></img>
                    <Typography className={classes.doctor}>Dr. Florence Del-Carmen Santos</Typography>
                    <Typography className={classes.doctorspecial}>Specializes in Family Medicine</Typography>
                </Paper>

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
      width: '70%',
      margin: theme.spacing(2.5),

    }
  },

  typo1: {
    marginTop: "25px",
    marginBottom: "25px",
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
    backgroundColor: COLORS.BLUE,
  },

  doctor: {
    fontSize: 25,
    fontFamily: "Pathway Gothic One",
    fontWeight: "bold",
},

doctorspecial: {
    fontSize: 15,
    fontFamily: "Pathway Gothic One",
    
},

doctorpaper: {
    width: "45%",
    height: "225px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "35px",
    marginTop: "35px",
    textAlign: "center",
    marginLeft: "20px",
}

}))

export default BookNow;