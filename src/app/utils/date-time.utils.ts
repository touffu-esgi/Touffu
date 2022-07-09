export function convertNumericTimeToDisplay (time: number): string {
  const hour = parseInt(time.toString()) % 24;
  const min = (time - hour) * 60;
  return `${hour}:${min === 0 ? '00' : min}`
}
