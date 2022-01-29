import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { signin,signup } from "../Connection/Action/auth";

const useForm = (callback, validateInfo) => {

    

    const [ values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        contactNumber: '',
        firstName:'',
        lastName:'',
        middleName:'',
        suffix:'',
       
    })
    const [errors, setErrors] = useState({});
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    };
     
    const handleSubmit = () => {
       // e.preventDefault();
        

       setErrors(validateInfo(values));
     
        // setIsSubmit(true);
         console.log(values);
         dispatch(signup(values,history))


        
    };
    const logins =()=>{
        console.log(values)
        dispatch(signin(values,history))
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit) {
            callback();
        }
    },
    );

    return {handleChange,logins, values, setValues,handleSubmit, errors};
};
export default useForm;