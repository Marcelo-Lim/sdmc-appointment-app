import Autocomplete from '@mui/material/Autocomplete';
import React, {useEffect, useState} from "react";
import { makeStyles, Typography, Collapse, Grid, TextField, Button, createTheme, ThemeProvider} from "@material-ui/core";
import './ContactUs.css';

const ContactUs = () => {
  const classes = useStyles();
  const handleInputChange = e=> {
    const {name,value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  },[])

const initialValues = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  message: '',

}
const [values,setValues] = useState(initialValues);
  return(
      <div>
        <div className ="hero-container">
        
        <Collapse 
          in ={checked}
          {... (checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
        <Typography className={classes.title}> CONTACT US </Typography>
        </Collapse>
        </div>
        <div className="wrapper">
          <h1 className="typography-title">We would love to hear from you!</h1>
        </div>
        <form className={classes.root}>
          <Grid  container justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} sm={6} container  direction="column" justifyContent="flex-start" alignItems="center">
              <h4 className={classes.h4}>Santos-Del Carmen Medical Clinic</h4>
              <p className="p-1"> #61, 7th Avenue, Baranggay Soccoro, Cubao, Quezon City</p>

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange = {handleInputChange} 
                  />
                <TextField
                  variant="outlined"
                  label="Last Name"
                  name="lastName"
                  value={values.lastName} 
                  onChange = {handleInputChange}
                  />
                <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange = {handleInputChange} 
                  />
                <TextField
                  variant="outlined"
                  label="Mobile"
                  name="mobile"
                  value={values.mobile}
                  onChange = {handleInputChange}
                  />
                  <TextField
                  variant="outlined"
                  label="Message"
                  name="message"
                  multiline rows={4}
                  value={values.message}
                  onChange = {handleInputChange}
                  />
                  <br/>
                  <ThemeProvider>
                  <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.btn}
                >
                  Submit
                </Button>
                </ThemeProvider>
              </Grid>
          </Grid>
          </form>
          </div>

  ) 
};


const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 150,
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: 75,
    fontFamily: "Pathway Gothic One",
  },
  root: {
    '& .MuiFormControl-root': {
      width: '60%',
      margin: theme.spacing(4),
    }
  },
  btn: {
    marginLeft: 35,
    marginBottom: 50,
    width: '60%',
    
  },
  pTag: {
    marginBottom: 70,
    marginTop: -25,
  },

  h4: {
    marginTop: 150,
  },

}));

export default ContactUs;