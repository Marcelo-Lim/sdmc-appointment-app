import React from "react";
import emailjs from 'emailjs-com';
import { Typography, makeStyles, Paper } from "@material-ui/core";
import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import "./Monitoring.css";
import appointments from '../assets/test-data/today-appointments';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Monitoring = () => {
const classes = useStyles();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_lusftxg', 
        'template_32kjbpm', 
        e.target, 
        'user_88fZhcEyqDDz9scokFOrs' 
    ).then(res=>{
        console.log(res);
    }).catch(err=> console.log(err));
}

    return (
        <div>
            <Paper className={classes.paper1}>
                <Typography className={classes.typo1}>Appointments</Typography>
                <div className="add-appointment">
                    <Typography classname={classes.typo2}>
                        <AddBoxIcon sx={{ fontSize: 25 }}/>Add Appointment
                    </Typography>
                </div>
                <Scheduler data={appointments} height={500}>
                    <WeekView startDayHour={8.5} endDayHour={17.5} />
                    <Appointments />
                </Scheduler>
            </Paper>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({

    paper1: {
        marginTop: "50px",
        marginBottom: "100px",
        marginLeft: "50px",
        marginRight: "50px",
        textAlign: "center"
    },

    typo1: {
        fontSize: "30px",
        marginBottom: "10px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    },

    typo2: {
        fontSize: "10px",
    },

}))
export default Monitoring;