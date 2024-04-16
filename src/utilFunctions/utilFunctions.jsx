export const FormatDate = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
  
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
  
    if (diff < minute) {
      return "Just now";
    } else if (diff < hour) {
      const minutes = Math.round(diff / minute);
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (diff < day) {
      const hours = Math.round(diff / hour);
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
      const days = Math.round(diff / day);
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    }
  };
  