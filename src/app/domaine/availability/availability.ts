import { AvailabilityProps } from './availability.props';

export class Availability implements AvailabilityProps{
  dailyAvailability: { beginAt: number; endAt: number }[];
  day: string;
  id: string;
  providerId: string;

  constructor(dailyAvailability: { beginAt: number; endAt: number }[], day: string, id: string, providerId: string) {
    this.dailyAvailability = dailyAvailability;
    this.day = day;
    this.id = id;
    this.providerId = providerId;
  }

}
