import React from 'react';
import { getCalendarDays } from './useCalendar';
import DateCell from './DateCell';

const Calendar = ({ startDate, endDate, onSelectStartDate, onSelectEndDate }) => {
  const days = getCalendarDays();

  const handleClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      onSelectStartDate(date);
    } else if (startDate && !endDate) {
      onSelectEndDate(date);
    }
  };

  return (
    <div className="calendar">
      {days.map((day, index) => (
        <DateCell
          key={index}
          date={day}
          isStart={startDate && day.toDateString() === startDate.toDateString()}
          isEnd={endDate && day.toDateString() === endDate.toDateString()}
          isInRange={startDate && endDate && day >= startDate && day <= endDate}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Calendar;
