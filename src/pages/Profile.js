import React,{useState,useEffect} from "react";
import "./Profile.css";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import Autocomplete from '@mui/material/Autocomplete';
import { getAppointment } from "../components/Connection/Action/Appointments";
import { Typography, makeStyles,Button,
    Paper, Container, Grid, Card, 
    CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, TextField} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import Appointments from '../components/Profile/Appointments';
import CancelIcon from '@mui/icons-material/Cancel';
import Calendar from '../components/Calendar/Calendar'
import ConsultationType from "../components/BookNow/ConsultationType";
import {cancelAppointment,updateAppointment} from '../components/Connection/Action/Appointments'

        const options = ['Check-up',
        'Blood Test',
        'Ultrasound',
        'Complete Blood Count (CBC)',
        'Urinalysis'];

        const initialState={
            concerns:'',
            concernType:'',
            dateAndTime: new Date()
        }
const Profile = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [current,setCurrent] = useState(false);
   
  
    const [appointments,setAppointments] = useState([])
    
    const [open,setOpen] = useState(false);
    const [values,setValues]=useState(initialState);
    const [cancelOpen,setCancelOpen] = useState(false);

    const [appointmentStatus, setAppointmentStatus] = useState({ appointmentStatus: 'Cancelled'})

useEffect(function () {
    fetch("http://localhost:5000/appointment/appointmentsss")
    .then(resp=>resp.json())
    .then(resp=>setAppointments(resp))

})


const handleCancelOpen = (appointment) =>{
    setCancelOpen(true);
    setCurrent(appointment);

}
const handleCancelClose = () =>{
    setCancelOpen(false);
}
const handleOpen = (appointment) =>{
    setOpen(true);
    setCurrent(appointment)
}
const handleClose= () =>{
    setOpen(false);
}
const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('ewan ko na ')
//    dispatch(updateAppointment(current._id(...value)))

}
const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });


const [fullWidth] = React.useState(true);
const [maxWidth] = React.useState('sm');

const classes = useStyles();
    return (
        <div class="d-flex flex-column justify-content-center align-items-center">
            <Paper className={classes.paper + " col-11 mr-0 mt-5"} elevation={6}>
                <Typography className={classes.typo1}>Welcome {user?.result.lastName}, {user?.result.firstName}</Typography>
                <Typography className={classes.typo2}>Contact number: {user?.result.contactNumber}</Typography>
                <Typography className={classes.typo2}>Email address: {user?.result.email}</Typography>
            </Paper>
            <Paper className={classes.paper2 + " col-11 mr-0 mt-5"} variant="outlined" elevation={6}>
                <Typography className={classes.typo3}>My Appointments</Typography>
                
                    <Grid container>

            {appointments.map((appointment) => (
            

                    <Grid  item xs={12}>
                        {user?.result.email === appointment.email?
                    (
                    
                    <Card className={classes.card1 }>
                        <CardContent>
                        <Typography className={classes.typo4} >{appointment.concerns}</Typography>
                        <Typography className={classes.typo4} >{appointment.concernType}</Typography>
                            <Typography className={classes.typo4}>{moment(appointment.dateAndTime).format('D MMM YYYY')}</Typography>
                            <Typography className={classes.typo4} >{moment(appointment.dateAndTime).format('h:mm a')}</Typography>
                            <Typography className={classes.typo4}>{appointment.appointmentStatus}</Typography>
                            <Typography className={classes.typoIcon}>
                                {appointment.appointmentStatus === 'Pending'?<><CancelIcon sx={{ fontSize: 25 }} onClick={()=>handleCancelOpen(appointment)}/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <EditIcon sx={{ fontSize: 25 }} onClick={()=>handleOpen(appointment)}/></>:null}
                                
                            </Typography>           

                    
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">


                    <Container component="main" maxWidth="xl" > 
                    <DialogTitle>{"Edit appointment"}</DialogTitle>
                      {/* <form onSubmit={handleSubmit}>  */}
                        <Grid container direction="column" justifyContent="center" alignItems="center" >
                            <TextField   style = {{width: 380}} name="concerns" label="Concern" 
                            value={values.concerns}
                            variant="outlined"
                            onChange={handleChange}
                            required/>

                            <ConsultationType
                            value={values.concernType}
                            onChange={(evt, value) => setValues(prev=>({...prev,concernType:value}))}
                            />
                        <Calendar  style = {{width: 380}}
                        onChange={date=> setValues(prev =>({...prev, dateAndTime:date}))}
                        selected={values.dateAndTime}/>
                
                            <DialogActions>
                            <Button  variant='contained' color="primary" onClick={()=>dispatch(updateAppointment(current._id,{...values}))} >
                                Submit
                            </Button>
                            </DialogActions>
                        </Grid>
                      {/* </form>  */}
                        </Container>
                        </Dialog> 


                    <Dialog
                                open={cancelOpen}
                                onClose={handleCancelClose}
                                >


            <Container component ="main" maxWidth="lg"> 
                <DialogTitle id="form-dialog-title">
                    Do you really want to cancel this appoinment?</DialogTitle>

                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={() => dispatch(cancelAppointment(current._id,{...appointmentStatus}))}>Yes</Button>
                        <Button variant="contained" color="secondary"onClick={handleCancelClose}>No</Button>
                        
                    </DialogActions>
                    </Container>
                    </Dialog> 
                    </CardContent>
                </Card>


                    
                    ):  null }
            </Grid>
            



            ) )}
        {!appointments.length ?<Typography className={classes.typo4} >No record</Typography>: null }
            </Grid>
                        
                    
                
            </Paper>




        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    
    paper: {
        
        textAlign: "left"
    },

    typo1: {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "50px",
        paddingLeft: "20px",
        fontFamily: "Montserrat",
    },

    typo2: {
        fontSize: "15px",
        fontWeight: "100",
        marginTop: "5px",
        paddingLeft: "20px",
        fontFamily: "Montserrat",
    },

    paper2: {
        
        padding: "15px",
        textAlign: "center",
        height: "100%",
        
    },

    typo3: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
        marginBottom: "50px"
    },

    container: {
        marginBottom: "10px"
    },

    card: {
        textAlign: "center"
    },

    typoIcon: {
        marginTop: "20px"
    },

    typo4: {
        fontSize: "15px",
        fontWeight: "100",
        marginTop: "5px",
        fontFamily: "Montserrat",
    },

    card1: {
        width: "100%",
        height: "250px",
        marginBottom: "20px",
        marginLeft: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto"
    },
    
    grid: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },

    dialog: {
        height: "100%",
    }
}))

export default Profile;