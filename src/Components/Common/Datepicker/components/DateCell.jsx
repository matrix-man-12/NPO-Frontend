import React from 'react';

const DateCell = ({ date, isStart, isEnd, isInRange, onClick }) => {
  // Return a blank cell if the date is null (placeholder)
  if (!date) {
    return <div className="date-cell empty" />; // Empty class for styling placeholders
  }

  const isSelected = isStart || isEnd;

  return (
    <div
      className={`date-cell ${isSelected ? 'selected' : ''} ${isInRange ? 'in-range' : ''}`}
      onClick={() => onClick(date)}
    >
      {date.getDate()} {/* Display only the day number */}
    </div>
  );
};

export default DateCell;
