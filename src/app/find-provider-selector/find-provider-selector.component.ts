import {Component, Input, OnInit} from '@angular/core';
import {Animals} from "../animal/animals";



@Component({
  selector: 'app-find-provider-selector',
  templateUrl: './find-provider-selector.component.html',
  styleUrls: ['./find-provider-selector.component.css']
})
export class FindProviderSelectorComponent implements OnInit {
  isListEnable: boolean = false;
  animals: Animals[] = []

  constructor() { }

  ngOnInit(): void {
    this.createAnimal();
  }

  createAnimal() {
    let animalsName = ["chat", "chien", "Dromadère"]
    for (let i = 0; i < 3; i++) {
      this.animals.push(new Animals(animalsName[i]));
    }
    console.log(this.animals)
  }

  enableList() {
    this.isListEnable = true;
  }

  disableList() {
    this.isListEnable = false;
  }
}
