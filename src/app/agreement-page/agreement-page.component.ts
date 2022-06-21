import { Component, OnInit } from '@angular/core';
import { Availability } from '../domaine/availability/availability';
import { min } from 'rxjs';

@Component({
  selector: 'app-agreement-page',
  templateUrl: './agreement-page.component.html',
  styleUrls: ['./agreement-page.component.scss']
})
export class AgreementPageComponent implements OnInit {
  public availabilities: Availability[] = [];
  public hours: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  setWeeklyDate(availability: Availability[]) {
    this.availabilities = availability;
  }

  getStartHour(value: string): void {
    this.availabilities?.forEach(availability => {
      if(availability.day == value){
        availability.dailyAvailability?.forEach((timeframe) => {
          for (let hour = timeframe.beginAt ; hour < timeframe.endAt ; hour += 0.25) {
            this.hours.push(hour)
          }
        })
      }
    })
    console.log(this.hours);
  }


  computeHourDisplay (hour: number): string {
    const hDisplay = parseInt(hour.toString()) % 24
    const minDisplay = (hour - hDisplay) * 60
    return `${hDisplay}:${minDisplay === 0 ? '00' : minDisplay}`
  }
}
