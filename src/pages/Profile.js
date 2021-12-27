import React,{useState,useEffect} from "react";
import "./Profile.css";
import moment from 'moment';
import { useDispatch } from "react-redux";
import { getAppointment } from "../components/Connection/Action/appointments";
import { Typography, makeStyles,Button,
     Paper, Container, Grid, Card, 
     CircularProgress,CardContent, CardActionArea,
    Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import Appointments from '../components/Profile/Appointments';
import CancelIcon from '@mui/icons-material/Cancel';
const Profile = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [appointments,setAppointments] = useState([])
   const [currentId,setCurrentId] = useState(0);
    const [open,setOpen] = useState(false);

   useEffect(function () {
    fetch("http://localhost:5000/appointment/appointmentsss")
    .then(resp=>resp.json())
    .then(resp=>setAppointments(resp))
  
})
const handleOpen = () =>{
    setOpen(true);
}
const handleClose= () =>{
    setOpen(false);
}

const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper} elevation={6}>
                <Typography className={classes.typo1}>Welcome {user?.result.lastName}, {user?.result.firstName}</Typography>
               
                <Typography className={classes.typo2}>Contact number: {user?.result.contactNumber}</Typography>
                <Typography className={classes.typo2}>Email address: {user?.result.email}</Typography>
            </Paper>
            <Paper className={classes.paper2} variant="outlined" elevation={6}>
                <Typography className={classes.typo3}>My Appointments</Typography>
                <Container className={classes.container}>
                    <Grid container spacing={2}>
                  
           
           {appointments.map((appointment) => (
              
                   <Grid container alignItems="stretch" spacing={3}>
                       {user?.result.email === appointment.email?
                       (
                           <Grid key={appointment._id} item xs={12} sm={6} md={6}>
                       <Card>
                       <CardContent>
                       <Typography className={classes.typo4} >{appointment.concerns}</Typography>
                       <Typography className={classes.typo4} >{appointment.concernType}</Typography>
                           <Typography className={classes.typo4}>{moment(appointment.dateAndTime).format('D MMM YYYY')}</Typography>
                           <Typography className={classes.typo4} >{moment(appointment.dateAndTime).format('h:mm a')}</Typography>
                           <Typography>{appointment.status}</Typography>
                           <Typography className={classes.typoIcon}>
                               <CancelIcon sx={{ fontSize: 25 }} onClick={()=>console.log("Cancel")}/>&nbsp;&nbsp;&nbsp;&nbsp;
                               <EditIcon sx={{ fontSize: 25 }} onClick={ handleOpen}/>
                           </Typography>           
                      
                         <Dialog
                                open={open}
                                onClose={handleClose}
                                >
                         <DialogTitle>{"Congratulations"}</DialogTitle>
                         <Typography >{appointment.concernType}</Typography>
     
                             
                         <DialogActions>
                     <Button onClick={handleClose} color="primary">
                     Done
                     </Button>
     
                     </DialogActions>
                     </Dialog> 
                     </CardContent>
                   </Card>
                  
                   </Grid>
                    
                       ):  null }
                      
               </Grid>
              


               ) )}
         {!appointments.length ?<Typography className={classes.typo4} >No record</Typography>: null }
            </Grid>
                        
                    
                </Container>
            </Paper>

                     


        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    
    paper: {
        marginTop: "50px",
        marginLeft: "59px",
        marginRight: "50px",
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
        marginTop: "40px",
        marginBottom: "100px",
        marginLeft: "100px",
        marginRight: "100px",
        textAlign: "center"
    },

    typo3: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
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
    }
}))

export default Profile;