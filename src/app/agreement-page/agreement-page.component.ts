import { Component, OnInit } from '@angular/core';
import { Availability } from '../domaine/availability/availability';
import { min } from 'rxjs';
import { Agreement } from '../domaine/agreement/agreement';

@Component({
  selector: 'app-agreement-page',
  templateUrl: './agreement-page.component.html',
  styleUrls: ['./agreement-page.component.scss']
})
export class AgreementPageComponent implements OnInit {

  public availabilities: Availability[] = [];
  public hours: number[] = [];
  public durations: number[] = [];

  public selectedAvailability?: Availability;
  private agreements: Agreement = new Agreement({
    animalsRefs: [],
    beginningDate: '',
    duration: 0,
    endDate: '',
    id: '',
    providerRef: '',
    recipientRef: '',
    recurrence: '',
    recurring: false,
    remuneration: 0
  });

  constructor() { }

  ngOnInit(): void {
  }

  setWeeklyDate(availability: Availability[]) {
    this.availabilities = availability;
  }

  getStartHour(value: string): void {
    this.hours = []
    this.availabilities?.forEach(availability => {
      if(availability.day == value){
        this.selectedAvailability = availability
        availability.dailyAvailability?.forEach((timeframe) => {
          for (let hour = timeframe.beginAt ; hour < timeframe.endAt ; hour += 0.25) {
            this.hours.push(hour)
          }
        })
      }
    })
  }

  computeHourDisplay (hour: number): string {
    const hDisplay = parseInt(hour.toString()) % 24
    const minDisplay = (hour - hDisplay) * 60
    return `${hDisplay}:${minDisplay === 0 ? '00' : minDisplay}`
  }

  setMaxDuration(hour: string) {
    this.durations = []
    const h = parseFloat(hour)
    this.selectedAvailability!.dailyAvailability?.forEach((timeframe) => {
      if (timeframe.beginAt <= h && h < timeframe.endAt) {
        const maxDuration = timeframe.endAt - h;
        for (let i = 0.25 ; i < maxDuration ; i += 0.25) {
          this.durations.push(i)
        }
      }
    })
  }

  setRecurrence(recurrence: string) {
    this.agreements.recurrence = recurrence;
    console.log(this.agreements);
  }
}
