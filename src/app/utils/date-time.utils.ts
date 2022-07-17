export function convertNumericTimeToDisplay (time: number): string {
  const hour = parseInt(time.toString()) % 24;
  const min = (time - hour) * 60;
  return `${hour}:${min === 0 ? '00' : min}`
}

export function setWeekdays (): string[] {
  return [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
  ];
}

export function translateDay (englishDay: string): string {
  switch (englishDay.toUpperCase()) {
    case 'SUNDAY':
      return 'DIMANCHE';
    case 'MONDAY':
      return 'LUNDI';
    case 'TUESDAY':
      return 'MARDI';
    case 'WEDNESDAY':
      return 'MERCREDI';
    case 'THURSDAY':
      return 'JEUDI';
    case 'FRIDAY':
      return 'VENDREDI';
    case 'SATURDAY':
      return 'SAMEDI';
  }
  return '';
}

export function addToDate(
  date: Date,
  addDays?: number,
  addWeeks?: number,
  addMonths?: number,
  addYears?: number
  ): Date {
  let newDate = new Date(date);
  if (addDays) newDate.setDate(newDate.getDate() + addDays)
  if (addWeeks) newDate.setDate(newDate.getDate() + 7 * addWeeks)
  if (addMonths) newDate.setMonth(newDate.getMonth() + addMonths)
  if (addYears) newDate.setFullYear(newDate.getFullYear() + addYears)
  return newDate
}

export function getWeekSundayDate(date: Date): Date {
  let monday = new Date(date)
  if (date.getDay() !== 0) {
    monday = addToDate(date, -1 * date.getDay())
  }
  return monday
}

export function dateEqualsDate(date1: Date, date2: Date): boolean {
  return date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
}

export function newUTCDate(dateStr: string, endDay: boolean = false): Date {
  const splitDate = dateStr.split('T')
  const date = new Date( splitDate[0] + 'T02:00')
  if (endDay) date.setHours(23, 59)
  return date
}

export function fromStringToNumber (time: string): number {
  const timeSplit = time.split(':')
  const hour = parseInt(timeSplit[0])
  const minutes = parseInt(timeSplit[1])
  return hour + minutes / 60;
}
