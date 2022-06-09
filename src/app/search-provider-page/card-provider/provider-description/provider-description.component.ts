import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-provider-description',
  templateUrl: './provider-description.component.html',
  styleUrls: ['./provider-description.component.scss']
})
export class ProviderDescriptionComponent implements OnInit {


  @Input() description = "";
  constructor() { }

  ngOnInit(): void {
  }

}
