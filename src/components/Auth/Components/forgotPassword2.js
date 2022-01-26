import React,{useState} from 'react';
import {  Avatar, Button,TextField, Paper, Grid, Typography, Container, IconButton,InputAdornment } from '@material-ui/core';
import useStyles from '../Style'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { changepassword } from '../../Connection/Action/auth';
import { useDispatch } from 'react-redux';
import * as actionType from '../../Connection/Reducers/Constant/actionType'
import { useHistory, useLocation } from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const ForgotPasswords= () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profileForgot')));
    const classes = useStyles();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswords, setShowPasswords] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickRepeatPassword = () => setShowPasswords(!showPasswords);
    const [currentid,setCurrentid]= useState(user?.result._id)
    const dispatch = useDispatch();
    const  [values,setValues] = useState({
        password: '',
        repeatPassword:''

    })
    

    const handlePassword =(e) =>{
        e.preventDefault();
        console.log(values);
        console.log(currentid);
        dispatch(changepassword(currentid,{...values}))
        dispatch({type: actionType.EXIT})
         history.push('/Authentication');
        setUser(null);
     
       
    }
    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
       
    };
    
    return(
        <Container component="main" maxWidth='sm'>
            <Paper className={classes.paper}elevation={3}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5"> Forgot Password </Typography>
                <form className={classes.form} onSubmit={handlePassword}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField  
                        name="password" 
                        label="New Password" 
                        type="password" 
                        placeholder='Enter your new password'
                        fullWidth  
                        variant="outlined"  
                        onChange={handleChange}
                        value={values.password}
                        type={showPassword ? "text" : "password"} 
                        InputProps={{endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            )
                        }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  
                        name="repeatPassword" 
                        label="Repeat New Password" 
                        type="password" 
                        value={values.repeatPassword}
                        placeholder='Repeat new password'
                        fullWidth  
                        variant="outlined"  
                        type={showPasswords ? "text" : "password"} 
                        onChange={handleChange}
                        InputProps={{endAdornment: (
                             <InputAdornment position="end">
                                <IconButton
                                 aria-label="toggle password visibility"
                                 onClick={handleClickRepeatPassword}
                                  >
                                 {showPasswords ? <Visibility /> : <VisibilityOff />}
                                 </IconButton>
                             </InputAdornment>
                             )
                         }}
                        />
                    </Grid>
                    </Grid>
                    <Button fullWidth type="submit" variant="contained" color="primary" className={classes.submit}>Submit</Button>
                </form>
            </Paper>
        </Container>
        )
}



export default ForgotPasswords;