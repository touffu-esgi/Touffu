import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-description-recommendations-card-content',
  templateUrl: './provider-description-recommendations-card-content.component.html',
  styleUrls: ['./provider-description-recommendations-card-content.component.scss']
})
export class ProviderDescriptionRecommendationsCardContentComponent implements OnInit {
  @Input() contents?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
