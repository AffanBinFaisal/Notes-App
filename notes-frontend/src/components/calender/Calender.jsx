import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';


export default function Calendar() {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
        console.log(date);
    };

    return (
        <>
            <ReactCalendar onChange={onChange} value={date} />
        </>
    );

}