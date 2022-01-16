import React, { useState } from 'react';
import { Avatar, Button,TextField, Paper, Grid, Typography, Container, IconButton,InputAdornment } from '@material-ui/core';
import Input from '../components/Auth/Input';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from '../components/Auth/Style'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import validateInfo from '../components/Auth/InfoValidation';
import useForm from '../components/Auth/useForm';
const initialState = { firstName: '', lastName: '',suffix: '',middleName: '', email: '', password: '', confirmPassword: '',contactNumber: '' };

const Auth = ({submitForm})=>{
  const classes = useStyles();

   
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [isSignup, setIsSignup] = useState(false);
  
  
  
  const {handleChange, values,logins,setValues, handleSubmit, errors} = useForm(submitForm, validateInfo);
  
  const switchMode = () => {
    setValues(initialState)
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmits = (e)=>{
    e.preventDefault();
    if (isSignup){
        handleSubmit()
        
      }
      else{
        logins()
      }
}
 
  return(
    <Container component="main" maxWidth={isSignup?"md": "sm"}>
      <Paper className={classes.paper} elevation={3}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
      <Typography component="h1" variant="h5"> {isSignup ? 'Sign Up':'Sign In'}</Typography>
      <form className={classes.form} onSubmit={handleSubmits}>

        <Grid container spacing={2}>
          { isSignup && (
            <>
            <Grid item md={3}>
                  <TextField  name="lastName" label="Last Name" 
                        placeholder='Enter your Last Name'  autoFocus
                        value={values.lastName} onChange={handleChange} 
                        variant="outlined" error={Boolean(errors.lastName)} helperText={errors.lastName}/>
            </Grid>

            <Grid item md={3}>
                  <TextField  name="firstName" label="First Name"
                        placeholder='Enter your First Name' 
                        value={values.firstName} onChange={handleChange} 
                        variant="outlined" error={Boolean(errors.firstName)} helperText={errors.firstName}/>
            </Grid>
            <Grid item md={3}>
                  <TextField  name="middleName" label="Middle Name" 
                        placeholder='Enter your Middle Name'  
                        value={values.middleName} onChange={handleChange} 
                        variant="outlined" error={Boolean(errors.middleName)} helperText={errors.middleName}/>
            </Grid>

            <Grid item md={3}>
            <TextField  name="suffix" label="Suffix" 
            placeholder='Enter your Suffix'  
            value={values.suffix} onChange={handleChange} 
            variant="outlined" error={Boolean(errors.suffix)} helperText={errors.suffix}/>
            </Grid>
            <Grid item xs={12}> 
                <TextField  name="contactNumber" label="Contact Number" 
                    placeholder='Enter your Contact Number' 
                    value={values.contactNumber} onChange={handleChange} 
                    fullWidth  variant="outlined" error={Boolean(errors.contactNumber)} helperText={errors.contactNumber}/>
            </Grid>
            </>
          )}  
        
        {isSignup ? <>
           <Grid item xs={12}> 
                <TextField  name="email" label="Email" 
                    type="email" placeholder='Enter your email' 
                    value={values.email} onChange={handleChange} 
                    fullWidth  variant="outlined" error={Boolean(errors.email)} helperText={errors.email}/>
            </Grid>

            <Grid item xs={12}>
            <TextField  name="password" label="Password" type="password" placeholder='Enter your password'
                    value={values.password} onChange={handleChange} 
                    fullWidth  variant="outlined"  error={Boolean(errors.password)} helperText={errors.password}/>
            </Grid></> : 
            <> <Grid item xs={12}> 
                <TextField  name="email" label="Email" 
                    type="email" placeholder='Enter your email' 
                    value={values.email} onChange={handleChange} 
                    fullWidth  variant="outlined"/>
            </Grid>

            <Grid item xs={12}>
            <TextField  name="password" label="Password" type="password" placeholder='Enter your password'
                    value={values.password} onChange={handleChange} 
                    fullWidth  variant="outlined"  />
            </Grid></>}

            {isSignup &&<Grid item xs={12}>
            <TextField  name="repeatPassword" label="Repeat Password" placeholder='Enter your password'
                    value={values.repeatPassword} onChange={handleChange} 
                    fullWidth  variant="outlined"  error={Boolean(errors.repeatPassword)} helperText={errors.repeatPassword}
                    type={values.showPassword ? 'text' : 'password'} />
            </Grid>}

        </Grid>
        
        <Button fullWidth type="submit" variant="contained" color="primary" className={classes.submit}> {isSignup ? 'Sign Up':'Sign In'}</Button>
      
        <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
      
      </form>
      </Paper>
    </Container>
  )
}
export default Auth;