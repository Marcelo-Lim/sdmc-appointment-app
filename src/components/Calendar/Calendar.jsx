import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Page, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

function Calendar() {
    const myLabels = React.useMemo(() => {
        return [{
            start: '2021-11-16',
            textColor: '#e1528f',
            title: '1 SPOTS'
        }];
    }, []);
    
    const myInvalid = React.useMemo(() => {
        return [{
            start: '2021-11-15T08:00',
            end: '2021-11-15T13:00'
        }, {
            start: '2021-11-15T15:00',
            end: '2021-11-15T17:00'
        }, {
            start: '2021-11-15T19:00',
            end: '2021-11-15T20:00'
        }];
    }, []);
    
    return (
        
            <Datepicker 
    controls={['calendar', 'timegrid']}
    display="inline"
    min="2021-11-15T00:00"
    max="2022-05-15T00:00"
    minTime="08:00"
    maxTime="19:59"
    stepMinute={60}
    labels={myLabels}
    invalid={myInvalid}
    
/>

    ); 
}


export default Calendar;