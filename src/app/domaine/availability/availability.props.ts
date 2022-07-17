export interface AvailabilityProps{
  id?: string;
  day: string;
  dailyAvailability: {
    beginAt: number;
    endAt: number;
  }[];
  providerId: string;
}
