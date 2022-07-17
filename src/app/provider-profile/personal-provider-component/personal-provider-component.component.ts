import { Component, OnInit } from '@angular/core';
import { ProviderData } from '../../domaine/providerData';
import { ProviderService } from '../../services/provider/provider.service';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { AddressService } from '../../services/address/address.service';
import { Address } from '../../domaine/address/address';

@Component({
  selector: 'app-personal-provider-component',
  templateUrl: './personal-provider-component.component.html',
  styleUrls: ['./personal-provider-component.component.scss']
})
export class PersonalProviderComponentComponent implements OnInit {
  updateSendOk: boolean | null = null;
  message: string = '';

  updateAddressOk: boolean | null = null;
  messageAddress: string = '';
  provider: ProviderData = ProviderData.newEmptyProvider()
  allAnimals: string[] = []
  address: Address = Address.newEmptyAddress();

  constructor(private providerService: ProviderService, private userService: UserService, private addressService: AddressService, private authService: AuthService) { }

  ngOnInit(): void {
    this.providerService.getOneProviderByUrl(this.authService.user?.userReference!).subscribe(provider => {

      this.provider = provider;
      this.getAddress();
      this.initPossibleAnimals()
    })
  }

  updateInformation() {
    this.providerService.update(this.provider).subscribe(provider => {
      this.userService.update(this.provider.userId.split('/').pop()!, this.provider.email).subscribe(user => {
        this.updateSendOk = true;
        this.message = 'Mise à jour effectuée de vos informations personnels effectuée'
      }, error => {
        this.message = 'Une erreur est survenue lors de la mise à jour de vos informations personnels effectuée'
        this.updateSendOk = false;
      })
    }, error => {
      this.message = 'Une erreur est survenue'
      this.updateSendOk = false;
    })

    this.addressService.update(this.address).subscribe(url => {
      this.updateAddressOk = true;
      this.messageAddress = 'En attente des mises à jours'
    }, error => {
      this.messageAddress = 'Une erreur est survenue lors de la mise à jour de votre address'
      this.updateAddressOk = false;
    })
  }

  private initPossibleAnimals() {
    this.allAnimals = ["chat", "chien", "chameau", "cheval"]
    if (this.provider!.animalType){
      this.provider!.animalType.forEach(animal => {
        const indexOfAnimal = this.allAnimals.indexOf(animal)
        if (indexOfAnimal !== -1) this.allAnimals.splice(indexOfAnimal, 1)
      })
    }else{
      this.provider!.animalType = [];
    }

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
  }

  private getAddress() {
    this.addressService.getOneAddress(this.provider.address).subscribe(address => {
      this.address = address;
    })
  }
}
