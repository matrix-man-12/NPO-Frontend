import React from 'react';
import isWithin90Days from '../utils/helper';

const DateCell = ({ date, isStart, isEnd, isInRange, onClick }) => {
  const isDisabled = date && !isWithin90Days(date);

  return (
    <div
      className={`date-cell ${isStart ? 'selected' : ''} ${isInRange ? 'in-range' : ''} ${isDisabled ? 'disabled' : ''}`}
      onClick={() => !isDisabled && onClick(date)} // Disable click if the date is out of range
    >
      {date ? date.getDate() : ''} {/* Only display the day number if date is valid */}
    </div>
  );
};

export default DateCell;
