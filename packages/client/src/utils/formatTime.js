export function formatTime(time) {
  // https://stackoverflow.com/questions/19700283/how-to-convert-time-milliseconds-to-hours-min-sec-format-in-javascript
  const milliseconds = parseInt((time % 1000) / 100);
  const seconds = Math.floor((time / 1000) % 60)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((time / (1000 * 60)) % 60)
    .toString()
    .padStart(2, '0');
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}
