import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description-card-about-container',
  templateUrl: './provider-description-card-about-container.component.html',
  styleUrls: ['./provider-description-card-about-container.component.scss']
})
export class ProviderDescriptionCardAboutContainerComponent implements OnInit {


  @Input() base_tarif?: number;
  @Input() description: string = "";
  @Input() name: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
