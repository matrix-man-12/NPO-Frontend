export const getCalendarDays = (monthOffset = 0) => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + monthOffset + 1, 0);
  
    const days = [];
    for (let d = startOfMonth; d <= endOfMonth; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
  
    return days;
};