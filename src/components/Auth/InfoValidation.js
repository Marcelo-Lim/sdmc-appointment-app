export default function validateInfo(values) {
    let errors = {};

    if(!values.firstName.trim()){
        errors.firstName = 'First Name is required'
    }
    else if(values.firstName.length <1){
        errors.firstName='First Name is invalid'
    }
    if(!values.lastName.trim()){
        errors.lastName = 'Last Name is required'
    }
    else if(values.lastName.length <1){
        errors.lastName='Last Name is invalid'
    }
    if(!values.middleName.trim()){
        errors.middleName = 'Middle Name is required'
    }
    else if(values.middleName <2){
        errors.middleName='Middle is invalid'
    }
   
   
  if(values.suffix.length >3){
        errors.suffix='You entered invalid information'
    }

    
   /* if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    else if(!/^[A-Za-z][A-Za-z0-9]*(?:_+[A-Za-z0-9]+)*$/.test(values.username)){
      errors.username= 'Invalid username';
    }*/
  
    if (!values.email) {
      errors.email = 'Email required';
    } 
    else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(values.email)) {
      errors.email = 'Invalid input';
    }
    
    if (!values.contactNum){
        errors.contactNum = 'Contact number is required'
    }
    else if (!/^\d{11}$/.test(values.contactNum)){
        errors.contactNum = 'Please enter a valid contact number'
    }
  
    if (!values.password) {
      errors.password = 'Password is required';
    } 
    else if (values.password.length <= 8) {
      errors.password = 'Password needs to be 8 characters or more';
    }
  
    if (!values.repeatPassword) {
      errors.repeatPassword = 'Password is required';
    } 
    else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = 'Passwords do not match';
    }
    
    
    
  
    return errors;
  }