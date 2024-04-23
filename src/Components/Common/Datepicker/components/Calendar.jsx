import React, { useState } from 'react';
import { getCalendarDays, getMonthName } from './useCalendar';
import DateCell from './DateCell';
import isWithin90Days from '../utils/helper';

// Function to navigate to the previous month
const navigatePreviousMonth = (currentMonth, setMonth) => {
  const newMonth = new Date(currentMonth);
  newMonth.setMonth(currentMonth.getMonth() - 1);
  setMonth(newMonth);
};

// Function to navigate to the next month
const navigateNextMonth = (currentMonth, setMonth) => {
  const newMonth = new Date(currentMonth);
  newMonth.setMonth(currentMonth.getMonth() + 1);
  setMonth(newMonth);
};

// Shortened names for days of the week, starting with Sunday
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const Calendar = ({ startDate, endDate, onSelectStartDate, onSelectEndDate }) => {
  // State to keep track of the current month
  const [currentMonth, setMonth] = useState(new Date());

  const days = getCalendarDays(currentMonth);

  const handleClick = (date) => {
    if (!date || !isWithin90Days(date)) {
      return; // No interaction for invalid or future dates
    }
  
    if (!startDate) {
      onSelectStartDate(date);
    } else if (startDate && !endDate) {
      if (date > startDate) {
        onSelectEndDate(date);
      } else {
        onSelectStartDate(date);
        onSelectEndDate(null);
      }
    } else {
      onSelectStartDate(date);
      onSelectEndDate(null);
    }
  };
  
  

  // Group the days into weeks of 7 for the grid layout
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="calendar">
      <div className="calendar-navigation">
        <button onClick={() => navigatePreviousMonth(currentMonth, setMonth)}>←</button>
        <span>{getMonthName(currentMonth)}</span> {/* Display the shortened month name */}
        <button onClick={() => navigateNextMonth(currentMonth, setMonth)}>→</button>
      </div>
      <div className="calendar-header">
        {daysOfWeek.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>
      {weeks.map((week, index) => (
        <div className="calendar-week" key={index}>
          {week.map((day, dayIndex) => (
            <DateCell
              key={dayIndex}
              date={day}
              isStart={startDate && day?.toDateString() === startDate?.toDateString()}
              isEnd={endDate && day?.toDateString() === endDate?.toDateString()}
              isInRange={startDate && endDate && day >= startDate && day <= endDate}
              onClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
