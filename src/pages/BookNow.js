import { Typography, makeStyles,TextField, Grid, Container, Checkbox, FormControlLabel, Button, Paper, 
  Dialog,DialogTitle, DialogContentText, DialogContent, DialogActions, } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import React,{useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from 'react-redux';
import { COLORS } from "../Styles/colors";
import useForms from '../components/BookNow/useForms';
import validateInfo from '../components/Auth/InfoValidation';
import "./BookNow.css";
import Calendar from "../components/Calendar/Calendar"
import ConsultationType from "../components/BookNow/ConsultationType";

// Mga Dinagdag
import { getAppointment2 } from "../components/Connection/Action/Appointments";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";


const BookNow = ({submitForm}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
 
  const {handleChange, values,setValues, handleSubmit, errors} = useForms(submitForm, validateInfo);

  const [disButton, setDisButton] = useState(false);
  const handleDisable=()=>{
    setDisButton(true)
  }

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
    
  };

  const handleClose = () => {
    setOpen(false);
    setDisButton(true);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


// From here
const appointment = dispatch(getAppointment2());

const [exclude, setExcludedTime] = useState({
  time: [],
  excludedTime: null,
  go: true,
})

const [doctor, setData] = useState([])
const doctorLength = doctor.length - 1;

useEffect(()=>{
    fetch('https://sdmc-clinic.herokuapp.com/doctor/doctors/data')
    .then(resp => resp.json())
    .then(resp => setData(resp))
})
  

appointment.then( (data) => {
  
  processExcludedTime(data)

}).catch( (error) => {
  console.log(error)
})

const processExcludedTime = (data) => {
    
  var length = data.length
  var map = new Map()
  var excludedTime = new Map()

  for(let i = 0; i < length ; i++){

    var status = data[i]["appointmentStatus"]
    if(status == "Approved" || status == "Pending"){

      var appointDate = new Date(data[i]['dateAndTime'])
      var date = appointDate.toDateString()

      if(map.get(date) == null){
        map.set(date, new Map())
      }

      var hours = appointDate.getHours()
      var minute = appointDate.getMinutes()

      var time = hours + ":" + minute

      // || map.get(date).get(time) < totalDoctor
      if(map.get(date).get(time) == null ){
        map.get(date).set(time, 1)
      }
      else if(map.get(date).get(time) < doctorLength){
        var num = map.get(date).get(time) + 1
        map.get(date).set(time, num)
      }
      else if (map.get(date).get(time) == doctorLength){
        var arr = []

        if(excludedTime.get(date) == null){
          excludedTime.set(date, [setHours(setMinutes(new Date(), minute), hours)])
        }
        else{
          arr = excludedTime.get(date)
          arr.push(setHours(setMinutes(new Date(), minute), hours))
          excludedTime.set(date, arr)
        }
        map.get(date).set(time, doctorLength + 1)
      }
    }
  }
  if( exclude.go ){
    date = new Date(date)
    var datDay = date.toDateString()

    var remove = []
    if( excludedTime.get(datDay) != null){
      remove = excludedTime.get(datDay)
    }
    
    setExcludedTime(prev =>({...prev, excludedTime:excludedTime, time:remove, go:false}))
  }
  else{
    setExcludedTime(prev =>({...prev, excludedTime:excludedTime}))
  }
}

const dateFunc = (date) =>{
  date = new Date(date)
  var datDay = date.toDateString()
  var excludedTime = exclude.excludedTime

  var remove = []
  if( excludedTime.get(datDay) != null){
    remove = excludedTime.get(datDay)
  }

  setExcludedTime(prev =>({...prev, time:remove}))
  setValues(prev =>({...prev, dateAndTime:date}))
}
// to here


  return (
    <div className="hero-container1">
        <div className="hero">
        <Typography className={classes.typo1}> Appointment Booking </Typography>
        </div>
    
        <form className={classes.root} onSubmit={handleSubmit}>
          <Grid  container  alignItems="flex-start">
            <Grid item xs={12} sm={5} container  direction="row" justifyContent="flex-start" alignItems="center">
              <TextField 
                
                className={classes.inputText}
                name="lastName"
                label="Last Name"
                variant="standard"
                style = {{width: 150}}
                value={ values.lastName}
                
                onChange={handleChange}
                //enabled={Boolean(false)}
                
              /> 
              <TextField 
                
                className={classes.inputText}
                name="firstName"
                id="outlined-required"
                label="First Name"
                variant="standard"
                style = {{width: 150}}
                value={values.firstName}
                onChange={handleChange}
              />
              <TextField 
                
                className={classes.inputText}
                name="middleName"
                label="Middle Initial"
                variant="standard"
                style = {{width: 120}}
                value={values.middleName}
                onChange={handleChange}
              />
              <TextField 
                className={classes.inputText}
                name="suffx"
                label="Suffix"
                variant="standard"
                style = {{width: 80}}
                value={values.suffix}
                onChange={handleChange}
              />
              
              <TextField 
                
                className={classes.inputText}
                name="email"
                label="Email Address"
                variant="standard"
                style = {{width: 620}}
                value={values.email}
                onChange={handleChange}
              /> 
            
              <TextField 
                
                className={classes.inputText}
                name="contactNumber"
                label="Contact Number"
                variant="standard"
                style = {{width: 620}}
                value={values.contactNumber}
                onChange={handleChange}
              /> 
              
                          
              <TextField 
                
                className={classes.inputText}
                name="concerns"
                label="Concern"
                variant="standard"
                multiline
                maxRows={4}
                style = {{width: 620}} 
                value={values.concerns}
                
                onChange={handleChange}
              /> 

              <ConsultationType

                  inputValue={values.concernType}
                  onInputChange={(evt, value) => setValues(prev=>({...prev,concernType:value}))}
                />

              </Grid>
              <Grid item xs={12} sm={6} container direction="column" justifyContent="center" alignItems="center"> 

                <h1 className={classes.typo2}> Select Date and Time </h1>
                <div className="calendarwidth">

                <Calendar onChange={date => dateFunc(date)} selected={values.dateAndTime} excludedTime={exclude.time}/>
                </div>
              </Grid>

              <Grid item xs={12} sm={5} container direction="column" justifyContent="flex-start" alignItems="flex-start">
              
              
              <FormControlLabel control={<Checkbox color="primary"/>} label="By confirming this, you agree to our Terms of Service and Privacy Policy, and confirm that you are at least 18 years old." className={classes.checkbox} onClick={handleClickOpen('paper')}/>
              <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                  >
                    <DialogTitle id="scroll-dialog-title"> Terms and Conditions </DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                      <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                      >
                          <h1>Terms and Conditions</h1>
                        <p>Last updated: January 12, 2022</p>
                        <h3>Table of Contents </h3>
                        <ol>
                        <li>
                        AGREEMENT TO TERMS
                        </li>
                        <li>
                        USER REPRESENTATIONS
                        </li>
                        <li>
                        USER REGISTRATION
                        </li>
                        <li>
                        PROHIBITED ACTIVITIES
                        </li>
                        <li>
                        SUBMISSIONS - FEEDBACK
                        </li>
                        <li>
                        SITE MANAGEMENT
                        </li>
                        <li>
                        PRIVACY POLICY
                        </li>
                        <li>
                        TERM AND TERMINATION
                        </li>
                        <li>
                        MODIFICATIONS AND INTERRUPTIONS
                        </li>
                        <li>
                        GOVERNING LAW
                        </li>
                        <li>
                        CORRECTIONS
                        </li>
                        <li>
                        DISCLAIMER
                        </li>
                        <li>
                        USER DATA
                        </li>
                        <li>
                        MISCELLANEOUS
                        </li>
                        <li>
                        CONTACT US
                        </li>
                        </ol>
                        <h1>1.	AGREEMENT TO TERMS</h1>
                        <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (you) and Santos-Del Carmen Medical Clinic, doing business as SDMC ("'SDMC," "we us," 0r "our), concerning your access to and use of the https://santos-delcamen-medical-clinic.netlify.app website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). We are registered in the Philippines and have our registered office at 61 7th Avenue, Baranggay Socorro, Cubao, Quezon City, 1109. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOTAGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY. 
                        Supplemental terms and conditions or documents that may be posted on the site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms or Use, and you waive any right to receive specific notice of each such change Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date Such revised terms Of Use are posted. 
                        The information provided on the site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such Jurisdiction or Country. Accordingly, those persons who choose to access the site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                        </p>
                        <h1>2.	USER REPRESENTATIONS</h1>
                        <p>By using the site, you represent and warrant that (1) all registration information you submit will be true, accurate, current, and complete, (2) you will maintain the accuracy of such information and promptly update such registration information as necessary: (3) you have the legal capacity and you agree to comply with these Terms of Use, (4) you are not under the age of 18 (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site. (6) you will not access the Site through automated or non-human means whether through a bot script, or otherwise (7) you will not use the Sie for any illegal or unauthorized purpose, and (8) your use of the Site will not violate any applicable law or regulation. If you provide any information that is untrue, inaccurate not current or incomplete we have the right to suspend or terminate your account and refuse any and all Current or future use of the site (or any portion thereof)</p>
                        <h1>3.	USER REGISTRATION</h1>
                        <p>You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select is we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
                        <h1>4.	PROHIBITED ACTIVITIES </h1>
                        <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.
                        As a user off the Site, you agree not to:
                        </p>
                        <ul>
                        <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                        <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords</li>
                        <li>Circumvent, disable, or otherwise interfere with security-related features of the Site including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein. </li>
                        <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site Use any information obtained from the Site in order to harass. abuse, or harm another person. </li>
                        <li>Make improper use of our support services or submit false reports of abuse or misconduct.  </li>
                        <li>Use the site in a manner inconsistent with any applicable laws or regulations. </li>
                        <li>Engage in unauthorized framing of or linking to the Site. </li>
                        <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material. including Excessive use of capital letters and spamming Continuous posting of repetitive text), that interferes with any party’s uninterrupted use of the Ste or modifies. Impairs disrupts alerts. Or interferes with the use, features, functions, operation, or maintenance of the Site. </li>
                        <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools. </li>
                        <li>Delete the copyright or other proprietary rights notice from any Content. </li>
                        <li>Attempt to Impersonate another user or person or use the username of another user. </li>
                        <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation. clear graphics interchange formats (“gifs"), 1x1pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or "passive collection mechanisms" or "pcms").</li>
                        <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site. </li>
                        <li>Harass, annoy., intimidate, or threaten any of our employees or doctors engaged in providing any portion of the Site to you. </li>
                        <li>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site </li>
                        <li>Copy or adapt the Site's software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. </li>
                        <li>Except as permitted by applicable law decipher decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site. </li>
                        <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper or offline reader that accesses the Site, or using launching any unauthorized script or other software </li>
                        <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses o users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences </li>
                        <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the content for any revenue-generating endeavour or any commercial enterprise </li>
                        </ul>
                        <h1> 5.	SUBMISSIONS – FEEDBACK </h1>
                        <p>You acknowledge and agree that any questions, comments, Suggestions, Ideas,
                        feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
                        </p>
                        <h1> 6.	SITE MANAGEMENT</h1>
                        <p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use. (2) take appropriate legal action against anyone who, in our sole discretion, violates the. law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities, (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your feedback or any portion thereof, and (4) otherwise manage the Site in a manner designed to protect our nights and property and to facilitate the proper functioning of the Site</p>
                        <h1> 7.	PRIVACY POLICY </h1>
                        <p>We care about data privacy and security. Please review our Privacy
                        Policy: https://santos-delcarmen-medical-clinic.netlify.app/ By using the Site, you
                        agree to be bound by Our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site is hosted in the United States. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you agree to have your data transferred to and processed in the United States.
                        </p>
                        <h1> 8.	TERM AND TERMINATION</h1>
                        <p>These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE
                        RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE
                        OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING
                        BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR
                        FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                        REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS
                        OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
                        YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT
                        WTHOUT WARNING, IN OUR SOLE DISCRETION.
                        </p>
                        <h1> 9.	MODIFICATIONS AND INTERRUPTIONS </h1>
                        <p>We reserve the right to change, modify, or remove the contents or the site at any Time or for any reason at our sole discretion without notice. However, we have no
                        obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third-party tor any modification, price change, suspension, or discontinuance of the Site.
                        We cannot guarantee the Site will be available at all times. We may experience
                        hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays. or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.
                        </p>
                        <h1> 10. GOVERNING LAW </h1>
                        <p> These Terms shall be governed by and defined following the laws of the Philippines. Santos-Del Carmen Medical Clinic and yourself irrevocably consent that the courts of the Philippines shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms. </p>
                        <h1> 11. CORRECTIONS </h1>
                        <p> There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice. </p>
                        <h1> 12. DISCLAIMER </h1>
                        <p> THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE. (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN. (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENTAND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED. TRANSMITTED OR OTHERWISE MADE AVAILABLE VIA THE SITE WE DO NOT WARRANT, ENDORSE GUARANTEE OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE ANY HYPERLINKED WEBSITE OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVDERS OF PRODUCTS OR SERVICES AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDUM OR IN ANY ENVIRONMENT YOU SHOULD USE YOUR BEST JUDCMENTAND EXERCSE CAUTION WHERE APPROPRIATE. </p>
                        <h1> 13. USER DATA </h1>
                        <p> We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data. </p>
                        <h1> 14. MISCELLANEOUS </h1>
                        <p> In the event that your appointment is cancelled, you can opt for a re-schedule, the same applies for when the doctor cancels your appointment. </p>
                        <h1> 15. CONTACT US </h1>
                        <p> In order to resolve a complaint regarding the Site or to receive information regarding the use of the Site, please contact us at:
                        Santos-Del Carmen Medical Clinic
                        61 7th Avenue, Baranggay Socorro, Cubao, Quezon City 1109
                        Philippines
                        Phone: (02) 7954-5166
                        sdmccubao@gmail.com 
                        </p>

                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button  variant="contained" onClick={handleClose}> I understand</Button>
                    </DialogActions>
                  </Dialog>

              <Button  type="submit" variant="contained" className={classes.button} color="primary" disabled={!disButton}>Save</Button> 
                  
              </Grid>

              {/* <Grid item xs={12} sm={6} container direction="row" justifyContent="flex-start" alignItems="flex-start">
                
              <Paper className={classes.doctorpaper} elevation={1}>
                    <img className="aboutus-img" src={doc}></img>
                    <Typography className={classes.doctor}>Dr. Teodulo Santos</Typography>
                    <Typography className={classes.doctorspecial}>Specializes in Internal Medicine</Typography>
                </Paper>
                <Paper className={classes.doctorpaper} elevation={1}>
                    <img className="aboutus-img" src={doc1}></img>
                    <Typography className={classes.doctor}>Dr. Florence Del-Carmen Santos</Typography>
                    <Typography className={classes.doctorspecial}>Specializes in Family Medicine</Typography>
                </Paper>

              </Grid> */}
              </Grid>
            </form>
          </div>
  )
};


const consultation = [
  {label: "Check-up"},
  {label: "Blood Test"},
  {label: "Ultrasound"},
  {label: "Complete Blood Count (CBC)"},
  {label: "Urinalysis"},
]

const useStyles = makeStyles((theme) => ({
  
  root: {
    '& .MuiFormControl-root': {
      width: '70%',
      margin: theme.spacing(2.5),

    }
  },

  typo1: {
    marginTop: "25px",
    marginBottom: "25px",
    textAlign:"center",
    fontSize: "30px",
    fontWeight: "bold",
  },

  typo2: {
    textAlign:"center",
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "150px",
    
  },

  inputText: {
    
    
  },

  combobox: {
    width: '100%',
  },

  checkbox: {
    marginTop: "50px",
    marginLeft: "110px",
    marginBottom: "40px",
    width: "50%",
  },

  button: {
    marginLeft: "150px",
    width: "35%",
    marginBottom: "150px",
    backgroundColor: COLORS.BLUE,
  },

  doctor: {
    fontSize: 25,
    fontFamily: "Montserrat",
    fontWeight: "bold",
},

doctorspecial: {
    fontSize: 15,
    fontFamily: "Montserrat",
    
},

doctorpaper: {
    width: "45%",
    height: "225px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "35px",
    marginTop: "35px",
    textAlign: "center",
    marginLeft: "20px",
}

}))

export default BookNow;