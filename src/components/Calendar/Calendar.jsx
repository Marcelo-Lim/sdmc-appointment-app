import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useForms from '../BookNow/useForms';
import validateInfo from '../Auth/InfoValidation';

function Calendar({selected,onChange, ...props}) {
//const [startDate, setStartDate] = useState(new Date());

    //const {...props, onChange,startDate,setStartDate,values,setValues, handleSubmit, errors} = useForms(submitForm, validateInfo);



    return (
    
        <div>
        <DatePicker 
            selected={selected} 
            onChange={onChange} 
            showTimeSelect
            minDate={new Date()}
            
            //isClearable={true}
            dateFormat="MMMM d, yyyy h:mm aa"
            //value={startDate}
            {...props}
            />
            

            </div>
    ); 
}


export default Calendar;