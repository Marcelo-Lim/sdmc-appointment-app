import React from "react";
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
        marginTop: "100px",
        marginBottom: "100px",
        marginLeft: "50px",
        marginRight: "50px",
        textAlign: "center"
    },

    typo1: {
        fontSize: "30px",
        marginBottom: "10px",
        fontWeight: "bold"
    },

    typo2: {
        fontSize: "10px",
    },

}))
export default Monitoring;