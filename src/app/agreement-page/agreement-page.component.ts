import { Component, OnInit } from '@angular/core';
import { Availability } from '../domaine/availability/availability';
import { Agreement } from '../domaine/agreement/agreement';
import { AgreementService } from '../services/agreement/agreement.service';
import { Subscription } from 'rxjs';
import { User } from '../domaine/user/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../services/provider/provider.service';
import { ProviderData } from '../domaine/providerData';
import { MessageService } from '../services/messages/message.service';
import {AvailabilityService} from "../services/availability/availability.service";
import {AuthService} from "../services/auth/auth.service";
import { Animal } from '../homePage/animal/animal';
import { AnimalService } from '../services/animal/animal.service';

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
  agreements: Agreement = new Agreement({
    animalsRefs: ['1'],
    beginningDate: '',
    duration: 0,
    endDate: '',
    providerRef: '2',
    recipientRef: '',
    recurrence: '',
    recurring: false,
    remuneration: 1
  });

  recipientAnimal?: Animal[];
  user?: User;

  private addAgreementSubscribe?: Subscription;
  provider?: ProviderData;

  constructor(
    private agreementService: AgreementService,
    private providerService: ProviderService,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private messageService: MessageService,
    private availabilityService: AvailabilityService,
    private animalService: AnimalService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.user = this.authService.user;
    this.activeRoute.queryParams.subscribe(params => {
      if (params["id"]){
        this.animalService.getAnimalsByRecipientId(this.user!.id!).subscribe(animals => {
          this.recipientAnimal = animals;
        })
        this.providerService.getOneProviders(params["id"]).subscribe(provider => {
          this.provider = provider;
          this.agreements.providerRef = provider.id
        });
      }else{
        this.router.navigate(['/'])
      }
    })
  }

  setWeeklyDate(availability: [Availability[], string]) {
    this.availabilities = availability[0];
    this.agreements.beginningDate = availability[1];
    const beginningDayString = this.availabilityService.getDayFromDate(new Date(this.agreements.beginningDate))
    this.getStartHour(beginningDayString)
  }

  getStartHour(day: string): void {
    this.hours = []
    this.availabilities?.forEach(availability => {
      if(availability.day === day){
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
    const hDisplayString = (hDisplay < 10 ? "0" : "") + hDisplay.toString()
    const minDisplay = (hour - hDisplay) * 60
    return `${hDisplayString}:${minDisplay === 0 ? '00' : minDisplay}`
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
    this.agreements.recurring = true;
  }

  concatHourWithBeginningDate(hour: string): void {
    this.agreements.beginningDate = this.agreements.beginningDate.split("T")[0];
    this.agreements.beginningDate += `T${hour}`;
  }

  sendAgreement(hour: string) {
    this.concatHourWithBeginningDate(hour);

    this.agreements.duration = parseFloat(this.agreements.duration.toString())
    this.agreements.recipientRef = this.authService.user!.id!;
    this.addAgreementSubscribe = this.agreementService.addAgreement(this.agreements).subscribe();
    this.messageService.sendMessage("Le contrat a été mis à jour", this.authService.user!.id!, this.provider!.id).subscribe();
  }

  ngDestroy() {
    this.addAgreementSubscribe!.unsubscribe()
  }
}
