import React from 'react'
import { Container, Grid, Box, Link,} from "@material-ui/core";
import logo from "../../assets/Images/SDMCLOGO1.png";
import "./footer.css";


const footer = () => {
    return (
        <footer>
            <Box
            px={{ xs: 3, sm: 5 }}
            py={{ xd: 5, sm: 5 }}
            borderTop= {0}    
            bgcolor="lightgray" 
            color="black"
            >
                <Container maxwidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Help</Box>
                                <Box>
                                    <Link href="../pages/ContactUs.js" color="inherit">
                                        Contact
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Support
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Privacy
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Location</Box>
                                <Box>
                                    <h7 color="inherit">
                                        61 7th Avenue Cubao, Quezon City
                                    </h7>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Legal</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Privacy Policy
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Terms and Conditions
                                    </Link>
                                </Box>
                                
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>About</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        About Santos-Del Carmen Medical Clinic
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Careers
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Team
                                    </Link>
                                </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center">
                        <img src={logo}/>
                    </Box>
                    <Box textAlign="center" pt={{xs: 5, sm: 5 }} pb={{xs:5, sm: 0}}>
                        Santos-Del Carmen Medical Clinic &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default footer
