import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { Typography, makeStyles, Paper, Container, Grid, Card, CardContent, CardActionArea} from "@material-ui/core";


const ProfileDesignAppoinment = ({appointments}) =>{
    const dispatch = useDispatch();


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return(
        <Card>
            <CardContent>
                <Typography>{appointments.email}</Typography>
                <Typography >{appointments.firstName}</Typography>
                                    
            </CardContent>
        </Card>
    )

}


export default ProfileDesignAppoinment;