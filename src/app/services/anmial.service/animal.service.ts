import { Injectable } from '@angular/core';
import {Animal} from "../../homePage/animal/animal";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  fetchAllAnimal() : Animal[]{
    let animals: Animal[] = [];
    let animalsName = ["chat", "chien", "Dromadère"]
    for (let i = 0; i < animalsName.length; i++) {
      animals.push(new Animal(animalsName[i]));
    }
    return animals;
  }
}
