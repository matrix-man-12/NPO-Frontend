import React from 'react';

const DateInput = ({ label, date }) => {
  const formattedDate = date ? date.toDateString() : 'Select a date';

  return (
    <div className="date-input">
      <label>{label}:</label>
      <input type="text" value={formattedDate} readOnly className="read-only" />
    </div>
  );
};

export default DateInput;
