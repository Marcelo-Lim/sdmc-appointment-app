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
            borderBottom= {1}    
            bgcolor="white" 
            color="black"
            >
                <Container maxwidth="lg">
                    
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                        <Box textAlign="flex-start">
                            <img src={logo}/>
                        </Box>
                        <Grid item xs={12} sm={4}>
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
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Services</Box>
                                
                                <Box>
                                    <Link href="../pages/ContactUs.js" color="inherit">
                                        Physical Exam
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
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Clinic</Box>
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
                    </Grid>
                    
                </Container>
            </Box>
            <Box textAlign="flex-start" pt={{xs: 1, sm: 1 }} pb={{xs:5, sm: 0}}>
                        Santos-Del Carmen Medical Clinic &reg; {new Date().getFullYear()}
            </Box>
            <Box textAlign="flex-end" pt={{xs: 1, sm: 1 }} pb={{xs:5, sm: 0}}>
                        Contact us: 
            </Box>
        </footer>
    )
}

export default footer
