export function createDateFromTimeString(timeString) {
  const today = new Date();
  const [time, period] = timeString.split(' ');
  const [hours, minutes] = time.split(':').map(Number);

  let adjustedHours = hours;
  if (period && period === 'PM' && hours < 12) {
    adjustedHours += 12;
  }

  today.setHours(adjustedHours, minutes, 0, 0);

  return today;
}

export const timeFromDate = date => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};
