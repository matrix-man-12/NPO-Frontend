import React, { useState } from 'react';
import Calendar from './Calendar';
import DateInput from './DateInput';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSelectStartDate = (date) => {
    if (!endDate || date <= endDate) {
      setStartDate(date);
    }
  };

  const handleSelectEndDate = (date) => {
    if (!startDate || date >= startDate) {
      setEndDate(date);
    }
  };

  return (
    <div className="datepicker">
      <DateInput label="Start Date" date={startDate} />
      <DateInput label="End Date" date={endDate} />
      <Calendar
        startDate={startDate}
        endDate={endDate}
        onSelectStartDate={handleSelectStartDate}
        onSelectEndDate={handleSelectEndDate}
      />
    </div>
  );
};

export default Datepicker;
