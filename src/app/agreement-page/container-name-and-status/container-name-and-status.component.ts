import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { User } from '../../domaine/user/user';
import { ProviderData } from '../../domaine/providerData';
import {Recipient} from "../../domaine/recipient/recipient";

@Component({
  selector: 'app-container-name-and-status',
  templateUrl: './container-name-and-status.component.html',
  styleUrls: ['./container-name-and-status.component.scss']
})
export class ContainerNameAndStatusComponent implements OnInit, OnChanges {
  @Input() recipient?: Recipient;
  @Input() provider?: ProviderData;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

}
