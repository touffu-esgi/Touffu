import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description-title',
  templateUrl: './provider-description-title.component.html',
  styleUrls: ['./provider-description-title.component.scss']
})
export class ProviderDescriptionTitleComponent implements OnInit {

  @Input() description_title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
