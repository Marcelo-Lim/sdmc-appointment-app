import {useState, useEffect,useCallback} from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

const useForms = (callback,validateInfo)=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [startDate,setStartDate]= useState(new Date());


    const onChange = (date)=>{
        setStartDate(date)
        console.log(startDate)
    };
    const rest = startDate.getFullYear();

    const [values,setValues]=useState({
        firstName:'' || user?.result.firstName,
        lastName:'' || user?.result.lastName,
        middleName:'' || user?.result.middleName,
        suffix:'' || user?.result.suffix,
        contactNumber:'' || user?.result.contactNumber,
        email: '' ||user?.result.email,
        concern:'',
        consultType: '',
        dateAndTime: startDate
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
  
    const handleSubmit = () => {
      
          //console.log(values);
          console.log(values.dateAndTime)
     
       
 
         
     };
    return {onChange,handleChange,startDate,setStartDate, values, setValues,handleSubmit, errors};
}
export default useForms;