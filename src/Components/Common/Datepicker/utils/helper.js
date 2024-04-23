// Function to check if a date is within 90 days from the current date
const isWithin90Days = (date) => {
    const today = new Date();
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(today.getDate() - 90);
  
    return date >= ninetyDaysAgo && date <= today;
};
  

  export default isWithin90Days