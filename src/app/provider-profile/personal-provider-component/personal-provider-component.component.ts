import { Component, OnInit } from '@angular/core';
import { ProviderData } from '../../domaine/providerData';
import { ProviderService } from '../../services/provider/provider.service';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-personal-provider-component',
  templateUrl: './personal-provider-component.component.html',
  styleUrls: ['./personal-provider-component.component.scss']
})
export class PersonalProviderComponentComponent implements OnInit {
  reportSendOk: boolean | null = null;
  message: string = '';
  provider: ProviderData = ProviderData.newEmptyProvider()
  allAnimals: string[] = []

  constructor(private providerService: ProviderService, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.providerService.getOneProviderByUrl(this.authService.user?.userReference!).subscribe(provider => {
      this.provider = provider;
      this.initPossibleAnimals()
    })
  }

  updateInformation() {
    this.providerService.update(this.provider).subscribe(provider => {
      this.userService.update(this.provider.userId.split('/').pop()!, this.provider.email).subscribe(user => {
        this.reportSendOk = true;
        this.message = 'Mise à jour effectuée'
      }, error => {
        this.message = 'Une erreur est survenue'
        this.reportSendOk = false;
      })
    }, error => {
      this.message = 'Une erreur est survenue'
      this.reportSendOk = false;
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
