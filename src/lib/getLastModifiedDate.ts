export default function getLastModifiedDate(date: string) {
  const str = date.replace('D:', '')
  const [dateTime,] = str.split('+')
  const [year, month, day, hour, minute, second] = [
    dateTime.slice(0, 4),
    dateTime.slice(4, 6),
    dateTime.slice(6, 8),
    dateTime.slice(8, 10),
    dateTime.slice(10, 12),
    dateTime.slice(12, 14),
  ]
  return `${year}-${month}-${day}T${hour}:${minute}:${second}`
}