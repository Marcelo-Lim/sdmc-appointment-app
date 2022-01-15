import Autocomplete from '@mui/material/Autocomplete';
import React, {useEffect, useState} from "react";
import { makeStyles, Typography, Collapse, Grid, TextField, Button, createTheme, ThemeProvider} from "@material-ui/core";
import './ContactUs.css';
import vid3 from "../videos/vid3.mp4";
import { COLORS } from "../Styles/colors";
import emailjs from "@emailjs/browser";

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


const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm(
  'service_vdtmbb6', 
  'template_5cw3p8b', 
  e.target, 
  'user_Pja1vFlc7jtiv7rvHzl6w' 
).then(res=>{
  console.log(res);
}).catch(err=> console.log(err));
  setValues(initialValues);
}



const [values,setValues] = useState(initialValues);
  return(
      <div>
        <div className ="hero-container">
        <video src={vid3} autoPlay loop muted></video>
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
        <form className={classes.root} onSubmit={sendEmail}>
          <Grid  container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} container  direction="column" justifyContent="center" alignItems="center">
              <h4 className={classes.h4}>Santos-Del Carmen Medical Clinic</h4>
              <p className="p-1"> #61, 7th Avenue, Baranggay Soccoro, Cubao, Quezon City</p>
              <p className="p-1"> Tel No: (02) 7954-5168 </p>
              <p className="p-1"> Email: santos.delcarmen.medical.clinic@gmail.com </p>

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
                  type="submit"
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
    color: "#810000",
    textAlign: "center",
    borderRadius: "25px",
    padding: "20px",
    backgroundColor: "rgb(192,192,192, 0.5)"
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
    backgroundColor: COLORS.BLUE,
    
  },
  pTag: {
    marginBottom: 70,
    marginTop: -25,
  },

  h4: {
    marginTop: 150,
    textAlign: "center"
  },

}));

export default ContactUs;