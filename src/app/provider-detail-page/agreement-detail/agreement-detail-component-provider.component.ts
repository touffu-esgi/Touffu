import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Agreement} from "../../domaine/agreement/agreement";

@Component({
  selector: 'app-agreement-detail-provider',
  templateUrl: './agreement-detail-component-provider.component.html',
  styleUrls: ['./agreement-detail-component-provider.component.scss']
})
export class AgreementDetailComponentProvider implements OnInit {
  @Input() agreement?: Agreement;
  @Output() backToList: EventEmitter<void> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  back() {
    this.backToList.emit();
  }
}
