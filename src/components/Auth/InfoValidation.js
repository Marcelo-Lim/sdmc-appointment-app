export default function validateInfo(values) {
    let errors = {};
    let isValid = true;
    

    if(!values.lastName) {
      errors.lastName = "Last Name Required";
  }else if(!/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/i.test(values.lastName)) {
      errors.lastName = "Not a Proper Name";
  }

  if(!values.firstName){
      errors.firstName = "First Name Required";
  }else if(!/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/i.test(values.firstName)) {
      errors.firstName = "Not a Proper Name";
  }


  if(!values.middleName){
      errors.middleName = "Middle Name Required";
  }else if(!/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/i.test(values.middleName)) {
      errors.middleName = "Not a Proper Name";
  }

  if(values.suffix.length > 3){
        errors.suffix='You entered invalid information'
    } else if(!/^[a-zA-Z]*$/i.test(values.suffix)) {
      errors.suffix = "Not a Suffix";
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
    else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) {
      errors.email = 'Invalid input';
    }
    

    if(!values.contactNumber){
      errors.contactNumber = "Contact Number Required";
    }else if (!/^(09|\+639)\d{9}$/i.test(values.contactNumber)){
      errors.contactNumber = "Please enter a valid Contact Number";
    }


  
    if (!values.password) {
      errors.password = 'Password is required';
    } 
    else if (values.password.length < 8) {
      errors.password = 'Password needs to be 8 characters or more';
    }
  
    if (!values.repeatPassword && values.repeatPassword !== values.password ) {
      errors.repeatPassword = 'Password do not match';
    } 

    if (typeof values.password !== "undefined" && typeof values.repeatPassword !== "undefined") {
          
      if (values.repeatPassword != values.password) {
        isValid = false;
        errors["repeatPassword"] = "Passwords do not match.";
      }
    } 
   
  
    
    
    
  
    return errors;
  }