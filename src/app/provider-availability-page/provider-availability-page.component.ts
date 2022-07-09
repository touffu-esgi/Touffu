import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider/provider.service';
import { AuthService } from '../services/auth/auth.service';
import { Availability } from '../domaine/availability/availability';
import {convertNumericTimeToDisplay, translateDay} from '../utils/date-time.utils';
import {Timeframe} from "../domaine/availability/timeframe";
import {AvailabilityService} from "../services/availability/availability.service";

@Component({
  selector: 'app-provider-availability-page',
  templateUrl: './provider-availability-page.component.html',
  styleUrls: ['./provider-availability-page.component.scss']
})


export class ProviderAvailabilityPageComponent implements OnInit {

  WEEKDAYS: string[] = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
  ];
  availabilities: Availability[] = [];
  newAvailabilities: Availability[] = [];
  dailyHours: number[] = [];
  constructor(
    private providerService: ProviderService,
    private authService: AuthService,
    private availabilityService: AvailabilityService
  ) { }
  selectedTimeframes: Timeframe[] = []
  Weekdays: any;

  ngOnInit(): void {
    this.getAvailability();
    this.initHour();
  }

  private getAvailability() {
    this.providerService.getProviderAvailability(this.authService.user!.id!).subscribe(availabilities => {
      this.availabilities = availabilities;
      this.availabilities.forEach(availability => {
        if (availability.dailyAvailability)
          availability.dailyAvailability.forEach(timeframe => {
            for (let time = timeframe.beginAt ; time < timeframe.endAt ; time += 0.25) {
              this.selectedTimeframes.push(new Timeframe(availability.day!, time))
            }
          })
      })
    })
  }

  private initHour(beginHour: number = 6, endHour: number = 22) {
    for (let i = beginHour; i < endHour; i += 0.25){
      this.dailyHours.push(i);
    }
  }


  updateTimeframes(day: string, hour: number) {
    const index = this.getIndex(day, hour)
    if (index !== -1) {
      this.selectedTimeframes.splice(index, 1)
    } else {
      this.selectedTimeframes.push(new Timeframe(day, hour))
    }
  }

  getIndex (day: string, hour: number): number {
    return this.selectedTimeframes.findIndex(tf => tf.day === day && tf.hour === hour)
  }

  computeDisplayHour(time: number) {
    return convertNumericTimeToDisplay(time)
  }

  translateDay (day: string) {
    return translateDay(day);
  }

  updateAvailabilies() {
    let availability: Availability;
    this.newAvailabilities = []
    this.WEEKDAYS.forEach((day) => {
      const a = this.availabilities.filter(a => a.day === day)
      const selectedTimeframes = this.selectedTimeframes.filter(
        tf => tf.day === day
      )
      if (a.length === 0) {
        availability = new Availability('', day, [], this.authService.user!.id!)
      } else {
        availability = new Availability(a[0].id!, a[0].day!, [], this.authService.user!.id!)
      }
      availability.dailyAvailability = Timeframe.buildTimeBlock(selectedTimeframes)
      if (availability.dailyAvailability.length !== 0) {
        this.newAvailabilities.push(availability)
      }
    })
    this.newAvailabilities.forEach(a => {
      if (a.id === '') {
        delete a.id
        this.availabilityService.addAvailability(a).subscribe()
      } else {
        this.availabilityService.updateAvailability(a).subscribe()
      }
    })
  }
}
