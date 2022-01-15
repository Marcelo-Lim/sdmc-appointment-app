import Autocomplete from '@mui/material/Autocomplete';
import React, {useEffect, useState} from "react";
import { makeStyles, Typography, Collapse, Grid, TextField, Button, createTheme, ThemeProvider, Paper, Card, CardContent} from "@material-ui/core";
import './AboutUs.css';
import vid3 from "../videos/vid3.mp4";
import { COLORS } from "../Styles/colors";
import doc from "../assets/images/doctorsImages/doc.jpg"
import doc1 from "../assets/images/doctorsImages/doc1-crop.jpg"

const ContactUs = () => {
    const classes = useStyles();

    return(
    <div>
        <div className ="hero-container">
        <video src={vid3} autoPlay loop muted></video>
        
        <Typography className={classes.title}> ABOUT US </Typography>
        </div>
    
        <div className="wrapper">
            <h1 className="typography-title">Meet Our Doctors!</h1>
        </div>

        <div className="container">
            <div className="paper-container">
                <Paper className={classes.doctorpaper} elevation={6}>
                    <img className="aboutus-img" src={doc}></img>
                    <Typography className={classes.doctor}>Dr. Teodulo Santos</Typography>
                    <Typography className={classes.doctorspecial}>Specializes in Internal Medicine</Typography>
                </Paper>
                <Paper className={classes.doctorpaper} elevation={6}>
                    <img className="aboutus-img" src={doc1}></img>
                    <Typography className={classes.doctor}>Dr. Florence Del-Carmen Santos</Typography>
                    <Typography className={classes.doctorspecial}>Specializes in Family Medicine</Typography>
                </Paper>
                
            </div>
        </div>

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
        color: "white"
    },
    root: {
        '& .MuiFormControl-root': {
        width: '60%',
        margin: theme.spacing(4),
    }
    },
    paper:{
        borderRadius: "0.5rem",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    doctor: {
        fontSize: 45,
        fontFamily: "Pathway Gothic One",
        fontWeight: "bold",
    },

    doctorspecial: {
        fontSize: 30,
        fontFamily: "Pathway Gothic One",
        
    },

    doctorpaper: {
        width: "100%",
        height: "450px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "35px",
        marginTop: "35px",
        textAlign: "center",
        
    }

}));

export default ContactUs;