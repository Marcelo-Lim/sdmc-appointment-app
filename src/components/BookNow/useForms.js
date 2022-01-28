import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {createAppointment} from '../Connection/Action/Appointments'


const useForms = (callback,validateInfo)=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [values,setValues]=useState({
        firstName:'' || user?.result.firstName,
        lastName:'' || user?.result.lastName,
        middleName:'' || user?.result.middleName,
        suffix:'' || user?.result.suffix,
        contactNumber:'' || user?.result.contactNumber,
        email: '' ||user?.result.email,
        concerns:'',
        concernType: '',
        dateAndTime: new Date(),
        checked: '',
        doctorsName:''
    })

    const initialState = useState({
        firstName:'' || user?.result.firstName,
        lastName:'' || user?.result.lastName,
        middleName:'' || user?.result.middleName,
        suffix:'' || user?.result.suffix,
        contactNumber:'' || user?.result.contactNumber,
        email: '' ||user?.result.email,
        concerns:'',
        concernType: '',
        dateAndTime: new Date(),
        doctorsName:''
    
    })
    

    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        setErrors(validateInfo(values));
    }; 

  
    const handleSubmit = (e) => {
        e.preventDefault();
        //setErrors(validateInfo(values));
            console.log(values);
            setIsSubmit(true);
        
        dispatch(createAppointment(values,history));
        //values == initialState;
     };

     useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit) {
            callback();
           
        }
    },
    );

    return {handleChange, initialState,values, setValues,handleSubmit, errors};
}
export default useForms;