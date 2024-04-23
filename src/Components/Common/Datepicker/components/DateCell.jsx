import React from 'react';
import isWithin90Days from '../utils/helper';

const DateCell = ({ date, isStart, isEnd, isInRange, onClick }) => {
  const isDisabled = !date || !isWithin90Days(date);

  return (
    <div
      className={`date-cell ${isStart ? 'selected' : ''} ${isEnd ? 'selected' : ''} ${isInRange ? 'in-range' : ''} ${isDisabled ? 'disabled' : ''}`}
      onClick={() => !isDisabled && onClick(date)} // Disable click for invalid dates
    >
      {date ? date.getDate() : ''}
    </div>
  );
};

export default DateCell;
