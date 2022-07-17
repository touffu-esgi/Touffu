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
  animalTypes: string[] = [];
  private animalAddSubscribe?: Subscription;

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit(): void {
    this.getAnimalType();
  }

  addAnimal() {
    this.animalAddSubscribe = this.animalService.addAnimal(this.animal).subscribe(() => this.router.navigate(['/recipient-profile']));
  }

  ngDestroy(){
    this.animalAddSubscribe!.unsubscribe();
  }

  private getAnimalType() {
    return this.animalService.getAnimalType().subscribe(animalTypes => this.animalTypes = animalTypes)
  }
}
