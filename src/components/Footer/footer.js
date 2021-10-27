import React from 'react'
import { Container, Grid, Box, Link,} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import logo from "../../assets/images/SDMCLOGO1.png";
import "./footer.css";




const footer = () => {
    
    return (
        <footer >
            <Box
            px={{ xs: 3, sm: 5 }}
            py={{ xd: 5, sm: 5 }}
            borderTop= {1}
            borderBottom= {0}  
            bgcolor="white"
            color="black"
            overflow="auto"
            
            >
                
                
                    <Grid container  direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                        
                    <Grid item xs={12} sm={2}>
                        
                        <img src={logo} alt="logo"/>
                        
                    </Grid>
                        
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={0}></Box>
                                <Box>
                                    <Link href="../pages/ContactUs.js" color="inherit">
                                        Address: #61, 7th Avenue, Baranggay Soccoro, Cubao, Quezon City
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        CBC | Complete Blood Count
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        X-Ray
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Urinalysis
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Fecalysis
                                    </Link>
                                </Box>
                        </Grid>
                        
                        <Grid item xs={12} sm={2}>
                            <Box borderBottom={0}> <b> Services </b> </Box>
                                
                                <Box>
                                    <Link href="../pages/ContactUs.js" color="inherit">
                                        Physical Exam
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        CBC (Complete Blood Count)
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        X-Ray
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Box borderBottom={0}> <br/> </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Urinalysis
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Fecalysis
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Box borderBottom={0}> <b> Clinic </b> </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        About us
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Contact us
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Box>
                                <Button variant="contained" color="error"> Register </Button>
                                <Button variant="outlined" color="secondary"> Log in </Button>
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
            <Box className="footerContact" pt={{xs: 1, sm: 1 }} pb={{xs:5, sm: 0}}>
                        Contact us: 
            </Box>
            </Grid>
        </footer>
    )
}


export default footer
