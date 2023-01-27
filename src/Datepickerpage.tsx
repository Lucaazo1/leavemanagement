import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';


export const Datepickerpage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate2, setSelectedDate2] = useState(new Date());
    return(
        <div>
            <DatePicker selected={selectedDate} onChange={date => date && setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            filterDate={date => date.getDay() !== 6 && date.getDay() !== 0 }
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown/>
            
            <DatePicker selected={selectedDate2} onChange={date => date && setSelectedDate2(date)}
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            filterDate={date => date.getDay() !== 6 && date.getDay() !== 0 }
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown/>
        </div>
    )
}