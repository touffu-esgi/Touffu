import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvailabilityInterface } from './Availability.interface';
import { Observable } from 'rxjs';
import { Availability } from '../../domaine/availability/availability';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService implements AvailabilityInterface{

  constructor(private http: HttpClient) { }

  getWeeklyAvailability(providerId: string, dateFrom: string): Observable<Availability> {
    return this.http.get<Availability>(`http://localhost:3000/availability/${providerId}?dateFrom=${dateFrom}`);
  }

}
