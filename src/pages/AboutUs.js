import Autocomplete from '@mui/material/Autocomplete';
import React, {useEffect, useState} from "react";
import { makeStyles, Typography, Collapse, Grid, TextField, Button, createTheme, ThemeProvider, Paper, Card, CardContent} from "@material-ui/core";
import './AboutUs.css';
import vid2 from "../videos/vid2.mp4";
import { COLORS } from "../Styles/colors";
import doc from "../assets/images/doctorsImages/doc.jpg"
import doc1 from "../assets/images/doctorsImages/doc1-crop.jpg"
import ClinicLocation from "../components/Map/ClinicLocation";

const ContactUs = () => {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    },[])

    return(
    <div>
        <div className ="hero-container">
        <video src={vid2} autoPlay loop muted></video>
        
        <Collapse 
            in ={checked}
            {... (checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
        >
        <Typography className={classes.title}> ABOUT US</Typography>
        </Collapse>
        </div>
        
        <div className="wrapper">
            <h1 className="typography-title">Meet our Owners/Doctors</h1>
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        fontWeight: "bold",
        fontSize: 75,
        fontFamily: "Montserrat",
        color: "#810000",
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
        fontFamily: "Montserrat",
        fontWeight: "bold",
    },

    doctorspecial: {
        fontSize: 30,
        fontFamily: "Montserrat",
        
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