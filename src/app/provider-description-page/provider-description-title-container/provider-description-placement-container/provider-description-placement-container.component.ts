import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description-placement-container',
  templateUrl: './provider-description-placement-container.component.html',
  styleUrls: ['./provider-description-placement-container.component.scss']
})
export class ProviderDescriptionPlacementContainerComponent implements OnInit {
  @Input() placement: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
