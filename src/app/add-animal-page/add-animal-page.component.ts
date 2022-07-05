import { Component, OnInit } from '@angular/core';
import { Animal } from '../homePage/animal/animal';
import { AnimalService } from '../services/animal/animal.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-animal-page',
  templateUrl: './add-animal-page.component.html',
  styleUrls: ['./add-animal-page.component.scss']
})
export class AddAnimalPageComponent implements OnInit {
  animal: Animal = new Animal("", "", "");
  private animalAddSubscribe?: Subscription;

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit(): void {
  }

  addAnimal() {
    this.animalAddSubscribe = this.animalService.addAnimal(this.animal).subscribe(() => this.router.navigate(['/list-animal']));
  }

  ngDestroy(){
    this.animalAddSubscribe!.unsubscribe();
  }
}
