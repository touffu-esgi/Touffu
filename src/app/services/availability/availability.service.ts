import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvailabilityInterface } from './Availability.interface';
import { Observable } from 'rxjs';
import { Availability } from '../../domaine/availability/availability';
import {HttpUtils} from "../../utils/http.utils";


enum WeekDays {
  SUNDAY,
  MONDAY,
  TUESDAY ,
  WEDNESDAY ,
  THURSDAY ,
  FRIDAY ,
  SATURDAY,
}

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService implements AvailabilityInterface{

  constructor(private http: HttpClient, private httpUtils: HttpUtils) { }

  private baseUrl: string = this.httpUtils.fullUrl()

  getWeeklyAvailability(providerId: string, dateFrom: string): Observable<Availability[]> {
    return this.http.get<Availability[]>(`${this.baseUrl}/availability/${providerId}?dateFrom=${dateFrom}`);
  }

  getDayFromDate(date: Date): string {
    const dayInt = date.getDay();
    if (WeekDays[dayInt]) return WeekDays[dayInt].toString();
    throw new Error('Incoherent weekday');
  }

  addAvailability(availability: Availability): Observable<Availability> {
    return this.http.post<Availability>(`${this.baseUrl}/availability`, availability)
  }

  updateAvailability(availability: Availability): Observable<Availability> {
    return this.http.put<Availability>(`${this.baseUrl}/availability`, availability)
  }
}
