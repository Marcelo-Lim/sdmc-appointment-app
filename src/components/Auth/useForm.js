import { useState, useEffect } from "react";

const useForm = (callback, validateInfo) => {

    const [ values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        contactNum: '',
        firstName:'',
        lastName:'',
        middleName:'',
        suffix:'',
        showPassword: false,
    })
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        setErrors(validateInfo(values));
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmit(true);
        
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit) {
            callback();
        }
    },
    );

    return {handleChange, values, handleSubmit, errors};
};
export default useForm;