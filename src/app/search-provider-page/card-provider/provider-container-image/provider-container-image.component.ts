import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../../../domaine/address/address";

@Component({
  selector: 'app-provider-container-image',
  templateUrl: './provider-container-image.component.html',
  styleUrls: ['./provider-container-image.component.scss']
})
export class ProviderContainerImageComponent implements OnInit {


  @Input() name: string = "";
  @Input() placement?: Address;
  constructor() { }

  ngOnInit(): void {
  }

}
