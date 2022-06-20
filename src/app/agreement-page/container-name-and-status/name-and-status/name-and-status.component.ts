import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-name-and-status',
  templateUrl: './name-and-status.component.html',
  styleUrls: ['./name-and-status.component.scss'],
})
export class NameAndStatusComponent implements OnInit {
  @Input() fullName?: string;
  @Input() status?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
