import { Typography,  makeStyles } from "@material-ui/core";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { COLORS } from '../Styles/colors';
import "./FAQs.css";

const FAQs = () => {

    const classes = useStyles();
    return(
        <div className="accordion">
            <Typography className={classes.faqs}>FAQs</Typography>
            <Accordion className={classes.accordion}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography className={classes.questions}>Q. I cannot book an appointment. What is happening?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className={classes.answers}>
            First make sure that you have registered on the online booking platform, if you already registered and online booking does not work, it may be because appointments are fully booked. In this case, please select other available dates and time.
            </Typography>
        </AccordionDetails>
        </Accordion >
        <Accordion className={classes.accordion}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography className={classes.questions}>Q. What should I bring to the clinic after I book an appointment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className={classes.answers}>
                If your appointment is confirmed by the clinic, make sure that you have the copy of confirmation that is sent by the clinic through your given email.
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography className={classes.questions}>Q. Does the clinic offer COVID-19 test?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className={classes.answers}>
                Yes, the clinic offers COVID-19 antigen test that cost 900php.
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography className={classes.questions}>Q. What should I do if my appointment gets cancelled by the clinic?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className={classes.answers}>
                If this happens, you can book another appointment that matches your schedule anytime.
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography className={classes.questions}>Q. What should I do if I forgot my password?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className={classes.answers}>
                In this case, simply click the "Forgot password" button found in the login page. Then follow the instruction stated.
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography className={classes.questions}>Q. How long does it take for my appointment to get confirmed by the clinic?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className={classes.answers}>
                Your appointment will be confirmed as soon as the clinic approves, please wait for the appointment confirmation that will be sent to you through your provided email.
            </Typography>
        </AccordionDetails>
        </Accordion>


        </div>
    )
}

const useStyles = makeStyles((theme) => ({


    faqs: {
        flexGrow: 1,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        textAlign: "center",
        color: COLORS.BLACK,
    },

    questions: {
        marginTop: '10px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: 18,
    },

    answers: {
        fontFamily: 'Montserrat',
        fontSize: 15,
    },

    accordion: {
        marginTop: '10px',
        marginLeft: '125px',
        marginRight: '125px',
        marginBottom: '20px',
        fontFamily: 'Montserrat',
    },

    typo6: {
        marginTop: '100px',
        marginRight: '10px',
        fontFamily: 'Montserrat',
        fontSize: 15,
    },

    typo7: {
        marginTop: '10px',
        marginBottom: '50px',
        marginLeft: '10px',
        fontFamily: 'Montserrat',
        fontSize: 15,
    },

    typo8: {
        flexGrow: 1,
        fontSize: 30,
        textAlign: 'center',
        marginTop: '10px',
        fontFamily: 'Montserrat',
        color: COLORS.BLACK,
    },


    

  }))

export default FAQs;