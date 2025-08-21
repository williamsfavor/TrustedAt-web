
export function dateFormat(dateString: string) {
    const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInWeek = secondsInDay * 7;

  if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInWeek) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInWeek * 3) {
    const weeks = Math.floor(diffInSeconds / secondsInWeek);
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  } else {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      year: "numeric",
    });
  }
  }
