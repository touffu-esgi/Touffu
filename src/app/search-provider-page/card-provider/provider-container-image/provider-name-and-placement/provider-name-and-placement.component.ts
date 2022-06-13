import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../../../../domaine/address/address";

@Component({
  selector: 'app-provider-name-and-placement',
  templateUrl: './provider-name-and-placement.component.html',
  styleUrls: ['./provider-name-and-placement.component.scss']
})
export class ProviderNameAndPlacementComponent implements OnInit {


  @Input() name: string = "";
  @Input() placement?: Address;
  constructor() { }

  ngOnInit(): void {
  }

}
