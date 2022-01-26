import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useForms from '../BookNow/useForms';
import validateInfo from '../Auth/InfoValidation';
import './Calendar.css';

function Calendar({selected,onChange,filterDate, ...props}) {
//const [startDate, setStartDate] = useState(new Date());

    //const {...props, onChange,startDate,setStartDate,values,setValues, handleSubmit, errors} = useForms(submitForm, validateInfo);

    

    return (
    
        <div>
        
        <DatePicker
            className="datepicker" 
            selected={selected} 
            onChange={onChange} 
            showTimeSelect
            filterDate={filterDate}
           // filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
            minDate={new Date()}
            minTime={new Date(0, 0, 0, 8)}
            maxTime={new Date(0, 0, 0, 15, 0)}
            
            //isClearable={true}
            dateFormat="MMMM d, yyyy h:mm aa"
            //value={startDate}
            {...props}
            />
            
            </div>
    ); 
}


export default Calendar;