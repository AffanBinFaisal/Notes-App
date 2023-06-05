import React, { useEffect, useState } from 'react';
import ReactClock from 'react-clock';
import 'react-clock/dist/Clock.css';


export default function ClockUS() {
    const [value, setValue] = useState(new Date().toLocaleString("en-US",{timeZone:'America/New_York',timeStyle:'long'}));
    

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date().toLocaleString("en-US",{timeZone:'America/New_York',timeStyle:'long'})), 1000);
        
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