// Function to check if a date is within 90 days from the current date
const isWithin90Days = (date) => {
    const today = new Date();
    const cutoffDate = new Date();
    cutoffDate.setDate(today.getDate() - 90);
  
    return date >= cutoffDate;
};

  export default isWithin90Days