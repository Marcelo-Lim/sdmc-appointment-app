import React from "react";
import "./Profile.css";
import { Typography, makeStyles, Paper, Container, Grid, Card, CardContent, CardActionArea} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';

const Profile = () => {
const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper} elevation={6}>
                <Typography className={classes.typo1}>Welcome</Typography>
                <Typography className={classes.typo2}>Gender:</Typography>
                <Typography className={classes.typo2}>Contact number:</Typography>
                <Typography className={classes.typo2}>Email address:</Typography>
            </Paper>
            <Paper className={classes.paper2} variant="outlined" elevation={6}>
                <Typography className={classes.typo3}>My Appointments</Typography>
                <Container className={classes.container}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography className={classes.typo4}>Date</Typography>
                                        <Typography  className={classes.typo4}>Time</Typography>
                                        <Typography className={classes.typoIcon}>
                                            <CancelIcon sx={{ fontSize: 25 }}/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <EditIcon sx={{ fontSize: 25 }}/>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography className={classes.typo4}>Date</Typography>
                                        <Typography className={classes.typo4}>Time</Typography>
                                        <Typography className={classes.typoIcon}>
                                            <CancelIcon sx={{ fontSize: 25 }}/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <EditIcon sx={{ fontSize: 25 }}/>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography className={classes.typo4}>Date</Typography>
                                        <Typography className={classes.typo4}>Time</Typography>
                                        <Typography className={classes.typoIcon}>
                                            <CancelIcon sx={{ fontSize: 25 }}/>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <EditIcon sx={{ fontSize: 25 }}/>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
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