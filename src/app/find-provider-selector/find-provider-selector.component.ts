import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-find-provider-selector',
  templateUrl: './find-provider-selector.component.html',
  styleUrls: ['./find-provider-selector.component.css']
})
export class FindProviderSelectorComponent implements OnInit {
  isListEnable: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  enableList() {
    this.isListEnable = true;
  }

  disableList() {
    this.isListEnable = false;
  }
}
