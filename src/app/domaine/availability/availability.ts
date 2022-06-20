export class Availability {
  id?: string;
  day?: string;
  dailyAvailability?: {
    beginAt: number;
    endAt: number;
  }[];
  providerId?: string;

  constructor(id: string, day: string, dailyAvailability: { beginAt: number; endAt: number }[], providerId: string) {
    this.id = id;
    this.day = day;
    this.dailyAvailability = dailyAvailability;
    this.providerId = providerId;
  }
}
