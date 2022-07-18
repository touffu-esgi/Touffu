import { Component, OnInit } from '@angular/core';
import { Availability } from '../domaine/availability/availability';
import {Timeframe} from "../domaine/availability/timeframe";
import {CalendarComponent} from "../calendar-component/calendar.component";

@Component({
  selector: 'app-provider-availability-page',
  templateUrl: './provider-availability-page.component.html',
  styleUrls: ['./provider-availability-page.component.scss']
})


export class ProviderAvailabilityPageComponent extends CalendarComponent {

  availabilities: Availability[] = [];
  newAvailabilities: Availability[] = [];
  userReference: string = this.authService.user!.userReference!.split('/').pop()!;
  successMsg: string = ""
  errorMsg: string = ""

  override ngOnInit(): void {
    this.getAvailability();
    this.initHour();
  }

  private getAvailability() {
    this.providerService.getProviderAvailability(this.userReference).subscribe(availabilities => {
      this.availabilities = availabilities;
      this.availabilities.forEach(availability => {
        if (availability.dailyAvailability)
          availability.dailyAvailability.forEach(timeframe => {
            for (let time = timeframe.beginAt ; time < timeframe.endAt ; time += 0.25) {
              this.selectedTimeframes.push(new Timeframe(availability.day!, time))
            }
          })
        this.sortSelectedTimeframes()
      })
    })
  }

  override updateTimeframes(day: string, hour: number) {
    const index = this.getIndex(day, hour)
    if (index !== -1) {
      this.selectedTimeframes.splice(index, 1)
    } else {
      this.selectedTimeframes.push(new Timeframe(day, hour))
      this.sortSelectedTimeframes()
    }
  }

  private sortSelectedTimeframes () {
    this.selectedTimeframes = this.selectedTimeframes.sort((tf1, tf2) => tf1.hour - tf2.hour)
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
        availability = new Availability('', day, [], this.userReference)
      } else {
        availability = new Availability(a[0].id!, a[0].day!, [], this.userReference)
      }
      availability.dailyAvailability = Timeframe.buildTimeBlock(selectedTimeframes)
      this.newAvailabilities.push(availability)
    })
    this.newAvailabilities.forEach(a => {
      if (a.id === '') {
        delete a.id
        this.availabilityService.addAvailability(a).subscribe(success => {
          this.successMsg = "Disponibilités mises à jour"
        }, error => {
          this.errorMsg = "Une erreur est survenue"
        })
      } else {
        this.availabilityService.updateAvailability(a).subscribe(success => {
          this.successMsg = "Disponibilités mises à jour"
        }, error => {
          this.errorMsg = "Une erreur est survenue"
        })
      }
    })
  }
}
