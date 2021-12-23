import React,{useEffect,useState} from 'react';

import { Typography, Paper, Container, Grid, Card, CardContent, CardActionArea} from "@material-ui/core";



import ProfileDesignAppointment from './ProfileDesignAppoinment'

const Appointments = () =>{
   
    const [appointments,setAppointments] = useState([])

    useEffect(function () {
        fetch("http://localhost:5000/appointment/appointmentsss/")
        .then(resp=>resp.json())
        .then(resp=>setAppointments(resp))
      
    })
    return(
        
            <Grid container alignItems="strech" spacing={3}>
           
                {appointments.map((appointment) => (
                     <Grid key={appointment._id} item xs={12} sm={6} md={6}>
                          <Card>
                            <CardContent>
                                <Typography>{appointments.email}</Typography>
                                <Typography >{appointments.firstName}</Typography>
                                                    
                            </CardContent>
                        
                        </Card>
                   </Grid>
                ) )}
              
                </Grid>
        )
    
}
export default Appointments