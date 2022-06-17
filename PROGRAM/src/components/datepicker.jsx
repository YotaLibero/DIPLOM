import React, {useState} from 'react';
import './Components.css';
import Input from "./Input";

function Datepicker() {
    const [date, setDate] = useState();

    console.log('Date', date);
    return(
        <div className={"mainDate"}>
            {/*<h1>Selected Date: {date}</h1>*/}
            <input className={'datepickerinput'} type={'date'} onChange={e => setDate(e.target.value)} />
        </div>
    )
}

export default Datepicker;