import { Component, OnInit } from '@angular/core';
import { Animal } from '../homePage/animal/animal';
import { AnimalService } from '../services/animal/animal.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-add-animal-page',
  templateUrl: './add-animal-page.component.html',
  styleUrls: ['./add-animal-page.component.scss']
})
export class AddAnimalPageComponent implements OnInit {
  animal: Animal = new Animal("", "", "");
  private animalAddSubscribe?: Subscription;

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
  }

  addAnimal() {
    this.animalAddSubscribe = this.animalService.addAnimal(this.animal).subscribe(() => window.location.replace("/list-animal"));
  }

  ngDestroy(){
    this.animalAddSubscribe!.unsubscribe();
  }
}
