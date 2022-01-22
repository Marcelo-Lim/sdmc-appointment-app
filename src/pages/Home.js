import React, { useState } from "react"
import { Container, Typography, makeStyles, Grid, Button, Link } from "@material-ui/core";
import { COLORS } from '../Styles/colors';
import './Home.css';
import cbc from "../assets/images/bt4.png";
import serum from "../assets/images/bt3.png";
import urinalysis from "../assets/images/bt2.png";
import hiv from "../assets/images/bt6.png";
import screening from "../assets/images/bt5.png";
import vid1 from "../videos/vid1.mp4";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const classes = useStyles();

  const history = useHistory();
  
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  return (
    <div>
      
      <div className="cover">
        
      <video src= {vid1} autoPlay loop muted>  </video>
        <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
          
          <Container component="main" maxWidth="lg">
          
            <Grid container spacing={2} direction="column">
              <Grid item>
              
                  <div className="home_title">
                    <Typography className="typo1-home">Santos-Del Carmen <br/>Medical Clinic</Typography>
                    <p className="typo2-home"> Clinic Schedule: Monday - Friday(8:00AM to 3:00 PM) </p>
                    <p className="typo3-home"> Offers free Check-Up </p>
                  </div>
              </Grid>

              <Grid item>
                <div className="button_book">
                  <Button className={classes.button1} onClick={() => {user?.result ? history.push('/BookNow') : history.push('/Authentication')}}>  Book Now </Button>
                </div>
                
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </div>
      
      <Container component="main" maxWidth="lg">
      <div className="services">
        
        <Typography className={classes.typo2}>Services</Typography>
        <Typography className={classes.typo8}>Santos-Del Carmen Medical Clinic offers the following tests</Typography>
        
        <div className="service-left">
          <Grid 
            container
            direction="row"
          >
            <Grid item >
              <img src={cbc} width="150px" height="200" alt="cbc" />
            </Grid>
            <Grid item>
              <Typography className={classes.typo3}>
                CBC (Complete Blood Count) <b>(₱100.00)</b> | Platelet Count <b>(₱100.00)</b> | Blood Typing <b>(₱140.00)</b> | LDL (Low-Density <br/>
                Lipoprotein (Choresterol)) <b>(₱150.00)</b> | HDL (High-Density Lipoprotein (Choresterol)) <b>(₱150.00)</b> | FBS  <br/>
                (Fasting Blood Sugar) <b>(₱120.00)</b> | BUA (Blood Uric Acid) <b>(₱120.00)</b>| BUN (Blood Urea Nitrogen) <b>(₱120.00)</b> | Lipid <br/>
                Profile <b>(₱420.00)</b> | Cholesterol <b>(₱120.00)</b> | Triglycerides <b>(₱120.00)</b>| HBA1C (Haemoglobin A1c | Glycated Hemoglobin) <b>(₱350.00)</b> <br/>
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className="service-right">
          <Grid 
            container
            direction="row"
            justifyContent= "flex-end"
          >
            <Grid item>
              <Typography className={classes.typo4}>
                Creatinine <b>(₱120.00)</b> | SGPT (Serum Glutamic Pyruvic Transaminase) <b>(₱150.00)</b>| SGOT (Serum <br/>
                Glutamic Oxaloacetic Transaminase) <b>(₱150.00)</b>
              </Typography>
            </Grid>  
            <Grid item>
              <img src={serum} width="150px" height="200" alt="cbc"/>
            </Grid>
          </Grid>
        </div>

        <div className="service-left">
          <Grid 
            container
            direction="row"
          >
            <Grid item>
              <img src={urinalysis} width="150px" height="200" alt="cbc"/>
            </Grid>
            <Grid item>
              <Typography className={classes.typo5}>
                Urinalysis <b>(₱100.00)</b> | Sodium <b>(₱120.00)</b>| Potassium <b>(₱120.00)</b> | Magnesium <b>(₱250.00)</b> | Calcium <b>(₱120.00)</b> | Inorganic Phosporous <b>(₱250.00)</b> | <br/>
                Bilirubin B1B2 <b>(₱200.00)</b> | Total Protein <b>(₱120.00)</b> | Albumin <b>(₱120.00)</b> | TPAG (Total Protein, Albumin-Globulin <br/>
                Ratio) <b>(₱250.00)</b> | Alkaline Phosphatase <b>(₱120.00)</b> | Fecalysis <b>(₱100.00)</b>
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className="service-right">
          <Grid 
            container
            direction="row"
            justifyContent="flex-end"
          >
            <Grid item>
              <Typography className={classes.typo6}>
              Anti-HAV IgM <b>(₱350.00)</b>| Anti-HAV IgG <b>(₱350.00)</b> | Anti-Hbc IgM <b>(₱350.00)</b> | Anti-Hbc IgG <b>(₱350.00)</b> | Anti HCV <b>(₱550.00)</b> | Anti <br/>
              Hbe <b>(₱350.00)</b> | Anti HBs <b>(₱350.00)</b>
              </Typography>
            </Grid>  
            <Grid item>
              <img src={hiv} width="200px" height="200" alt="cbc"/>
            </Grid>
          </Grid>
        </div>

        <div className="service-left">
          <Grid 
            container
            direction="row"
          >
            <Grid item>
              <img src={screening} width="250px" height="200" alt="cbc"/>
            </Grid>
            <Grid item>
              <Typography className={classes.typo7}>
              HBsAg Screening <b>(₱200.00)</b> | HBsAg ELISA <b>(₱350.00)</b> | Hepatitis A Profile <b>(₱900.00)</b> | Hepaptitis B Profile <b>(₱1500.00)</b>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
      </Container>  
    </div>
  )
};

  const useStyles = makeStyles((theme) => ({


    typo2: {
      flexGrow: 1,
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'Montserrat',
      color: COLORS.BLACK,
    },

    typo3: {
      marginTop: '10px',
      marginLeft: '10px',
      marginBottom: '20px',
      fontFamily: 'Montserrat',
      fontSize: 15,
    },

    typo4: {
      marginTop: '50px',
      marginRight: '40px',
      fontFamily: 'Montserrat',
      fontSize: 15,
    },

    typo5: {
      marginTop: '10px',
      marginLeft: '20px',
      marginBottom: '20px',
      fontFamily: 'Montserrat',
      fontSize: 15,
    },

    typo6: {
      marginTop: '100px',
      marginRight: '10px',
      fontFamily: 'Montserrat',
      fontSize: 15,
    },

    typo7: {
      marginTop: '10px',
      marginBottom: '50px',
      marginLeft: '10px',
      fontFamily: 'Montserrat',
      fontSize: 15,
    },

    typo8: {
      flexGrow: 1,
      fontSize: 30,
      textAlign: 'center',
      marginTop: '10px',
      fontFamily: 'Montserrat',
      color: COLORS.BLACK,
    },

    button1: {
      background: COLORS.MAROON,
      color: COLORS.WHITE,
      
    },

    

  }))
export default Home;