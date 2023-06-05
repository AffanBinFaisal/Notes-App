import React, { useEffect, useState } from 'react';
import ReactClock from 'react-clock';
import 'react-clock/dist/Clock.css';


export default function ClockUK() {
    const [value, setValue] = useState(new Date().toLocaleString("en-US",{timeZone:'Europe/London',timeStyle:'long'}));
    

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date().toLocaleString("en-US",{timeZone:'Europe/London',timeStyle:'long'})), 1000);
        
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
        <ReactClock value={value} size={240}/>
        </>
    );
}