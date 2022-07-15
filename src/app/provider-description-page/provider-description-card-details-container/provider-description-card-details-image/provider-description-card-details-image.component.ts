import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-description-card-details-image',
  templateUrl: './provider-description-card-details-image.component.html',
  styleUrls: ['./provider-description-card-details-image.component.scss']
})
export class ProviderDescriptionCardDetailsImageComponent implements OnInit {


  @Input() image?: string | ArrayBuffer | null;
  constructor() { }

  ngOnInit(): void {
  }

}
