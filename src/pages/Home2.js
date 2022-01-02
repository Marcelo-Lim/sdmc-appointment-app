import React from 'react';
//import { Typography, makeStyles, TextField } from "@material-ui/core";
import {makeStyles, Avatar, Button,TextField, Paper, Grid, Typography, Container, IconButton,InputAdornment } from '@material-ui/core';


const Home2 = ()=>{

    const classes=useStyles();
    
    return(
        <Container component="main" maxWidth="lg">
          <Paper className={classes.typo1}> 
              <Button>HAkdog</Button>
          </Paper>

        </Container>
    )
}
const useStyles = makeStyles((theme) => ({

    typo1: {
      marginTop: "100px",
      fontSize: "30px",
    }
  
  }))
export default Home2;