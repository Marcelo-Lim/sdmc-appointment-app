import React from "react"
import { Container, Typography, makeStyles, Grid, Button, Card, CardMedia} from "@material-ui/core";
import { COLORS } from '../Styles/colors';
import './Home.css';
import picture from "../assets/images/sdmclogo.png";
import blood from "../assets/images/bloodtesticon.png";
import cbc from "../assets/images/cbcicon.png";
import physical from "../assets/images/physicalicon.png";
import xray from "../assets/images/xrayicon.png";

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
                    <Typography className={classes.typo1}>Santos-Del Carmen <br/>&nbsp;&nbsp;&nbsp;Medical Clinic</Typography>
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

      <div>
        <Container component="main" maxWidth="lg">
          <Grid 
            container 
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography className={classes.typo2}>Services</Typography>
            <div className="services1">
              <Grid container spacing={9} justifyContent="center" alignItems="center">
                <Grid item>
                  <img src={blood} width="100%" height="200"/>
                </Grid>

                <Grid item>
                  <img src={cbc} width="100%" height="200"/>
                </Grid>
              </Grid>
            </div>
            <div className="services2">
              <Grid container spacing={9} justifyContent="center" alignItems="center">
                <Grid item>
                  <img src={xray} width="100%" height="200"/>
                </Grid>

                <Grid item>
                  <img src={physical} width="100%" height="200"/>
                </Grid> 
              </Grid>
            </div>
          </Grid>
        </Container>
      </div>
    </div>
  )
};

  const useStyles = makeStyles((theme) => ({

    typo1: {
      flexGrow: 1,
      fontSize: 50,
      fontFamily: 'Pathway Gothic One',
      color: COLORS.BLACK,
    },

    typo2: {
      flexGrow: 1,
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Pathway Gothic One',
      color: COLORS.BLACK,
    },

    button1: {
     background: COLORS.RED,
     color: COLORS.WHITE,
    },

  }))
export default Home;