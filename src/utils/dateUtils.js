export function formatDate(date) {
  return new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
}

export function isDateInRange(date, start, end) {
  const d = new Date(date);
  d.setHours(0,0,0,0);
  const s = new Date(start);
  s.setHours(0,0,0,0);
  const e = new Date(end);
  e.setHours(0,0,0,0);
  return d >= s && d <= e;
}
