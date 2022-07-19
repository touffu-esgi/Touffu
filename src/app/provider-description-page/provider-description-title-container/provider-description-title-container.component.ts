import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description-title-container',
  templateUrl: './provider-description-title-container.component.html',
  styleUrls: ['./provider-description-title-container.component.scss']
})
export class ProviderDescriptionTitleContainerComponent implements OnInit {

  @Input() description_title: string = "";
  @Input() placement: string = "";
  @Input() providerId?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
