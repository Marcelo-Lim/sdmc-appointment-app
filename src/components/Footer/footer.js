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
                
                
                    <Grid container  direction="row" justifyContent="space-evenly" alignItems="center" spacing={1}>
                        
                    <Grid item xs={12} md>
                        
                        <img src={logo} alt="logo"/>
                        
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
                                        CBC | Complete Blood Count
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        X-Ray
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        Urinalysis
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        Fecalysis
                                    </Typography>
                                </Box>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md >
                            <Box borderBottom={0}> <b> Services </b> </Box>
                                
                                <Box>
                                    <Typography>
                                        Physical Exam
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        CBC (Complete Blood Count)
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        X-Ray
                                    </Typography>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm>
                            <Box borderBottom={0}> <br/> </Box>
                                <Box>
                                    <Typography>
                                        Urinalysis
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        Fecalysis
                                    </Typography>
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
            justifyContent="space-between"
            alignItems="center"
            >
            <Box textAlign="flex-start" pt={{xs: 1, sm: 1 }} pb={{xs:5, sm: 0}}>
                        Santos Del-Carmen Medical Clinic &reg; {new Date().getFullYear()}
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

}))


export default Footer
