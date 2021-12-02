import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        
        <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            showTimeSelect
            isClearable={true}
            dateFormat="MMMM d, yyyy h:mm aa"
            />

    ); 
}


export default Calendar;