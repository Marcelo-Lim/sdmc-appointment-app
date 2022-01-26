import { Typography } from "@material-ui/core";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./FAQs.css";

const FAQs = () => {
    return(
        <div className="accordion">
            <Typography>FAQs</Typography>
            <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography>Q. I cannot book an appointment. What is happening?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            First make sure that you have registered on the online booking platform, if you already registered and online booking does not work, it may be because appointments are fully booked. In this case, please select other available dates and time.
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography>Q. What should I bring to the clinic after I book an appointment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                If your appointment is confirmed by the clinic, make sure that you have the copy of confirmation that is sent by the clinic through your given email.
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography>Q. Does the clinic offer COVID-19 test?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Yes, the clinic offers COVID-19 antigen test that cost 900php.
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography>Q. What should I do if my appointment gets cancelled by the clinic?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                If this happens, you can book another appointment that matches your schedule anytime.
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography>Q. What should I do if I forgot my password?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                In this case, simply click the "Forgot password" button found in the login page. Then follow the instruction stated.
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography>Q. How long does it take for my appointment to get confirmed by the clinic?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Your appointment will be confirmed as soon as the clinic approves, please wait for the appointment confirmation that will be sent to you through your provided email.
            </Typography>
        </AccordionDetails>
        </Accordion>


        </div>
    )
}

export default FAQs;