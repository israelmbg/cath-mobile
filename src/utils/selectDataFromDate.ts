export default function selectTodaysDate(date: string) {
  const today = date.split(' ');

  return today[2];
}
