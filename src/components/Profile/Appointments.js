import React,{useEffect,useState} from 'react';

import { Typography, Paper, Container, Grid, Card, CardContent, CardActionArea} from "@material-ui/core";

import Profile  from '../../pages/Profile';



const Appointments = (props) =>{
   
   
    return(
        
            <h1>{console.log("Inutil")}
            <Profile {...props}/>
            </h1>
        )
    
}
export default Appointments