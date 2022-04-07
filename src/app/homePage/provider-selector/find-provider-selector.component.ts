import {Component, Input, OnInit} from '@angular/core';
import {Animal} from "../animal/animal";
import {AnnimalService} from "../../services/anmialService/annimal.service";



@Component({
  selector: 'app-provider-selector',
  templateUrl: './find-provider-selector.component.html',
  styleUrls: ['./find-provider-selector.component.css']
})
export class FindProviderSelectorComponent implements OnInit {
  isListEnable: boolean = false;
  animals: any;

  constructor() { }

  ngOnInit(): void {
    this.animals = new AnnimalService().fetchAllAnnimal();
  }

  enableList() {
    this.isListEnable = true;
  }

  disableList() {
    this.isListEnable = false;
  }
}
