import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description-card-about-title',
  templateUrl: './provider-description-card-about-title.component.html',
  styleUrls: ['./provider-description-card-about-title.component.scss']
})
export class ProviderDescriptionCardAboutTitleComponent implements OnInit {

  @Input() name: string = "";
  @Input() description: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
