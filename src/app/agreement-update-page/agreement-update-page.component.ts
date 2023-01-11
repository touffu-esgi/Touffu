import { Component, OnInit } from '@angular/core';
import { AgreementService } from '../services/agreement/agreement.service';
import { ProviderService } from '../services/provider/provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agreement } from '../domaine/agreement/agreement';
import { ProviderData } from '../domaine/providerData';
import { User } from '../domaine/user/user';
import { Availability } from '../domaine/availability/availability';
import { AvailabilityService } from '../services/availability/availability.service';
import {AuthService} from "../services/auth/auth.service";
import { Animal } from '../homePage/animal/animal';
import { AnimalService } from '../services/animal/animal.service';
import {RecipientService} from "../services/recipient/recipient.service";
import {Recipient} from "../domaine/recipient/recipient";
import {fromStringToNumber} from "../utils/date-time.utils";



@Component({
  selector: 'app-agreement-update-page',
  templateUrl: './agreement-update-page.component.html',
  styleUrls: ['./agreement-update-page.component.scss']
})
export class AgreementUpdatePageComponent implements OnInit {
  startHourComponent?: string;

  constructor(
    private authService: AuthService,
    private agreementService: AgreementService,
    private providerService: ProviderService,
    private recipientService: RecipientService,
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService,
    private availabilityService: AvailabilityService,
    private router: Router,
  ){}

  public availabilities: Availability[] = [];
  public hours: number[] = [];
  public durations: number[] = [];
  public logError: string = "";
  public logSuccess: string = "";
  public confirm: boolean = false;

  public selectedAvailability?: Availability;
  agreement?: Agreement;
  provider?: ProviderData;
  recipient?: Recipient;
  user?: User;
  day?: number | string;
  animals: Animal[] = [];

  recipientAnimal?: Animal[];

  ngOnInit(): void {
    this.user = this.authService.user;
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['agreementId']) {
        this.getAgreement(params['agreementId']);
      }else{
        this.router.navigate(["/"])
      }
    })
  }

  private getAgreement(agreementId: string) {
    this.agreementService.getAgreementWithFilters([
      `id=${agreementId}`,
      `${this.user?.userType!}Ref=${this.user?.userReference!.split('/').pop()}`
    ]).subscribe(agreement => {
      this.agreement = agreement[0];
      this.setAgreementParams();
      this.getProvider(this.agreement.providerRef);
      this.getRecipient(this.agreement.recipientRef);
      this.getAnimals();
    }, error => {
      this.router.navigate(["/"])
    });
  }

  private setAgreementParams () {
    this.agreement!.duration = this.agreement!.duration / 60;
    this.startHourComponent = this.agreement!.beginningDate.split("T")[1].split(".")[0].substr(0,5)
    this.agreement!.endDate = this.agreement!.endDate.split("T")[0];
    if (this.agreement!.beginningDate) {
      this.agreement!.beginningDate = this.agreement!.beginningDate.split("T")[0]
    }
  }

  private getProvider(providerUrl: string) {
    this.providerService.getOneProviderByUrl(providerUrl).subscribe(provider => {
      this.provider = provider;
      this.agreement!.providerRef = provider.id
      this.setWeeklyDate(this.agreement!.beginningDate!);
    }, error => {
      this.router.navigate(['/'])
    });
  }

  private getRecipient (recipientUrl: string) {
    this.recipientService.getRecipient(recipientUrl).subscribe(recipient => {
      this.recipient = recipient;
      this.agreement!.recipientRef = recipient.id!
    })
  }


  setWeeklyDate(date: string) {
    this.availabilityService.getWeeklyAvailability(this.provider!.id!, date).subscribe(weeklyAvailability => {
      this.availabilities = weeklyAvailability;
      const beginningDayString = this.availabilityService.getDayFromDate(new Date(this.agreement!.beginningDate))
      this.getStartHour(beginningDayString)
      this.setMaxDuration(this.startHourComponent!)
    }, error => {
      this.logError = "Le prestataire n'a pas de disponibilités sur ces plages horaires"
    });
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
    const h = fromStringToNumber(hour)
    if (!this.selectedAvailability || this.selectedAvailability.dailyAvailability?.length === 0) {
      this.logError = "Le prestataire n'a pas de disponibilités sur ces plages horaires"
      return
    }
    this.selectedAvailability?.dailyAvailability?.forEach((timeframe) => {
      if (timeframe.beginAt <= h && h < timeframe.endAt) {
        const maxDuration = timeframe.endAt - h;
        for (let i = 0.25 ; i < maxDuration ; i += 0.25) {
          this.durations.push(i)
        }
      }
    })
  }

  setRecurrence(recurrence: string) {
    this.agreement!.recurrence = recurrence;
    this.agreement!.recurring = true;
  }

  concatHourWithBeginningDate(hour: string): void {
    this.agreement!.beginningDate = this.agreement!.beginningDate.split("T")[0];
    this.agreement!.beginningDate += `T${hour}`;
  }

  send() {
    if (!this.confirm) {
      this.logError = "Vous devez confirmer vos modifications"
      return;
    }
    if (this.user!.userType === "provider") {
      this.agreement!.agreedByProvider = true;
    } else {
      this.agreement!.agreedByRecipient = true;
    }
    this.concatHourWithBeginningDate(this.startHourComponent!)
    this.agreementService.update(this.agreement!).subscribe(res => {
      this.logError = ""
      this.logSuccess = "Contrat mis à jour"
    }, error => {
      this.logSuccess = ""
      this.logError = "Une erreur est survenue : " + error.message
    })
  }

  formatAnimalsRef() {
    // @ts-ignore
    this.agreement!.animals = [];
    // @ts-ignore
    this.agreement.animals.push(this.agreement?.animalsRefs)
  }

  private getAnimals() {
    if(this.authService.user?.userType == "recipient"){
      this.animalService.getAnimalsByRecipientId(this.user!.userReference!.split("/").pop()!).subscribe(animals => {
        this.recipientAnimal = animals;
        // @ts-ignore
        this.agreement!.animals! = []
        // @ts-ignore
        this.recipientAnimal.forEach(animal => this.agreement!.animals.push(animal.id!))
      })
    }else{
      // @ts-ignore
      this.animalService.getAnimalById(this.agreement!.animals[0].split('/').pop()).subscribe(animal => {
        this.animals.push(animal)
        // @ts-ignore
        this.agreement!.animals! = []
        // @ts-ignore
        this.animals.forEach(animal => this.agreement!.animals.push(animal.id!))
      })
    }
  }
}
