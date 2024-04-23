import React from 'react';

const DateCell = ({ date, isStart, isEnd, isInRange, onClick }) => {
  // Define base class
  let cellClass = 'date-cell';

  // Append additional class names based on conditions
  if (isStart) {
    cellClass += ' start-date';
  }

  if (isEnd) {
    cellClass += ' end-date';
  }

  if (isInRange) {
    cellClass += ' in-range';
  }

  return (
    <div className={cellClass} onClick={() => onClick(date)}>
      {date.getDate()}
    </div>
  );
};

export default DateCell;
