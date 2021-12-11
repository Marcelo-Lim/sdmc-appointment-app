import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useForms from '../BookNow/useForms';
import validateInfo from '../Auth/InfoValidation';

function Calendar({submitForm}) {
//const [startDate, setStartDate] = useState(new Date());

    const { onChange,startDate,setStartDate,values,setValues, handleSubmit, errors} = useForms(submitForm, validateInfo);



    return (
    
        <div>
        <DatePicker 
            selected={startDate} 
            onChange={onChange} 
            showTimeSelect
            isClearable={true}
            dateFormat="MMMM d, yyyy h:mm aa"
            value={startDate}
            />
            {console.log(startDate)}
           
            </div>
    ); 
}


export default Calendar;