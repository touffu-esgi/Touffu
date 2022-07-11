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

export function getWeekMondayDate(date: Date): Date {
  let monday = new Date(date)
  if (date.getDay() !== 1) {
    monday = addToDate(date, date.getDay() - 1)
  }
  return monday
}

export function dateEqualsDate(date1: Date, date2: Date): boolean {
  date1.setHours(0, 0, 0, 0)
  date2.setHours(0, 0, 0, 0)
  return date1 === date2
}
