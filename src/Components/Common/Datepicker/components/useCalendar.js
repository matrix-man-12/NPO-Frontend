// Function to generate the calendar days for the given month
// Function to generate the calendar days for the given month
export const getCalendarDays = (currentMonth) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
  
    // Determine the number of days in the given month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Get the first day of the week in this month
    const firstDayOfWeek = new Date(year, month, 1).getDay();
  
    // Create an array of all days in the current month, with placeholders for empty cells
    const calendarDays = [];
  
    // Add placeholders to align the first day to the correct day of the week
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(null); // Placeholder for empty cell
    }
  
    // Fill in the actual days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(new Date(year, month, day));
    }
  
    return calendarDays;
  };
  
  
  // Function to get the abbreviated month name (first three characters)
  export const getMonthName = (date) => {
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return monthNames[date.getMonth()];
  };
  