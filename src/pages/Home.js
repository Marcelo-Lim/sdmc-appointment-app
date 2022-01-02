import React from "react"
import { Container, Typography, makeStyles, Grid, Button } from "@material-ui/core";
import { COLORS } from '../Styles/colors';
import './Home.css';
import cbc from "../assets/Images/bt4.png";
import serum from "../assets/Images/bt3.png";
import urinalysis from "../assets/Images/bt2.png";
import hiv from "../assets/Images/bt6.png";
import screening from "../assets/Images/bt5.png";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="cover">
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
                    <Typography className="typo1">Santos-Del Carmen <br/>&nbsp;&nbsp;&nbsp;Medical Clinic</Typography>
                  </div>
              </Grid>

              <Grid item>
                <div className="button_book">
                  <Button className={classes.button1}>Book Now</Button>
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
                CBC (Complete Blood Count) | Platelet Count | Blood Typing | LDL (Low-Density <br/>
                Lipoprotein (Choresterol)) | HDL (High-Density Lipoprotein (Choresterol)) | FBS <br/>
                (Fasting Blood Sugar) | BUA (Blood Uric Acid) | BUN (Blood Urea Nitrogen) | Lipid <br/>
                Profile | Cholesterol | Triglycerides | HBA1C (Haemoglobin A1c | Glycated Hemoglobin) <br/>
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
                Creatinine | SGPT (Serum Glutamic Pyruvic Transaminase) | SGOT (Serum <br/>
                Glutamic Oxaloacetic Transaminase)
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
              <img src={urinalysis} width="250px" height="200" alt="cbc"/>
            </Grid>
            <Grid item>
              <Typography className={classes.typo5}>
                Urinalysis | Sodium | Potassium | Magnesium | Calcium | Inorganic Phosporous | <br/>
                Bilirubin B1B2 | Total Protein | Albumin | TPAG (Total Protein, Albumin-Globulin <br/>
                Ratio) | Alkaline Phospotase | Fecalysis
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
              Anti-HAV IgM | Anti-HAV IgG | Anti-Hbc IgM | Anti-Hbc IgG | Anti HCV | Anti <br/>
              Hbe | Anti HBs
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
              HBsAg Screening | HBsAg ELISA | Hepatitis A Profile | Hepaptitis B Profile
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
      fontFamily: 'Pathway Gothic One',
      color: COLORS.BLACK,
    },

    typo3: {
      marginTop: '10px',
      marginLeft: '10px',
      marginBottom: '20px',
      fontSize: 15,
    },

    typo4: {
      marginTop: '50px',
      marginRight: '40px',
      fontSize: 15,
    },

    typo5: {
      marginTop: '10px',
      marginLeft: '20px',
      fontSize: 15,
    },

    typo6: {
      marginTop: '100px',
      marginRight: '10px',
      fontSize: 15,
    },

    typo7: {
      marginTop: '10px',
      marginBottom: '50px',
      marginLeft: '10px',
      fontSize: 15,
    },

    typo8: {
      flexGrow: 1,
      fontSize: 30,
      textAlign: 'center',
      marginTop: '10px',
      fontFamily: 'Pathway Gothic One',
      color: COLORS.BLACK,
    },

    button1: {
      background: COLORS.RED,
      color: COLORS.WHITE,
    },

    

  }))
export default Home;