import { Component, OnInit } from '@angular/core';
import { BillService } from '../services/bill/bill.service';
import { Bill } from '../domaine/bill/bill';
import { ProviderData } from '../domaine/providerData';
import { ProviderService } from '../services/provider/provider.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.scss']
})
export class ProviderProfileComponent implements OnInit {
  bills: Bill[] = []
  provider?: ProviderData;
  allAnimals: string[] = []
  constructor(
    private billService: BillService,
    private authService: AuthService,
    private providerService: ProviderService
) { }

  ngOnInit(): void {
    this.getProvider();
    this.getBills();
    console.log(this.allAnimals)
  }

  private getBills() {
    if (this.authService.user?.id) {
      this.billService.getProviderBills(this.authService.user?.id).subscribe(bills => {
        this.bills = bills;
        this.bills.forEach(bill => {
          bill.dateBill = bill.dateBill.split('T')[0]
        })
      })
    }
  }

  private getProvider() {
    this.providerService.getOneProviderByUrl(this.authService?.user?.userReference!).subscribe(provider => {
      this.provider = provider
      this.initPossibleAnimals();
    })
  }

  private initPossibleAnimals() {
    this.allAnimals = ["chat", "chien", "chameau", "cheval"]
    this.provider!.animalType.forEach(animal => {
      const indexOfAnimal = this.allAnimals.indexOf(animal)
      if (indexOfAnimal !== -1) this.allAnimals.splice(indexOfAnimal, 1)
      console.log(animal, indexOfAnimal)
    })
  }

  unsetAnimal(animal: string) {
    const indexOfAnimal = this.provider!.animalType.indexOf(animal)
    if (indexOfAnimal !== -1) this.provider!.animalType.splice(indexOfAnimal, 1)
    this.allAnimals.push(animal)
  }

  setAnimal(animal: string) {
    const indexOfAnimal = this.allAnimals.indexOf(animal)
    if (indexOfAnimal !== -1) this.allAnimals.splice(indexOfAnimal, 1)
    this.provider!.animalType.push(animal)
    console.log(this.provider?.animalType)
  }
}
