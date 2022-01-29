import React from 'react'
import { Grid, Box, Link, makeStyles, Typography} from "@material-ui/core";
import logo from "../../assets/images/SDMCLOGO1.png";
import "./footer.css";





const Footer = () => {
    const classes = useStyles();
    return (
        <footer >
            <Box
            px={{ xs: 2, sm: 2 }}
            py={{ xd: 5, sm: 5 }}
            borderTop= {1}
            borderBottom= {0}  
            bgcolor="white"
            color="black"
            
            >
                
                
                    <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                        
                    <Grid className={classes.logo} item xs={12} md>
                        
                        <img src={logo} alt="logo" />
                        
                    </Grid>
                        
                        <Grid item xs={12} sm={6} md >
                            <Box borderBottom={0}></Box>
                                <Box>
                                    <Typography>
                                        Address: #61, 7th Avenue, Baranggay Soccoro, Cubao, Quezon City
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        Tel No: (02) 7954-5168
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        santos.delcarmen.medical.clinic@gmail.com
                                    </Typography>
                                </Box>
                                
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md >
                            <Box borderBottom={0}> <b> Services </b> </Box>
                                
                                <Box>
                                    <Link href="/Services" color="inherit">
                                        Physical Exam
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/Services" color="inherit">
                                        CBC (Complete Blood Count)
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/Services" color="inherit">
                                        X-Ray
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm>
                            <Box borderBottom={0}> <br/> </Box>
                                <Box>
                                    <Link href="/Services" color="inherit">
                                        Urinalysis
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/Services" color="inherit">
                                        Fecalysis
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm>
                            <Box borderBottom={0}> <b> Clinic </b> </Box>
                                <Box>
                                    <Link href="/AboutUs" color="inherit">
                                        About us
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/ContactUs" color="inherit">
                                        Contact us
                                    </Link>
                                </Box>
                        </Grid>
                    </Grid>
                    
                
            </Box>
            <Grid 
            container="row"
            justifyContent="center"
            alignItems="center"
            >
            <Box textAlign="center" pt={{xs: 1, sm: 1 }} pb={{xs:5, sm: 0}}>

                <Typography className={classes.footerlinks}> <Link href="/PrivacyPolicy" color="inherit"> Privacy Statement    </Link> |  <Link href="/FAQs" color="inherit"> FAQs</Link></Typography>
                <Typography>  Santos Del-Carmen Medical Clinic &reg; {new Date().getFullYear()} </Typography>
            </Box>
            </Grid>
        </footer>
    )
};

const useStyles = makeStyles((theme) => ({

    button: {
        display: 'flex',
        flexDirection: 'column',
        background: 'red',
        color: 'white',
        marginBottom: '10px',
    },

    logo: {
        textAlign: 'center',
    },

    footerlinks: {
        fontSize: "18px",
    }
}))


export default Footer
