import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Page, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'material',
    themeVariant: 'light'
});

function Calendar() {
    const myLabels = React.useMemo(() => {
        return [{
            start: '2021-11-17',
            textColor: '#e1528f',
            title: '2 SPOTS'
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
    inputProps={{
        placeholder: 'Please Select...'
    }}
    min="2021-11-15T00:00"
    max="2022-05-15T00:00"
    minTime="08:00"
    maxTime="19:59"
    stepMinute={60}
    labels={myLabels}
    invalid={myInvalid}
    responsive={{
        xsmall: {
            controls: ['calendar', 'timegrid'],
            display: 'anchored',
            touchUi: true
        },
        small: {
            controls: ['calendar', 'timegrid'],
            display: 'center',
            touchUi: true
        },
        custom: {
            breakpoint: 800,
            controls: ['calendar', 'timegrid'],
            display: 'center',
            touchUi: true
        }
    }}
    
/>

    ); 
}


export default Calendar;