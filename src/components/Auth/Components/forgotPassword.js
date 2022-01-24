import React,{useState} from 'react';
import {  Avatar, Button,TextField, Paper, Grid, Typography, Container, IconButton,InputAdornment } from '@material-ui/core';
import useStyles from '../Style'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {forgotpassed} from '../../Connection/Action/auth';
import { useDispatch } from 'react-redux';
import ForgotPasswords from './forgotPassword2'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory, useLocation } from 'react-router-dom';
const ForgotPassword = () => {
      const [user, setUser] = useState(JSON.parse(localStorage.getItem('profileForgot')));
    const classes = useStyles();
    const history = useHistory();
    const location =useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswords, setShowPasswords] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickRepeatPassword = () => setShowPasswords(!showPasswords);
    const dispatch = useDispatch();
    const  [values,setValues] = useState({
        email: '',
     
    })

    const handleEmails =(e) =>{
        e.preventDefault();
        console.log(values);
        dispatch(forgotpassed(values,history));
        
        
    }
    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        //setErrors(validateInfo(values));
    };
  

    if(!user?.result){
    return(

     
        <Container component="main" maxWidth='sm'>
            <Paper className={classes.paper}elevation={3}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5"> Forgot Password </Typography>


             
                    <form className={classes.form} onSubmit={handleEmails}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}> 
                            <TextField  
                            //on
                            name="email" 
                            label="Enter your used email" 
                            type="email" 
                            placeholder='Enter your used email' 
                            fullWidth  
                            variant="outlined"
                            onChange={handleChange}
                            value={values.email}/>
                        </Grid>
                        </Grid>
                        <Button fullWidth type="submit" variant="contained" color="primary" className={classes.submit}>Next</Button>
                    </form>
            </Paper>
        </Container>
     
        )
    }
    else{
        
        return <ForgotPasswords/>
    }
}



export default ForgotPassword;