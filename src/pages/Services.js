import React, {useEffect, useState} from "react"
import { Container, Typography, makeStyles, Grid, Button, Link, Collapse } from "@material-ui/core";
import { COLORS } from '../Styles/colors';
import './Services.css';
import cbcImg from "../assets/Images/blood-test.png";
import physical from "../assets/Images/physical-therapy.png";
import urinalysis from "../assets/Images/urine.png";
import xrays from "../assets/Images/x-rays.png";
import fecalysis from "../assets/Images/stool-test.png";
import vid5 from "../videos/vid5.mp4";

const Home = () => {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    },[])
    
    return (
    <div>

        <div className="cover">
        <video src= {vid5} autoPlay loop muted></video>
        <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
        <Container component="main" maxWidth="lg">

            <Grid container spacing={2} direction="column">
                <Grid item>
                    <div className="home_title">
                    <Collapse 
            in ={checked}
            {... (checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
            >
                        <Typography className="typo1">LEARN MORE</Typography>
                        </Collapse>
                    </div>
                </Grid>
            </Grid>
        </Container>
        </Grid>
    </div>

        <Container component="main" maxWidth="lg">
        <div className="services">
        <Typography className={classes.typo8}>Santos-Del Carmen Medical Clinic offers the following tests:</Typography>
        
        <div className="service-left">
            <Grid 
            container
            direction="row"
            >
            <Grid item >
            <img src={physical} width="200px" height="200" alt="cbc" />
            </Grid>
            <Grid item>
                <Typography className={classes.typo3}>
                A physical examination is a common test your primary care physician (PCP) does to examine your general health. <br/>
                The checkup also provides you an opportunity to talk to them about any persistent pain or symptoms that you  <br/>
                are having or any other health concerns that you might have.
                </Typography>
            </Grid>
            </Grid>
        </div>

        <div className="service-right">
            <Grid 
            container
            direction="row"
            justifyContent= "flex-end"
            >
            <Grid item>
                <Typography className={classes.typo4}>
                A complete blood count (CBC) is a blood test used to evaluate your general health can identify a wide range of diseases, <br/>
                including anemia, infection and leukemia. A complete blood count test evaluates numerous components and properties of your blood.
                </Typography>
            </Grid>  
            <Grid item>
                <img src={cbcImg} width="200px" height="200" alt="cbc"/>
            </Grid>
            </Grid>
        </div>

        <div className="service-left">
            <Grid 
            container
            direction="row"
            >
            <Grid item>
                <img src={xrays} width="200px" height="200" alt="cbc"/>
            </Grid>
            <Grid item>
                <Typography className={classes.typo5}>
                An X-ray is a rapid, painless diagnostic that creates pictures of the structures within your body notably your bones. <br/>
                X-ray beams flow through your body, and they are absorbed in varied degrees depending on the density of the substance <br/>
                they pass through. Dense materials, such as bone and metal, show up as white on X-rays. The air in your lungs shows up as black. <br/>
                Fat and muscle appear as hues of gray.
                </Typography>
            </Grid>
            </Grid>
        </div>

        <div className="service-right">
            <Grid 
            container
            direction="row"
            justifyContent="flex-end"
            >
            <Grid item>
                <Typography className={classes.typo6}>
                A urinalysis is a urine examination. It's used to diagnose and treat a variety of illnesses, <br/>
                including urinary tract infections, kidney disease, and diabetes.
                </Typography>
            </Grid>  
            <Grid item>
                <img src={urinalysis} width="200px" height="200px" alt="cbc"/>
            </Grid>
            </Grid>
        </div>

        <div className="service-left">
            <Grid 
            container
            direction="row"
            >
            <Grid item>
                <img src={fecalysis} width="200px" height="200px" alt="cbc"/>
            </Grid>
            <Grid item>
                <Typography className={classes.typo7}>
                A fecalysis is a series of tests performed on a stool (feces) sample to aid in the diagnosis <br/>
                of digestive system disorders. Infection (from parasites, viruses, or bacteria), inadequate nutrition absorption, <br/>
                and cancer are examples of these disorders.
                </Typography>
            </Grid>
            </Grid>
        </div>
        </div>
        </Container>    
    </div>

    )
};

    const useStyles = makeStyles((theme) => ({



    typo2: {
        flexGrow: 1,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Pathway Gothic One',
        color: COLORS.BLACK,
    },

    typo3: {
        marginTop: '10px',
        marginLeft: '10px',
        marginBottom: '20px',
        fontSize: 15,
    },

    typo4: {
        marginTop: '50px',
        marginRight: '40px',
        fontSize: 15,
    },

    typo5: {
        marginTop: '10px',
        marginLeft: '20px',
        fontSize: 15,
    },

    typo6: {
        marginTop: '100px',
        marginRight: '10px',
        fontSize: 15,
    },

    typo7: {
        marginTop: '10px',
        marginBottom: '50px',
        marginLeft: '10px',
        fontSize: 15,
    },

    typo8: {
        flexGrow: 1,
        fontSize: 40,
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '25px',
        fontFamily: 'Pathway Gothic One',
        color: COLORS.BLACK,
    },

    button1: {
        background: COLORS.MAROON,
        color: COLORS.WHITE,
    },

    

  }))
export default Home;