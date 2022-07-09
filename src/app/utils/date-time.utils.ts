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
