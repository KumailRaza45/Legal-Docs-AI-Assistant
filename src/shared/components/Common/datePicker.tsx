import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DateRangePickerPropsType = {
    onSelectDateRange: Function
}

const DateRangePicker = ({ onSelectDateRange }: DateRangePickerPropsType) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start as Date);
        setEndDate(end as Date);
        onSelectDateRange({ start, end });
    };

    return (
        <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            inline
        />
    );


};

export default DateRangePicker;
