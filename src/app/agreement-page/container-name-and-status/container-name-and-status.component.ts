import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../domaine/user/user';
import { ProviderData } from '../../domaine/providerData';

@Component({
  selector: 'app-container-name-and-status',
  templateUrl: './container-name-and-status.component.html',
  styleUrls: ['./container-name-and-status.component.scss']
})
export class ContainerNameAndStatusComponent implements OnInit {
  @Input() user?: User;
  @Input() provider?: ProviderData;
  constructor() { }

  ngOnInit(): void {}

}
