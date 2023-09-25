import dayjs from 'dayjs';

// 降順にソート
export function sortByDateDescending(a: dayjs.Dayjs, b: dayjs.Dayjs) {
  const dateA = dayjs(a);
  const dateB = dayjs(b);
  return dateA.isBefore(dateB) ? 1 : dateA.isAfter(dateB) ? -1 : 0;
}
