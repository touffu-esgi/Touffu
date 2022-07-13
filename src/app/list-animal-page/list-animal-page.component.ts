import {Component, OnInit} from '@angular/core';
import {AnimalService} from '../services/animal/animal.service';
import {AuthService} from '../services/auth/auth.service';
import {Animal} from '../homePage/animal/animal';

@Component({
  selector: 'app-list-animal-page',
  templateUrl: './list-animal-page.component.html',
  styleUrls: ['./list-animal-page.component.scss']
})
export class ListAnimalPageComponent implements OnInit {

  constructor(private animalService: AnimalService, private authService: AuthService) { }
  animals: Animal[] = [];
  ngOnInit(): void {
    this.getAllAnimalsByRecipientId();
  }

  getAllAnimalsByRecipientId(){
    if(this.authService.user && this.authService.user.userReference) {
      this.animalService.getAnimalsByRecipientId(this.authService.user.userReference.split("/")[4]).subscribe(animals => {
        this.animals = animals;
        this.checkOnWalk();
      });
    }
  }

  private checkOnWalk() {
    for (let animal of this.animals) {
      if (animal.id) {
        this.animalService.checkAnimalOnWalk(animal.id).subscribe(agreement => {
          if (agreement)
            animal.isOnWalk = agreement.id;
        })
      }
    }
  }
}
