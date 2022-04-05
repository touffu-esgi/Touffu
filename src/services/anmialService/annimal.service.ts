import { Injectable } from '@angular/core';
import {Animal} from "../../app/homePage/animal/animal";

@Injectable({
  providedIn: 'root'
})
export class AnnimalService {

  constructor() { }

  fetchAllAnnimal() : Animal[]{
    let animals: Animal[] = [];
    let animalsName = ["chat", "chien", "Dromadère"]
    for (let i = 0; i < 3; i++) {
      animals.push(new Animal(animalsName[i]));
    }
    return animals;
  }
}
