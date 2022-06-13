import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description-card-about-description',
  templateUrl: './provider-description-card-about-description.component.html',
  styleUrls: ['./provider-description-card-about-description.component.scss']
})
export class ProviderDescriptionCardAboutDescriptionComponent implements OnInit {

  @Input() description: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
